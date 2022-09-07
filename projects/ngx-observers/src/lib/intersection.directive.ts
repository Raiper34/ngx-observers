import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

/**
 * IntersectionDirective
 *
 * Allow observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport
 *
 * Example:
 * ```html
 * <div (obsIntersection)="intersect($event)" [obsOptions]="{threshold: 0.5}" #elem="directive">...</div>
 * ```
 */
@Directive({
  selector: '[obsIntersection]',
  exportAs: 'directive'
})
export class IntersectionDirective implements OnInit, OnDestroy {

  /**
   * Original observer object
   *
   * You can access observer within your controller using @ViewChild
   *
   * Example:
   * ```ts
   * @ViewChild('elem') obsIntersection: IntersectionDirective | undefined; // elem is variable from template (#elem="directive")
   * ```
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
   */
  observer: IntersectionObserver | undefined;
  /**
   * Observer options input
   *
   * You can pass original observer options via [obsOptions] input, to configure observer behaviour.
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
   */
  @Input('obsOptions') options: IntersectionObserverInit = {};
  /**
   * obsIntersection output
   *
   * Emits array of IntersectionObserverEntry objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
   */
  @Output('obsIntersection') onResize = new EventEmitter<IntersectionObserverEntry[]>() ;

  /**
   * @ignore
   */
  constructor(private readonly element: ElementRef) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => this.onResize.emit(entries), this.options);
    this.observer.observe(this.element.nativeElement);
  }

  /**
   * @ignore
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
