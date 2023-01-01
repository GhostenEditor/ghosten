// import { Data, NodeData, NodesData } from 'rete/types/core/data';
// import { EMPTY, Observable, isObservable } from 'rxjs';

import { executeCode } from '../utils';

export class DataBinding<T = any> {
  public compiled = false;
  public data: string;
  public compiledData: T;
  // private _source: Observable<T>;

  // public getSource(context: Record<string, any>): Observable<T> {
  //   if (!this._source) {
  //     this._createSource(context);
  //     // const result = this.data.replace(/\${.+?}/g, substr => {
  //     //   return this.executeStringCode(substr.slice(2, -1), context);
  //     // });
  //     // console.log(result);
  //     // this._source = isObservable(result) ? result : (of(result) as any);
  //   }
  //   return this._source;
  // }

  constructor(data: any) {
    if (typeof data === 'string') {
      this.data = data;
    } else {
      try {
        this.data = JSON.stringify(data);
      } catch (e) {
        console.error(e);
      }
    }
  }

  compile(context: any, globalVariables: Record<string, any>) {
    return executeCode(this.data, context, globalVariables);
  }

  // private _createSource(params: Record<string, any>) {
  //   const scriptText = this.compile();
  //   const paramsName: string[] = ['http', 'map'];
  //   try {
  //     const result = Function(...paramsName, 'return ' + scriptText).call(
  //       undefined,
  //       ...paramsName.map(name => params[name]),
  //     );
  //     if (isObservable(result)) {
  //       this._source = result as Observable<T>;
  //     } else {
  //       console.error(new Error('该数据无法绑定'));
  //       this._source = EMPTY;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     this._source = EMPTY;
  //   }
  // }

  // private getTree(node: NodeData, nodesData: NodesData): any {
  //   for (const inputKey in node.inputs) {
  //     const connections = node.inputs[inputKey].connections;
  //     if (connections.length) {
  //       node.data[inputKey] = this.getTree(nodesData[connections[0].node], nodesData);
  //     }
  //   }
  //   return this.getNodeExpression(node);
  // }

  // getNodeExpression({ data, name }: NodeData) {
  //   switch (name) {
  //     case 'string':
  //     case 'number':
  //     case 'boolean':
  //     case 'output':
  //       return data.value;
  //     case 'http':
  //       return `http.request('${data.method}','${data.url}','${data.paramsOrBody}')`;
  //     case 'pipe':
  //       const ops = [data.op1, data.op2, data.op3].filter(v => v);
  //       return `${data.source}.pipe(${ops.join(',')})`;
  //     case 'map':
  //       return `map()`;
  //   }
  // }

  // private executeStringCode(code: string, context: Record<string, any>) {
  //   const snippets = code.split('.');
  //   if (!snippets.length) {
  //     return EMPTY;
  //   }
  //   let result: any = context;
  //   for (const snippet of snippets) {
  //     if (result === undefined || result === null) {
  //       throw new Error();
  //     }
  //     result = result[snippet];
  //   }
  //   return result;
  // }
}
