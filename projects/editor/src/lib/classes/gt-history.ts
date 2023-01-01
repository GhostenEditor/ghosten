export class GtHistory {
  private historyMaxLength = 10;
  private history: any[] = [];

  get() {
    return this.history;
  }

  push(history: any) {
    if (this.history.length >= this.historyMaxLength) {
      this.history = this.history.slice(
        this.history.length - this.historyMaxLength - 1,
      );
    }
    this.history.push(history);
  }

  pop() {
    return this.history.pop();
  }

  clear() {
    this.history = [];
  }
}
