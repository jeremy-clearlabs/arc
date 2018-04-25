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
