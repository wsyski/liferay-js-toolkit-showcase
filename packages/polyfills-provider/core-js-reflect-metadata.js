require('core-js-builder')({
    modules: ['esnext.reflect.define-metadata','esnext.reflect.delete-metadata','esnext.reflect.get-metadata','esnext.reflect.get-metadata-keys','esnext.reflect.get-own-metadata','esnext.reflect.get-own-metadata-keys','esnext.reflect.has-metadata','esnext.reflect.has-own-metadata','esnext.reflect.metadata'],        // modules / namespaces, by default - all `core-js` modules
    blacklist: [], // blacklist of modules / namespaces, by default - empty list
    targets: '> 0.5%, last 2 versions, Firefox ESR, not dead, not IE 9-11',
    filename: './src/reflect-metadata.js',              // optional target filename, if it's missed a file will not be created
}).then(code => {                                  // code of result polyfill
    console.log(code);
}).catch(error => {
    console.error(error);
});
