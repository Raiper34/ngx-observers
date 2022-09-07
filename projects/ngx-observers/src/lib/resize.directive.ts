import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

/**
 * ResizeDirective
 *
 * Allow observe resize event of given object
 *
 * Example:
 * ```html
 * <div (obsResize)="resize($event)" [obsOptions]="{box: 'content-box'}" #elem="directive">...</div>
 * ```
 */
@Directive({
  selector: '[obsResize]',
  exportAs: 'obsResize'
})
export class ResizeDirective implements OnInit, OnDestroy {

  /**
   * Original observer object
   *
   * You can access observer within your controller using @ViewChild
   *
   * Example:
   * ```ts
   * @ViewChild('elem') obsResize: ResizeDirective | undefined; // elem is variable from template (#elem="directive")
   * ```
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver
   */
  observer: ResizeObserver | undefined;
  /**
   * Observer options input
   *
   * You can pass original observer options via [obsOptions] input, to configure observer behaviour.
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe
   */
  @Input('obsOptions') options: ResizeObserverOptions = {};
  /**
   * obsResize output
   *
   * Emits array of ResizeObserverEntry objects that can be used to access the new dimensions of the element after each change.
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver
   */
  @Output('obsResize') onResize = new EventEmitter<ResizeObserverEntry[]>() ;

  /**
   * @ignore
   */
  constructor(private readonly element: ElementRef) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.observer = new ResizeObserver(entries => this.onResize.emit(entries));
    this.observer.observe(this.element.nativeElement, this.options);
  }

  /**
   * @ignore
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
