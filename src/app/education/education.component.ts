import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements AfterViewInit {
  @ViewChild('educationElement') educationElement!: ElementRef;

  constructor(private appService: AppService,private title: Title) {
    this.title.setTitle('Faisal Ahmed Ador | Education & Contributions');
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.educationElement, 5);
  }
}
