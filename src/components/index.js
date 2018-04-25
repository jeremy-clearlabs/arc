// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
// const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

// console.log(req.keys());

// req.keys().forEach((key) => {
//   const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
//   module.exports[componentName] = req(key).default
// })

export * from './atoms';
export * from './molecules';
export * from './organisms';
export * from './templates';
export * from './pages';


// Resources:
// https://github.com/jamiebuilds/react-loadable
// https://github.com/webpack/webpack/issues/3364
// https://github.com/webpack/webpack/issues/1949
// https://github.com/diegohaz/arc/issues/131
// https://github.com/diegohaz/arc/tree/0b9cacb2767a77ac4ea55f0a8c8c5b6c757ebac0/src/components
// https://github.com/diegohaz/arc/issues/130
// https://tylermcginnis.com/react-router-code-splitting/
