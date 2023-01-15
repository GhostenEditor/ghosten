import { MessageEvent } from './types';
import { log } from './log';

import { activatePage } from './activatePage';
import { addPage } from './addPage';
import { deleteDB } from './deleteDB';
import { deletePage } from './deletePage';
import { editPage } from './editPage';
import { exportDB } from './exportDB';
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
      const dbRequest = indexedDB.open(this.DBName, 4);

      dbRequest.addEventListener('upgradeneeded', function () {
        const db = this.result;
        Array.from(db.objectStoreNames).forEach(name => db.deleteObjectStore(name));
        const interactionStore = db.createObjectStore('USER_INTERACTION', {
          keyPath: 'category',
        });
        const configStore = db.createObjectStore('CONFIG', {
          keyPath: 'id',
          autoIncrement: true,
        });
        const configHistoryStore = db.createObjectStore('CONFIG_HISTORY', {
          keyPath: ['id', 'timestamp'],
        });
        const componentStore = db.createObjectStore('COMPONENT', {
          keyPath: 'id',
        });
        const componentHistory = db.createObjectStore('COMPONENT_HISTORY', {
          keyPath: ['id', 'timestamp'],
        });
        const editConfigStore = db.createObjectStore('EDIT_CONFIG', {
          keyPath: 'type',
        });
        interactionStore.createIndex('category', 'category', { unique: true });
        interactionStore.createIndex('value', 'value');
        configStore.createIndex('id', 'id', { unique: true });
        // configStore.createIndex('description', 'description');
        configStore.createIndex('url', 'url');
        configStore.createIndex('type', 'type');
        // configStore.createIndex('icon', 'icon');
        configStore.createIndex('parentId', 'parentId');
        configStore.createIndex('url_parentId', ['url', 'parentId']);
        configHistoryStore.createIndex('id', 'id');
        configHistoryStore.createIndex('type', 'type');
        configHistoryStore.createIndex('timestamp', 'timestamp');
        configHistoryStore.createIndex('id_timestamp', ['id', 'timestamp']);
        componentStore.createIndex('id', 'id');
        componentHistory.createIndex('id', 'id');
        componentHistory.createIndex('timestamp', 'timestamp');
        componentHistory.createIndex('id_timestamp', ['id', 'timestamp']);
        editConfigStore.createIndex('type', 'type');
        editConfigStore.createIndex('value', 'value');
      });
      dbRequest.addEventListener('success', () => {
        log('info', 'connect success');
        this.db = dbRequest.result;
        this.db.addEventListener('close', () => {
          log('warn', 'closed unexpectedly');
          this.db = null;
        });
        resolve(this.db);
      });
      dbRequest.addEventListener('error', error => log('error', 'IndexedDB connect request failed %O', error));
    });
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
          log('error', 'error', reason);
          return reason;
        },
      )
      .catch(error => {
        log('error', 'error', error);
        throw error;
      });
  }
}
