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

## Include Declaration Files
Because this repository is not sub-project of DefinitelyTyped project yet, you have to include the declaration files manually in two ways.
1. Add a `types` reference.
```
/// <reference types="typed-photoshop"/>

app.load(File("/path/to/image.tif"))
alert(activeDocument.channels)
app.close()
```

2. Add `./node_modules/typed-photoshop` to `compilerOptions.typeRoot` property in tsconfig.json.
```
{
    "compilerOptions": {
        "typeRoot": ["./node_modules/@types", "./node_modules/typed-photoshop"] 
    }
}
```
```
app.load(File("/path/to/image.tif"))
alert(activeDocument.channels)
app.close()
```

## Recommendation
### Polyfill
Since ExtendScript is based on ES3, there is no built-in `Array.prototype.map` method and other modern JavaScript APIs for you. `core-js` is a powerful and widely used polyfill library, but it's a sad story that errors occur while it's running on ExtendScript engine. Fortunately, `es5-shim` does work fine.

Meanwhile `json2` helps us to fit the pain from the lack of native JSON support.

#### Installation
```
yarn add es5-shim json2
```
or
```
npm install es5-shim json2 --save
```
#### Usage
```
import 'es5-shim'
import 'json2'
// import polyfill library in main.ts file.
```

#### Object Notes
Because it's impossible to emulate property descriptors in ES3 engine, the following functions are just mocks and you should avoid to use them if possible, only shim thirdparty library.
`defineProperty` and `defineProperties`
Supports only *Data Descriptor*. *Writable*, *Enumerable* and *Configurable* properties of descriptor are ignored. If you try to define `set` or `get` property, there is an error thrown.
`getOwnPropertyDescriptor`
Supports only *Data Descriptor*. *Configurable* property of descriptor is always *TRUE*. *Writable* and *Enumerable* will be always *TRUE* on user defined objects, but may vary on built-ins.
`freeze`, `preventExtensions` and `seal`
Only validate input parameter and return the input if it is an object.
`isExtensible`, `isFrozen` and `isSealed`
If the input parameter is an object, returns *TRUE*, *FALSE* and *FALSE* respectively.

The following functions could be used in our code.
`getOwnPropertyNames`
The function uses reflection interface which are provided by ExtendScript. It gets the own properties of an object no matter enumerable or not. But there is no guarantee to the order of enumeration is the same as in the _for in loop_ statement.
`keys`
Used in the _for in loop_ statement along with `getOwnProperty` function to get own enumerable properties of an object.
`getPrototypeOf`
Return the built-in `__proto__` property of an object.

### tsconfig.json
1. Set `compilerOptions/target` to `ES3` to avoiding errors caused by `Object.defineProperty` running in ExtendScript engine;
2. Because the default setting of `compilerOptions/lib` includes `DOM` whose `File` definition is different from that in ExtendScript totally, set `compilerOptions/lib` to `["ES3"]` or `["ES5"]` please.
