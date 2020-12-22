# nsAppleCardApp


```
$ ns create nsAppleCardApp --template @nativescript/template-blank-ng
```

## :a: Apple Card Component

:gear: Angular CLI schematics generation tools

```
$ npm install @schematics/angular @nativescript/schematics tslint --save-dev 
```

:pushpin: Apple Card Module

- [ ] Generate the module

```
$ ng generate module appleCard  --routing
```

- [ ] Edit `app-routing.module.ts` and replace the entire `routes` JSON array bypassing the `Home` Module

```typescript
const routes: Routes = [
    { path: "", redirectTo: "/appleCard", pathMatch: "full" },
    { path: "appleCard", loadChildren: () => import("./apple-card/apple-card.module").then(m => m.AppleCardModule) }, // lazy loaded module
];
```

:pushpin: Apple Card Animation Component

:gear: Since we'll be using [saas](https://docs.nativescript.org/ui/theme#sass-usage), let's add the `sass` package

```
$ npm install sass --save-dev
```

- [ ] Generate the component

```
$ ng generate component apple-card/appleCardAnimation  --skip-import --skipTests=true --style=scss
```

* do some clean up

```
$ find src -name "*.tns.*" -exec rm {} \;  
```

```
$ find src -name "*.spec.ts" -exec rm {} \;   
```


:round_pushpin: in the `AppleCardAnimationComponent` `Class`

- [ ] Add the instance variables that will be used later on

```typescript
  frontAppleCard: GridLayout;
  backAppleCard: GridLayout;
  appleCardParentView: GridLayout;
  frontCardInteraction: boolean = false;
```

- [ ] Edit the constructor

```typesccript
    constructor(private _page: Page) { }
```

- [ ] implement the `AfterViewInit` `Interface` and add its method

```typescript
  ngAfterViewInit(): void {
    this.frontAppleCard = this._page.getViewById('frontAppleCard');
    this.backAppleCard = this._page.getViewById('backAppleCard');
    this.appleCardParentView = this._page.getViewById('appleCardParentView');
  }
```

- [ ] implement the remaining methods


```typescript
  onThemeSelectorTap(theme: string): void {
    this.appleCardParentView.className = theme;
  }

  animateAppleCard(view: GridLayout, classes: string): void {
    view.className = classes;
  }

  onRotateCard(rotate: string) {
    if (!this.frontCardInteraction) {
      this.animateAppleCard(this.frontAppleCard, this.getRotationStyle('front', 'back', rotate));
      this.animateAppleCard(this.backAppleCard, this.getRotationStyle('back', 'front', rotate));
      this.frontCardInteraction = true;
    } else {
      this.animateAppleCard(this.frontAppleCard, this.getRotationStyle('front', 'front', rotate));
      this.animateAppleCard(this.backAppleCard, this.getRotationStyle('back', 'back', rotate));
      this.frontCardInteraction = false;
    }
  }

  getRotationStyle(from: string, to: string, rotate: string) {
    return `apple-card apple-card-${from} flip-${rotate}-${to}`;
  }
```

:round_pushpin:  StyleSheet

- [ ] Open the `apple-card-animation.component.scss` class file, add the below styles:

