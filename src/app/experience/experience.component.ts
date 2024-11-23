import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ItemComponent} from "./item/item.component";
import {Experience} from "../domains/experience";
import {AppService} from "../app.service";
import {NgxPaginationModule} from "ngx-pagination";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent,
    NgxPaginationModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})

export class ExperienceComponent implements AfterViewInit {

  currentPage: number = 1;

  experiences: Experience[] = [
    {
      name: 'Software Engineer',
      company: 'Square Health (Full-time)',
      duration: 'June 2021 - Present',
      items: [
        'Page Load Optimization: Optimized a complex prescription platform’s frontend application load time by\n' +
        '50–60% by caching APIs to IndexedDB (using Dexie.js), implementing NGRX for state management, and\n' +
        'optimizing API calls.',
        'Server-Side Rendering (SSR): Guided junior developers on implementing SSR in Angular 18 applications in an\n' +
        'optimized way.',
        'Micro-Frontend Architecture: Converted multiple separate repositories of a same ecosystem into monorepo\n' +
        'using NX, reducing repetitive code by 10–20%.',
        'Dynamic PDF Converter: Designed a dynamic HTML-to-PDF converter using Node.js, Puppeteer, and\n' +
        'Handlebars, reducing PDF configuration time by 90%.',
        'Containerization: Containerized a complex PDF project using Docker Compose, ensuring Chrome engine\n' +
        'compatibility in a monorepo setup.'
      ],
      type: '',
      companyUrl: 'jotno.net'
    },
    {
      name: 'Frontend Developer (Angular)',
      company: 'GetMeHired (Part-time)',
      duration: 'January 2021 - November 2021',
      items: [
        'ChatGPT Integration: Implemented ChatGPT functionality and designed a prompt engineering feature.',
        'Data Visualization: Integrated MongoDB Charts with authentication features.',
      ],
      type: '',
      companyUrl: ''
    },
    {
      name: 'Frontend Developer (React)',
      company: 'Decode-lab (Full-time)',
      duration: 'January 2021 - May 2021',
      items: [
        'E-commerce Collaboration: Collaborated with the backend team to build an API-driven e-commerce site.',
      ],
      type: '',
      companyUrl: ''
    },
  ];

  @ViewChild('experienceElement') experienceElement!: ElementRef;

  constructor(private appService: AppService,
              private meta: Meta, private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Work Experience | Faisal Ahmed Ador - Full Stack Engineer');
    this.meta.addTags([
      { name: 'description', content: 'Explore Faisal Ahmed Ador\'s professional journey, showcasing experience in Angular, React, NestJS, Docker, and more. Learn about his impact in building scalable applications and optimizing performance.' },
      { name: 'keywords', content: 'Faisal Ahmed Ador, Work Experience, Software Engineer, Angular, React, TypeScript, NestJS, Docker, Full Stack Engineer, Frontend Developer, Backend Developer' },
      { name: 'author', content: 'Faisal Ahmed Ador' },
      { property: 'og:title', content: 'Work Experience | Faisal Ahmed Ador - Full Stack Engineer' },
      { property: 'og:description', content: 'Discover Faisal Ahmed Ador\'s career milestones and technical expertise in modern web development technologies like Angular, React, and NestJS.' },
      { property: 'og:url', content: 'https://faisalahmedador.github.io/experiences' },
      { property: 'og:type', content: 'website' }
    ]);
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.experienceElement, 2);
  }
}
