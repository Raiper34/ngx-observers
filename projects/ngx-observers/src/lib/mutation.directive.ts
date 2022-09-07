import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

/**
 * MutationDirective
 *
 * Allow observe DOM tree changes
 *
 * Example:
 * ```html
 * <div (obsMutation)="mutate($event)" [obsOptions]="{subtree: false}" #elem="directive">...</div>
 * ```
 */
@Directive({
  selector: '[obsMutation]',
  exportAs: 'directive'
})
export class MutationDirective implements OnInit, OnDestroy {

  /**
   * Original observer object
   *
   * You can access observer within your controller using @ViewChild
   *
   * Example:
   * ```ts
   * @ViewChild('elem') obsMutation: MutationDirective | undefined; // elem is variable from template (#elem="directive")
   * ```
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
   */
  observer: MutationObserver | undefined;
  /**
   * Observer options input
   *
   * You can pass original observer options via [obsOptions] input, to configure observer behaviour.
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
   */
  @Input('obsOptions') options: MutationObserverInit = {};
  /**
   * obsMutation output
   *
   * Emits array of MutationRecord objects, describing each change that occurred.
   *
   * Detailed information can be found: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
   */
  @Output('obsMutation') onResize = new EventEmitter<MutationRecord[]>() ;

  /**
   * @ignore
   */
  constructor(private readonly element: ElementRef) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.observer = new MutationObserver(entries  => this.onResize.emit(entries));
    this.observer.observe(this.element.nativeElement, this.options);
  }

  /**
   * @ignore
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
