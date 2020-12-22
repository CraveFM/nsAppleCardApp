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
.fa-brands {
  font-family: "Font Awesome 5 Brands", "fa-brands-400"; }

.far {
  font-family: "Font Awesome 5 Free", "fa-regular-400";
  font-weight: 400; }

.fas {
  font-family: "Font Awesome 5 Free", "fa-solid-900";
  font-weight: 900; }

@keyframes flip-h-back {
  0% {
    transform: rotate3d(0, 0, 0); }
  49.99% {
    transform: rotate3d(0, -89.99, 0); }
  50.01% {
    transform: rotate3d(0, -90, 0);
    opacity: 0; }
  100% {
    transform: rotate3d(0, -180, 0); } }

@keyframes flip-h-front {
  0% {
    transform: rotate3d(0, 180, 0); }
  49.99% {
    transform: rotate3d(0, 90.01, 0); }
  50% {
    transform: rotate3d(0, 90, 0);
    opacity: 1; }
  100% {
    transform: rotate3d(0, 0, 0); } }

@keyframes flip-v-back {
  0% {
    transform: rotate3d(0, 0, 0); }
  49.99% {
    transform: rotate3d(-89.99, 0, 0); }
  50% {
    transform: rotate3d(-90, 0, 0);
    opacity: 0; }
  100% {
    transform: rotate3d(-180, 0, 0); } }

@keyframes flip-v-front {
  0% {
    transform: rotate3d(180, 0, 0); }
  49.99% {
    transform: rotate3d(90.1, 0, 0); }
  50% {
    transform: rotate3d(90, 0, 0);
    opacity: 1; }
  100% {
    transform: rotate3d(0, 0, 0); } }

.flip-v-back {
  animation-name: flip-v-back;
  animation-delay: 0;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; }

.flip-v-front {
  opacity: 0;
  animation-name: flip-v-front;
  animation-delay: 0;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; }

.flip-h-back {
  animation-name: flip-h-back;
  animation-delay: 0;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; }

.flip-h-front {
  opacity: 0;
  animation-name: flip-h-front;
  animation-delay: 0;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; }
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