```scss
$content-buttons-border-color: #EBEBEB;
$white-color: #ffffff;
$black-color: #000000;

@mixin set-bg-image($imageName) {
  background-image: url("~/images/#{$imageName}.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* start: theme config */
$theme-list-map: (
  theme1: (
    apple-card-border-color: #EBEBEB,
    apple-card-background-color: #F9F7F8,
    apple-card-name-color: #6F7275,
    apple-card-icon-color: #BBBAB7,
    apple-card-image-front: "music-03",
    apple-card-image-back: "music-04"
  ),
  theme2: (
    apple-card-border-color: #5156A6,
    apple-card-background-color: #6369CA,
    apple-card-name-color: #ffffff,
    apple-card-icon-color: #D8DAF2,
    apple-card-image-front: "music-03",
    apple-card-image-back: "music-04"
  ),
  theme3: (
    apple-card-border-color: #E8935D,
    apple-card-background-color: #FFB385,
    apple-card-name-color: #FFFFFF,
    apple-card-icon-color: #E8935D,
    apple-card-image-front: "music-05",
    apple-card-image-back: "music-03"
  ),
  theme4: (
    apple-card-border-color: #CACAF9,
    apple-card-background-color: #EAEAFF,
    apple-card-name-color: #63376E,
    apple-card-icon-color: #CACAF9,
    apple-card-image-front: "music-05",
    apple-card-image-back: "music-03"
  ),
  theme5: (
    apple-card-border-color: #B766CC,
    apple-card-background-color: #884B96,
    apple-card-name-color: #FFFFFF,
    apple-card-icon-color: #B766CC,
    apple-card-image-front: "music-04",
    apple-card-image-back: "music-05"
  )
);

@mixin set-theme($apple-card-border-color, $apple-card-background-color, $apple-card-name-color, $apple-card-icon-color, $apple-card-image-front, $apple-card-image-back) { 
  border-color: $apple-card-border-color;
  background-color: $apple-card-background-color;
  &.apple-card-front {
    @include set-bg-image($apple-card-image-front);
  }
  &.apple-card-back {
    @include set-bg-image($apple-card-image-back);
  }
  .name {
    color: $apple-card-name-color;
  }
  .apple-icon, .icon-mastercard {
    color: $apple-card-icon-color;
  }
  .sim-card-icon {
    background-color: $apple-card-icon-color;
  }
  .card-bottom {
    background-color: $apple-card-border-color;
  }
}

@each $theme-name, $map in $theme-list-map {
  .color-selector Button.#{$theme-name}-bg {
    background-color: map-get($map, apple-card-background-color);
    border-color: map-get($map, apple-card-border-color);
  }

  .#{$theme-name} .rotate-selector Button {
    width: 150;
    background-color: map-get($map, apple-card-background-color);
    color: map-get($map, apple-card-name-color);
    border-color: map-get($map, apple-card-border-color);
  }

  .#{$theme-name} .apple-card {
    @include set-theme(
      map-get($map, apple-card-border-color), 
      map-get($map, apple-card-background-color), 
      map-get($map, apple-card-name-color), 
      map-get($map, apple-card-icon-color),
      map-get($map, apple-card-image-front),
      map-get($map, apple-card-image-back)
    )
  }
} /* end: theme config */

#appleCardParentView {
  background-color: #ffffff;
}

.content-buttons {
  border-color: $content-buttons-border-color;
  border-width: 1;
  Button {
    margin: 10;
    border-width: 1;
    color: $white-color;
    padding: 12;
    border-radius: 10;
    text-transform: capitalize;
  }
}

.color-selector {
  Button {
    width: 50;
    height: 50;
  }
}

.apple-card {
  width: 270;
  height: 160;
  border-width: 1;
  border-radius: 10;
  .name {
    font-size: 13;
    vertical-alignment: center; // for android
  }
}

.apple-card-front {
  @extend .apple-card;
  padding: 0 24;
  .apple-icon {
    font-size: 32;
    text-align: left;
    vertical-alignment: center; // for android
  }
  .sim-card-icon {
    width: 30;
    height: 20;
    border-radius: 3;
    horizontal-alignment: right;
  }
}

.apple-card-back {
  @extend .apple-card;

  .icon-mastercard {
    text-align: right;
    font-size: 32;
    vertical-alignment: top;
    padding: 24 24 0 0;
  }
  .card-bottom {
    border-bottom-right-radius: 10; // for android
    border-bottom-left-radius: 10; // for android
  }
  .name {
    vertical-alignment: top;
    padding: 24 0 0 24;
  }
}
```

:round_pushpin: Template

- [ ] Edit the `apple-card-animation.component.html` template

```xml
<ActionBar title="Apple Card">
</ActionBar>
<GridLayout id="appleCardParentView" rows="auto,*,auto" columns="*" class="theme2">
  <GridLayout rows="*" columns="auto,auto,auto,auto,auto" class="content-buttons color-selector">
    <Button row="0" col="0" class="theme2-bg" (tap)="onThemeSelectorTap('theme2')"></Button>
    <Button row="0" col="1" class="theme1-bg" (tap)="onThemeSelectorTap('theme1')"></Button>
    <Button row="0" col="2" class="theme3-bg" (tap)="onThemeSelectorTap('theme3')"></Button>
    <Button row="0" col="3" class="theme4-bg" (tap)="onThemeSelectorTap('theme4')"></Button>
    <Button row="0" col="4" class="theme5-bg" (tap)="onThemeSelectorTap('theme5')"></Button>
  </GridLayout>
  <GridLayout
    id="backAppleCard" 
    row="1" col="0"
    rows="4*,1*" columns="*,*"
    class="apple-card apple-card-back">
    <Label 
      row="0" col="0"
      textWrap="true"
      class="name">
      <FormattedString>
        <Span text="Goldman &#xa;"></Span>
        <Span text="Sachs"></Span>
      </FormattedString>
    </Label>
    <Label 
      row="0" col="1"
      class="fa-brands icon-mastercard" 
      text="&#xf1f1;"></Label>
    <label 
      row="1" col="0" colSpan="2"
      class="card-bottom"></label>
  </GridLayout>

  <GridLayout
    id="frontAppleCard"
    row="1" col="0"
    rows="*,*" columns="2*,1*"
    class="apple-card apple-card-front">
    <Label 
      row="0" col="0"
      class="fa-brands apple-icon" 
      text="&#xf179;"></Label>
    <Label 
      row="1" col="1"
      class="sim-card-icon"></Label>
    <Label 
      row="1" col="0"
      class="name"
      text="@salvadeveloper"></Label>
  </GridLayout>

  <GridLayout row="2" col="0"
    rows="*" columns="*,*"
    class="content-buttons rotate-selector">
    <Button row="0" col="0"
      (tap)="onRotateCard('v')"
      text="Vertical Rotate"></Button>
    <Button row="0" col="1"
      (tap)="onRotateCard('h')"
      text="Horizontal Rotate"></Button>
  </GridLayout>
</GridLayout>
```


## :construction: Resources

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
