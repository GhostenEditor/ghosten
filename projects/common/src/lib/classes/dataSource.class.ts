import { Observable } from 'rxjs';

export interface IDataSource {
  id: string;
  type: string;
  args: any[];
  description?: string;
}

export class DataSource {
  private _dataSource: Set<IDataSource> = new Set<IDataSource>();
  private _dataSource$ = new Map<string, Observable<any>>();

  public get data() {
    return this._dataSource;
  }

  public get dataSourceMap$() {
    return this._dataSource$;
  }

  // public get(key: string) {
  //   return this._dataSource.get(key);
  // }

  public add(value: IDataSource) {
    return this._dataSource.add(value);
  }

  public keys() {
    return this._dataSource.keys();
  }

  public values() {
    return this._dataSource.values();
  }

  public clear() {
    return this._dataSource.clear();
  }

  public get size() {
    return this._dataSource.size;
  }

  public forEach(callbackFn: (value: IDataSource) => void, thisArg?: any) {
    this._dataSource.forEach(callbackFn, thisArg);
  }

  public setDataSource(callbackFn: (dataSource: IDataSource) => Observable<any>) {
    this.forEach(dataSource => this._dataSource$.set(dataSource.id, callbackFn(dataSource)));
  }

  public export(): IDataSource[] {
    return Array.from(this.values());
  }

  static create(dataSource: IDataSource[] = [], parent: DataSource = new DataSource()): DataSource {
    const newDataSource = new DataSource();
    dataSource.forEach(dataSource => newDataSource.add(dataSource));
    // const newDataSource = Object.create(parent || DataSource.prototype);
    // Object.assign(newDataSource, dataSource);
    return newDataSource;
  }
}
