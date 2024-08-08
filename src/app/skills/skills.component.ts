import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillElement') skillElement!: ElementRef;

  constructor(private appService: AppService) {
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.skillElement, 3);
  }
}
