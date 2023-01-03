import { activatePage } from './activatePage';
import { addPage } from './addPage';
import { deleteDB } from './deleteDB';
import { deletePage } from './deletePage';
import { editPage } from './editPage';
import { exportDB } from './exportDB';
import { getActivatedPageID } from './getActivatedPageID';
import { getLatestConfigByID } from './getLatestConfigByID';
import { getNavigations } from './getNavigations';
import { getPageList } from './getPageList';
import { getRoutes } from './getRoutes';
import { importDB } from './importDB';
import { save } from './save';

import { MessageEvent } from './types';

export class GtDatabase {
  private DBName = 'GHOSTEN';
  private dbRequest = indexedDB.open(this.DBName);
  private db$: Promise<IDBDatabase> = new Promise<IDBDatabase>(resolve => {
    this.dbRequest.addEventListener('success', event =>
      resolve((event.target as any).result),
    );
  });

  constructor() {
    this.dbRequest.addEventListener('upgradeneeded', function () {
      const db = this.result;
      Array.from(db.objectStoreNames).forEach(name =>
        db.deleteObjectStore(name),
      );
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
      const editConfigStore = db.createObjectStore('EDIT_CONFIG', {
        keyPath: 'type',
      });
      interactionStore.createIndex('category', 'category', { unique: true });
      interactionStore.createIndex('value', 'value');
      configStore.createIndex('id', 'id', { unique: true });
      configStore.createIndex('description', 'description');
      configStore.createIndex('url', 'url');
      configStore.createIndex('parentId', 'parentId');
      configHistoryStore.createIndex('id', 'id');
      configHistoryStore.createIndex('timestamp', 'timestamp');
      editConfigStore.createIndex('type', 'type');
      editConfigStore.createIndex('value', 'value');
    });

    this.dbRequest.addEventListener('error', console.error);
  }

  message(type: string, data?: any): Promise<MessageEvent> {
    return this.db$.then(db => {
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
          return getPageList(db);
        case 'activatePage':
          return activatePage(db, data);
        case 'getActivatedPageID':
          return getActivatedPageID(db);
        case 'importDB':
          return importDB(db, data);
        case 'exportDB':
          return exportDB(db);
        case 'deleteDB':
          db.close();
          return deleteDB(this.DBName);
        case 'getNavigations':
          return getNavigations(db);
        case 'getRoutes':
          return getRoutes(db);
        default:
          return Promise.resolve({ type: 'error', message: '未知方法' });
      }
    });
  }
}
