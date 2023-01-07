import { GtDatabase } from '@ghosten/database';

const gtDatabase = new GtDatabase();

addEventListener('message', ({ data: { type, data } }) => {
  gtDatabase
    .message(type, data)
    .then(postMessage)
    .catch(error => {
      postMessage({
        type: 'error',
        subType: type,
        message: error.message,
      });
    });
});
