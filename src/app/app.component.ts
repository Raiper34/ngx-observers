import {Component, ContentChild, ContentChildren, ViewChild} from '@angular/core';
import {ResizeDirective} from "../../projects/ngx-observers/src/lib/resize.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('elem') obsResize: ResizeDirective | undefined;

  onResize($event: ResizeObserverEntry[]): void {
    //console.log($event);
    console.log(this.obsResize?.observer);
  }
}
