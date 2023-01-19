const vertex = 'attribute vec4 position;void main(){gl_Position=position;}';
const fragment =
  // eslint-disable-next-line max-len
  '#define PI 3.14159\n#define DBLPI 6.28318\nprecision mediump float;uniform vec2 resolution;uniform float time;uniform float process;uniform vec3 color;uniform vec3 background;float pixel=1./min(resolution.x,resolution.y);float amplitude=sin(process*PI)*.08;float circle(vec2 st){vec2 dist=st-vec2(.5);float smoothFract=3.*pixel;float d=dot(dist,dist)*4.;return smoothstep(d-smoothFract,d+smoothFract,1.);}float water(vec2 _st,float waveNum){ return smoothstep(_st.y-pixel,_st.y+pixel,cos(fract(_st.x*waveNum)*DBLPI)*amplitude/2.+process)*.9;}void main(){vec2 st=gl_FragCoord.xy/resolution.xy;float alpha1=circle(st)*water(st+vec2(time*.3,-.1*amplitude),1.8);float alpha2=circle(st)*water(st-vec2(time+.2,.1*amplitude),1.2);vec4 color1=vec4(color/2.,alpha1);vec4 color2=vec4(color,alpha2);vec4 bg=vec4(background,circle(st));vec4 w= mix(color1,color2,alpha2);gl_FragColor=mix(bg,w,w.a);}';

export class WaterBall {
  private gl = this.canvas.getContext('webgl', {
    antialias: true,
    premultipliedAlpha: false,
  })!;
  private program = createProgram(this.gl, vertex, fragment)!;
  private positionBuffer = this.gl.createBuffer();

  private positionAttributeLocation = this.gl.getAttribLocation(this.program, 'position');
  private resolutionUniformLocation = this.gl.getUniformLocation(this.program, 'resolution');
  private timeUniformLocation = this.gl.getUniformLocation(this.program, 'time');
  private processUniformLocation = this.gl.getUniformLocation(this.program, 'process');
  private colorUniformLocation = this.gl.getUniformLocation(this.program, 'color');
  private backgroundUniformLocation = this.gl.getUniformLocation(this.program, 'background');

  public color: number[] = [0, 0, 0];
  public background: number[] = [0, 0, 0];
  public time = 0;
  public process = 0;

  constructor(private canvas: HTMLCanvasElement) {
    canvas.width = 0;
    canvas.height = 0;
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, -1]),
      this.gl.STATIC_DRAW,
    );
  }

  render(time: number) {
    this.time = time * 0.0002;

    resizeCanvasToDisplaySize(this.gl.canvas as HTMLCanvasElement);
    const gl = this.gl;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(this.program);
    gl.enableVertexAttribArray(this.positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    gl.vertexAttribPointer(this.positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform2f(this.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform1f(this.timeUniformLocation, this.time);
    gl.uniform1f(this.processUniformLocation, this.process);
    gl.uniform3f(this.colorUniformLocation, this.color[0], this.color[1], this.color[2]);
    gl.uniform3f(this.backgroundUniformLocation, this.background[0], this.background[1], this.background[2]);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  destroy() {
    this.gl.deleteProgram(this.program);
  }
}

export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  const size = Math.max(Math.min(canvas.parentElement!.clientWidth, canvas.parentElement!.clientHeight), 100);
  if (canvas.width !== size) {
    canvas.width = canvas.height = size * devicePixelRatio;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
  }
  return false;
}

function createShader(gl: WebGLRenderingContext, type: GLenum, source: string): WebGLShader | null {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  gl.deleteShader(shader);
  return null;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
): WebGLProgram | null {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)!;
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)!;
  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
  gl.deleteProgram(program);
  return null;
}
