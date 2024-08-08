import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('homeElement') homeElement!: ElementRef;

  constructor(private appService: AppService) {
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.homeElement, 1);
  }

}
