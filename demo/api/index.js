const path = require('path');
const { readFile } = require('fs');
const pako = require('pako');

module.exports.initRoutes = function (server) {
  let configs = [];
  let histories = [];
  readFile(path.resolve(process.cwd(), 'demo/assets/export.gt'), undefined, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const result = JSON.parse(pako.inflate(data, { to: 'string' }), (k, v) => {
        if (k === 'config' && typeof v === 'string') {
          const matcher = v.match(/\w{2}/g);
          if (!matcher) {
            return '';
          }
          return pako.inflate(new Uint8Array(matcher.map(str => parseInt(str, 16))), {
            to: 'string',
          });
        } else {
          return v;
        }
      });
      configs = result.config;
      histories = result.history;
    }
  });
  server.get('/getNavigations', (req, res) => {
    const data = configs;
    const menuMap = new Map();
    const items = data.map(menu => {
      const item = {
        id: menu.id,
        label: menu.title,
        path: menu.url,
        icon: menu.icon,
        directory: menu.type === 'Directory',
        parentId: menu.parentId === 'null' ? undefined : +menu.parentId,
        children: [],
      };
      menuMap.set(item.id, item);
      return item;
    });
    items.forEach(menu => {
      if (menu.parentId) {
        const parentMenu = menuMap.get(menu.parentId);
        if (parentMenu) {
          parentMenu.children.push(menu);
          menu.parent = parentMenu;
        }
      }
    });
    items.forEach(item => {
      const paths = [];
      let loopItem = item;
      while (loopItem) {
        paths.unshift(loopItem.path);
        loopItem = loopItem.parent;
      }
      item.url = paths.join('/');
    });
    items.forEach(item => {
      delete item.parent;
    });
    res.json(items.filter(v => !v.parentId));
  });
  server.get('/getRoutes', (req, res) => {
    res.json(configs);
  });
  server.get('/getPageList', (req, res) => {
    res.json(configs);
  });
  server.get('/getLatestConfigByID', (req, res) => {
    res.json({
      ...configs.find(item => item.id === +req.query.id),
      ...histories.filter(item => item.id === +req.query.id).slice(-1)[0],
      components: [],
    });
  });
};
