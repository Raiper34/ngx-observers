# Ngx observers
[![npm version](https://badge.fury.io/js/ngx-observers.svg)](https://badge.fury.io/js/ngx-observers)
[![CircleCI](https://circleci.com/gh/Raiper34/ngx-observers.svg?style=shield)](https://circleci.com/gh/Raiper34/ngx-observers)
[![GitHub issues](https://img.shields.io/github/issues/Raiper34/ngx-observers)](https://github.com/Raiper34/ngx-observers/issues)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-observers)
![NPM](https://img.shields.io/npm/l/ngx-observers)
[![docs](https://badgen.net/badge/docs/online/orange)](https://ngx-observers.netlify.app)

Ngx observers is library to allow developer use Resize, Mutation and Intersection observer api like normal output events on some element.

## Instalation

`npm install ngx-observers --save`

then add `NgxSimpleTextEditorModule` into module imports
```typescript
import {NgxObserversModule} from "ngx-observers";

@NgModule({
// ...
  imports: [
    // ...
    NgxObserversModule,
    // ...
  ],
// ...
})
```

## Usage

- **[ResizeDirective](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver)** - Allow observe resize event of given object
```html
<div (obsResize)="resize($event)" [obsOptions]="{box: 'content-box'}" #elem="directive">...</div>
```
- **[MutationDirective](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver)** - Allow observe DOM tree changes
```html
<div (obsMutation)="mutate($event)" [obsOptions]="{subtree: false}" #elem="directive">...</div>
```
- **[Intersection directive](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)** - Allow observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport
```html
<div (obsIntersection)="intersect($event)" [obsOptions]="{threshold: 0.5}" #elem="directive">...</div>
```

You can access directive original observer object (e.g. `this.obsResize.observer`) using template variables (`#elem="directive"`):
```ts
@ViewChild('elem') obsResize: ResizeDirective | undefined;
@ViewChild('elem') obsMutation: MutationDirective | undefined;
@ViewChild('elem') obsIntersection: IntersectionDirective | undefined;
```

# Documentation
See [online](https://ngx-observers.netlify.app/modules/ngxobserversmodule)

# License
MIT
