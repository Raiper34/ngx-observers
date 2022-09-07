# Ngx observers

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
See http://www.ngx-observers.netlify.com

# License
MIT
