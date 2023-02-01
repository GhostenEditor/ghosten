import { MessageEvent } from './types';

import { activatePage } from './activatePage';
import { addPage } from './addPage';
import { deleteDB } from './deleteDB';
import { deletePage } from './deletePage';
import { editPage } from './editPage';
import { exportDB } from './exportDB';
import { exportDBWithoutHistory } from './exportDBWithoutHistory';
import { getActivatedPageID } from './getActivatedPageID';
import { getHistoryByID } from './getHistoryByID';
import { getLatestConfigByID } from './getLatestConfigByID';
import { getNavigations } from './getNavigations';
import { getPageList } from './getPageList';
import { getRoutes } from './getRoutes';
import { importDB } from './importDB';
import { removeComponent } from './removeComponent';
import { save } from './save';
import { saveComponent } from './saveComponent';

export class GtDatabase {
  private DBName = 'GHOSTEN';
  private db: IDBDatabase | null = null;

  constructor() {}

  init(): Promise<IDBDatabase> {
    return new Promise(resolve => {
      const dbRequest = indexedDB.open(this.DBName, 3);
      let shouldImportData = false;
      dbRequest.addEventListener('upgradeneeded', function () {
        const db = this.result;
        Array.from(db.objectStoreNames).forEach(name => db.deleteObjectStore(name));
        const configObjectStore = db.createObjectStore('CONFIG', {
          keyPath: 'id',
          autoIncrement: true,
        });
        const configHistoryObjectStore = db.createObjectStore('CONFIG_HISTORY', {
          keyPath: ['id', 'timestamp'],
        });
        const componentObjectStore = db.createObjectStore('COMPONENT', {
          keyPath: 'id',
        });
        const componentHistoryObjectStore = db.createObjectStore('COMPONENT_HISTORY', {
          keyPath: ['id', 'timestamp'],
        });
        const editConfigStore = db.createObjectStore('EDIT_CONFIG', {
          keyPath: 'type',
        });
        configObjectStore.createIndex('id', 'id', { unique: true });
        configObjectStore.createIndex('url', 'url');
        configObjectStore.createIndex('type', 'type');
        configObjectStore.createIndex('parentId', 'parentId');
        configObjectStore.createIndex('url_parentId', ['url', 'parentId']);
        configHistoryObjectStore.createIndex('id', 'id');
        configHistoryObjectStore.createIndex('type', 'type');
        configHistoryObjectStore.createIndex('timestamp', 'timestamp');
        configHistoryObjectStore.createIndex('id_timestamp', ['id', 'timestamp']);
        componentObjectStore.createIndex('id', 'id');
        componentHistoryObjectStore.createIndex('id', 'id');
        componentHistoryObjectStore.createIndex('timestamp', 'timestamp');
        componentHistoryObjectStore.createIndex('id_timestamp', ['id', 'timestamp']);
        editConfigStore.createIndex('type', 'type');
        editConfigStore.createIndex('value', 'value');
        shouldImportData = true;
      });
      dbRequest.addEventListener('success', () => {
        this.log('info', 'connect success');
        this.db = dbRequest.result;
        this.db.addEventListener('close', () => {
          this.log('warn', 'closed unexpectedly');
          this.db = null;
        });
        if (shouldImportData) {
          const xhr = new XMLHttpRequest();
          const db = this.db;
          xhr.addEventListener('load', function () {
            setTimeout(() => importDB(db, this.response).then(() => resolve(db)), 1000);
          });
          xhr.responseType = 'blob';
          xhr.open('GET', 'assets/export.gt');
          xhr.send();
        } else {
          resolve(this.db);
        }
      });
      dbRequest.addEventListener('error', error => this.log('error', 'IndexedDB connect request failed %O', error));
    });
  }

  log(type: 'info' | 'warn' | 'error', message: string, ...rest: any[]) {
    switch (type) {
      case 'info':
        console.info('[IndexedDB]:' + message, ...rest);
        break;
      case 'warn':
        console.warn('[IndexedDB]:' + message, ...rest);
        break;
      case 'error':
        console.error('[IndexedDB]:' + message, ...rest);
        break;
    }
  }

  message(type: string, data?: any): Promise<MessageEvent> {
    return Promise.resolve(this.db || this.init())
      .then(
        db => {
          switch (type) {
            case 'save':
              return save(db, data);
            case 'getLatestConfigByID':
              return getLatestConfigByID(db, data);
            case 'addPage':
              return addPage(db, data);
            case 'editPage':
              return editPage(db, data);
            case 'deletePage':
              return deletePage(db, data);
            case 'getPageList':
              return getPageList(db, data);
            case 'activatePage':
              return activatePage(db, data);
            case 'getActivatedPageID':
              return getActivatedPageID(db);
            case 'importDB':
              return importDB(db, data);
            case 'exportDB':
              return exportDB(db);
            case 'exportDBWithoutHistory':
              return exportDBWithoutHistory(db);
            case 'deleteDB':
              return deleteDB(db, this.DBName);
            case 'getNavigations':
              return getNavigations(db);
            case 'getRoutes':
              return getRoutes(db);
            case 'getHistoryByID':
              return getHistoryByID(db, data);
            case 'saveComponent':
              return saveComponent(db, data);
            case 'removeComponent':
              return removeComponent(db, data);
            default:
              throw new Error('未知方法');
          }
        },
        reason => {
          this.log('error', 'error', reason);
          return reason;
        },
      )
      .catch(error => {
        this.log('error', 'error', error);
        throw error;
      });
  }
}
