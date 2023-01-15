import { isObservable } from 'rxjs';

export function executeCode(code: string, context: any, globalVariables: Record<string, any>) {
  const variablesName = Object.keys(globalVariables);
  const variablesValue = Object.values(globalVariables);
  if (/^\${.+?}$/.test(code)) {
    try {
      return Function(...variablesName, 'return ' + code.slice(2, -1)).call(context, ...variablesValue);
    } catch (e) {
      console.error(e);
    }
  } else if (/\${.+?}/g.test(code)) {
    try {
      return code.replace(/\${.+?}/g, substr =>
        Function(...variablesName, 'return ' + substr.slice(2, -1)).call(context, ...variablesValue),
      );
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const result = Function(...variablesName, 'return ' + code + '').call(context, ...variablesValue);
      if (isObservable(result)) {
        return result;
      } else {
        return Function(...variablesName, 'return function(){return ' + code + '}.bind(this)').call(
          context,
          ...variablesValue,
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}
