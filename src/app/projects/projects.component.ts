import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild('projectElement') projectElement!: ElementRef;

  constructor(private appService: AppService) {
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.projectElement, 4);
  }
}
