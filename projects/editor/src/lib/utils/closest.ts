const matchFunction = Element.prototype.matches;
export default function closest(
  element: Element | null,
  value: any,
): HTMLElement | null {
  if (!element) {
    return null;
  }

  const selector = value;
  const callback = value;
  const nodeList = value;
  const singleElement = value;

  const isSelector = Boolean(typeof value === 'string');
  const isFunction = Boolean(typeof value === 'function');
  const isNodeList = Boolean(
    value instanceof NodeList || value instanceof Array,
  );
  const isElement = Boolean(value instanceof HTMLElement);

  function conditionFn(currentElement: HTMLElement) {
    if (!currentElement) {
      return currentElement;
    } else if (isSelector) {
      return matchFunction.call(currentElement, selector);
    } else if (isNodeList) {
      return [...nodeList].includes(currentElement);
    } else if (isElement) {
      return singleElement === currentElement;
    } else if (isFunction) {
      return callback(currentElement);
    } else {
      return null;
    }
  }

  let current: any = element;

  do {
    current =
      current.correspondingUseElement ||
      current.correspondingElement ||
      current;

    if (conditionFn(current)) {
      return current;
    }

    current = current.parentNode;
  } while (current && current !== document.body && current !== document);

  return null;
}
