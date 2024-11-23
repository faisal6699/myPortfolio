import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillElement') skillElement!: ElementRef;

  constructor(private appService: AppService,
              private meta: Meta, private title: Title,) {
  }

  ngOnInit() {
    this.title.setTitle('Skills & Achievements | Faisal Ahmed Ador - Full Stack Engineer');
    this.meta.addTags([
      { name: 'description', content: 'Showcasing Faisal Ahmed Ador\'s skills in Angular, React, NestJS, Docker, TypeScript, and more. Learn about his key achievements in optimizing applications and creating scalable solutions.' },
      { name: 'keywords', content: 'Faisal Ahmed Ador, Skills, Achievements, Angular, React, NestJS, Docker, TypeScript, Full Stack Engineer, Software Developer' },
      { name: 'author', content: 'Faisal Ahmed Ador' },
      { property: 'og:title', content: 'Skills & Achievements | Faisal Ahmed Ador - Full Stack Engineer' },
      { property: 'og:description', content: 'Explore Faisal Ahmed Ador\'s technical expertise and accomplishments in building modern web applications and scalable systems.' },
      { property: 'og:url', content: 'https://faisalahmedador.github.io/skills' },
      { property: 'og:type', content: 'website' }
    ]);
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.skillElement, 3);
  }
}
