import { NgModule } from '@angular/core';
import {IntersectionDirective} from "./intersection.directive";
import {MutationDirective} from "./mutation.directive";
import {ResizeDirective} from "./resize.directive";


/**
 * NgxObserversModule
 *
 * Module with all observer directives. You need to import it into your module.
 *
 * Example:
 * ```ts
 * import {NgxObserversModule} from "ngx-observers";
 *
 * @NgModule({
 *  //...
 *  imports: [
 *    //...
 *    NgxObserversModule,
 *    //...
 *  ],
 *  //...
 * })
 * ```
 */
@NgModule({
  declarations: [
    IntersectionDirective,
    MutationDirective,
    ResizeDirective,
  ],
  imports: [
  ],
  exports: [
    IntersectionDirective,
    MutationDirective,
    ResizeDirective,
  ]
})
export class NgxObserversModule { }
