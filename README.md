# nsAppleCardApp


```
$ ns create nsAppleCardApp --template @nativescript/template-blank-ng
```

```
$ npm install @schematics/angular @nativescript/schematics tslint --save-dev 
```

```
$ ng generate module appleCard  --routing
```

```
$ ng generate component apple-card/appleCardAnimation  --skip-import --skipTests=true --style=scss
```

```
$ find src -name "*.tns.*" -exec rm {} \;  
```

```
$ find src -name "*.spec.ts" -exec rm {} \;   
```




# Resources

- [ ] Fonts

* copy `fonts` folder to the `src` directory

* `app.css` Edit

```css
.btn {
    font-size: 18;
}

.fa {
  font-family: 'FontAwesome'
}

.android-lbl{
  color: black;
}
```

- [ ] Fonts

* copy `fonts` folder to the `src` directory

```
$ cp -r NSPlayground/app/fonts src 
```


- [ ] Images

* copy `images` folder to the `src` directory

```
$ cp -r NSPlayground/app/images src 
```

- [ ] Edit `webpack.config.js` file

* locate the `copyTargets` variable and add the `from: 'images/**'` JSON section like below

```javascript
const copyTargets = [
    { from: 'assets/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    { from: 'fonts/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    { from: 'images/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    ...copyReplacements
  ];
```
