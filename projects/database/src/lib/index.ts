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

export function init() {
  const DBName = 'Ghost';
  const dbRequest = indexedDB.open(DBName);

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
  const db$: Promise<IDBDatabase> = new Promise<IDBDatabase>(resolve => {
    dbRequest.addEventListener('success', event =>
      resolve((event.target as any).result),
    );
  });

  dbRequest.addEventListener('error', console.error);
  addEventListener(
    'message',
    ({ data: { type, data } }: MessageEvent<{ type: string; data?: any }>) => {
      db$.then(db => {
        switch (type) {
          case 'save':
            save(db, data);
            break;
          case 'getLatestConfigByID':
            getLatestConfigByID(db, data);
            break;
          case 'addPage':
            addPage(db, data);
            break;
          case 'editPage':
            editPage(db, data);
            break;
          case 'deletePage':
            deletePage(db, data);
            break;
          case 'getPageList':
            getPageList(db);
            break;
          case 'activatePage':
            activatePage(db, data);
            break;
          case 'getActivatedPageID':
            getActivatedPageID(db);
            break;
          case 'importDB':
            importDB(db, data);
            break;
          case 'exportDB':
            exportDB(db);
            break;
          case 'deleteDB':
            db.close();
            deleteDB(DBName);
            break;
          case 'getNavigations':
            getNavigations(db);
            break;
          case 'getRoutes':
            getRoutes(db);
            break;
        }
      });
    },
  );
}
