const bundle = require('less-bundle-promise');

bundle({
  src: './src/stylesheet/app.less',
  dest: './src/stylesheet/antd.less',
  writeFile: true,
  rootVars: {
    'root-entry-name': 'default'
  }
}).then((/* output */) => {
  // console.log(output);
}).catch((error) => {
  console.log('Error', error);
});
