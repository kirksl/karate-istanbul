const Table = require('cli-table3');
// const chalk = require('chalk');

// instantiate
const table = new Table({
  head: ['Method', 'Path'],
  colWidths: [10, 100],
  chars: {
    mid: '',
    'left-mid': '',
    'mid-mid': '',
    'right-mid': '',
  },
});

const split = thing => {
  if (typeof thing === 'string') {
    return thing.split('/');
  }
  if (thing.fast_slash) {
    return '';
  }
  const match = thing
    .toString()
    .replace('\\/?', '')
    .replace('(?=\\/|$)', '$')
    .match(/^\/\^((?:\\[.*+?^${}()|[\]\\/]|[^.*+?^${}()|[\]\\/])*)\$\//);
  return match ? match[1].replace(/\\(.)/g, '$1').split('/') : `<complex:${thing.toString()}>`;
};

const print = (path, layer) => {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
  } else if (layer.method) {
    const methodVerb = layer.method.toUpperCase();
    const methodPath = path
      .concat(split(layer.regexp))
      .filter(Boolean)
      .join('/');

    table.push([methodVerb, `/${methodPath}`]);
    // console.log('%s\t/%s', chalk.bgGreen.black(methodVerb),
    // chalk.dim(methodPath)); // eslint-disable-line no-console
  }
};

module.exports = routes => {
  console.log('\nExisting API Routes:\n'); // eslint-disable-line no-console
  routes.forEach(print.bind(null, []));
  console.log(table.toString()); // eslint-disable-line no-console
};
