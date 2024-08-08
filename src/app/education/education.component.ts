import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements AfterViewInit {
  @ViewChild('educationElement') educationElement!: ElementRef;

  constructor(private appService: AppService) {
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.educationElement, 5);
  }
}
