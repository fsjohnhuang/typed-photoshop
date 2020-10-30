# Typed Photoshop ExtendScript
TypeScript typings for Photoshop ExtendScript.

## Installation
```
yarn add -D https://github.com/fsjohnhuang/typed-photoshop.git
```
or
```
npm install --save-dev https://github.com/fsjohnhuang/typed-photoshop.git
```

## Usage 
```
/// <reference types="typed-photoshop"/>
// import DefinitelyTyped library by triple-slash directive `<reference types=""/>` in main.ts file.

app.load(File("/path/to/image.tif"))
alert(activeDocument.channels)
app.close()
```

## Recommendation
### Polyfill
Since ExtendScript is based on ES3, there is no built-in `Array.prototype.map` method and other modern JavaScript APIs for you. `core-js` is a strong and widely used polyfill library, but there is a sad story that errors occur running on ExtendScript engine. Fortunately, `es5-shim` works fine.
Meanwhile the lack of the support of JSON is a pain to us yet, `json2` would be a great way to make up.

### Installation
```
yarn add es5-shim json2
```
or
```
npm install es5-shim json2 --save
```
### Usage
```
import 'es5-shim'
import 'json2'
// import polyfill library in main.ts file.
```

### tsconfig.json
1. Set `compilerOptions/target` to `ES3` to avoiding errors caused by `Object.defineProperty` running in ExtendScript engine;
2. Because the default setting of `compilerOptions/lib` includes `DOM` whose `File` definition is different from that in ExtendScript totally, set `compilerOptions/lib` to `["ES3"]` or `["ES5"]` please.
