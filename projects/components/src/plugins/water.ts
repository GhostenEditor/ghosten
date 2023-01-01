const vertex = 'attribute vec4 position;void main(){gl_Position=position;}';
const fragment =
  // eslint-disable-next-line max-len
  '#define PI 3.14159\n#define DBLPI 6.28318\nprecision mediump float;uniform vec2 resolution;uniform float time;uniform float process;uniform vec3 color;uniform vec3 background;float pixel=1./min(resolution.x,resolution.y);float amplitude=sin(process*PI)*.08;float circle(vec2 st){vec2 dist=st-vec2(.5);float smoothFract=3.*pixel;float d=dot(dist,dist)*4.;return smoothstep(d-smoothFract,d+smoothFract,1.);}float water(vec2 _st,float waveNum){ return smoothstep(_st.y-pixel,_st.y+pixel,cos(fract(_st.x*waveNum)*DBLPI)*amplitude/2.+process)*.9;}void main(){vec2 st=gl_FragCoord.xy/resolution.xy;float alpha1=circle(st)*water(st+vec2(time*.3,-.1*amplitude),1.8);float alpha2=circle(st)*water(st-vec2(time+.2,.1*amplitude),1.2);vec4 color1=vec4(color/2.,alpha1);vec4 color2=vec4(color,alpha2);vec4 bg=vec4(background,circle(st));vec4 w= mix(color1,color2,alpha2);gl_FragColor=mix(bg,w,w.a);}';

export function waterBall(canvas: HTMLCanvasElement) {
  const uniform = {
    time: 0,
    process: 0,
    _color: [0, 0, 0],
    // @ts-ignore
    get color(): number[] {
      return this._color;
    },
    set color(c: number[]) {
      this._color = c;
    },
    _background: [0, 0, 0],
    // @ts-ignore
    get background(): number[] {
      return this._background;
    },
    set background(c: number[]) {
      this._background = c;
    },
  };
  setTimeout(() => {
    const gl = canvas.getContext('webgl', {
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    })!;
    canvas.width = 0;
    canvas.height = 0;
    const program = createProgram(gl, vertex, fragment)!;
    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, -1]),
      gl.STATIC_DRAW,
    );

    const resolutionUniformLocation = gl.getUniformLocation(
      program,
      'resolution',
    );
    const timeUniformLocation = gl.getUniformLocation(program, 'time');
    const processUniformLocation = gl.getUniformLocation(program, 'process');
    const colorUniformLocation = gl.getUniformLocation(program, 'color');
    const backgroundUniformLocation = gl.getUniformLocation(
      program,
      'background',
    );

    requestAnimationFrame(render);

    function render(time: number) {
      uniform.time = time * 0.0002;

      resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(
        positionAttributeLocation,
        2,
        gl.FLOAT,
        false,
        0,
        0,
      );

      gl.uniform2f(
        resolutionUniformLocation,
        gl.canvas.width,
        gl.canvas.height,
      );
      gl.uniform1f(timeUniformLocation, uniform.time);
      gl.uniform1f(processUniformLocation, uniform.process);
      gl.uniform3f(
        colorUniformLocation,
        uniform.color[0],
        uniform.color[1],
        uniform.color[2],
      );
      gl.uniform3f(
        backgroundUniformLocation,
        uniform.background[0],
        uniform.background[1],
        uniform.background[2],
      );

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
  });

  return uniform;
}

export function resizeCanvasToDisplaySize(
  canvas: HTMLCanvasElement,
  multiplier = 1,
) {
  const size = Math.max(
    Math.min(
      canvas.parentElement!.clientWidth - 20,
      canvas.parentElement!.clientHeight - 34,
    ),
    0,
  );
  if (canvas.width !== size) {
    canvas.width = canvas.height = size * devicePixelRatio;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
  }
  // noinspection JSSuspiciousNameCombination
  // const width = canvas.clientWidth * multiplier | 0;
  // const height = canvas.clientHeight * multiplier | 0;
  // if (canvas.width !== width || canvas.height !== height) {
  //   canvas.width = width;
  //   canvas.height = height;
  //   return true;
  // }
  return false;
}

function createShader(
  gl: WebGLRenderingContext,
  type: GLenum,
  source: string,
): WebGLShader | null {
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
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource,
  )!;
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
