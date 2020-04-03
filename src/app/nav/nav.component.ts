import {ChangeDetectorRef, Component, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  @ViewChild(MatSidenav)
  public snav: MatSidenav;
  public dark: boolean ;
  name: string = "Moto SAG Enduro"
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, elementRef: ElementRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    const hammertime = new Hammer(elementRef.nativeElement, {});
        hammertime.on('panright', (ev) => {
            this.snav.open();
        });
        hammertime.on('panleft', (ev) => {
            this.snav.close();
        });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
