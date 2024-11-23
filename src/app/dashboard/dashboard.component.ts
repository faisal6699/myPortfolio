import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
import {TypeWriterService} from "../type-writer.service";
import {AsyncPipe} from "@angular/common";
import {map, Observable} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('homeElement') homeElement!: ElementRef;
  titles: string[] = ["Software Engineer", "Problem Solver"];
  typedText$: Observable<string> | null = null;

  constructor(private appService: AppService,
              private typeWriterService: TypeWriterService,
              private meta: Meta,
              private title: Title) {
    this.typedText$ = this.typeWriterService
      .getTypewriterEffect(this.titles)
      .pipe(map((text) => text))
  }

  ngOnInit() {
    this.title.setTitle('Faisal Ahmed Ador | Full Stack Engineer | Software Engineer');
    this.meta.addTags([
      {
        name: 'keywords',
        content: 'Faisal Ahmed Ador, Full Stack Engineer, Angular, React, TypeScript, NestJS, Docker, JavaScript, Technical Blogs, Portfolio, Software Developer, Projects'
      },
      {name: "og:title", content: "Faisal Ahmed Ador | Full Stack Engineer Portfolio"},
      {
        name: "og:description",
        content: "Explore Faisal Ahmed Ador's portfolio showcasing expertise in Angular, React, TypeScript, NestJS, and Docker. Learn about his technical blogs, projects, and key achievements."
      },
      {name: "og:image", content: "https://cdn-images-1.medium.com/fit/c/150/150/1*x6f5w8bQPLe5oLVdjgD9Cw.jpeg"},
      {name: "og:url", content: "https://https://faisalahmedador.github.io/"},
      {name: "og:type", content: "website"},
      // Add more tags as needed
    ]);
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.homeElement, 1);

  }

}
