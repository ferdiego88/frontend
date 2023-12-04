import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {

      if (res.matches) {

        this.sidenav.mode = 'over';
        this.sidenav.close();

      } else {

        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

}
