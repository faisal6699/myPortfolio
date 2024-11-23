import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
import {MediumBlogService} from "../medium-blog.service";
import {lastValueFrom} from "rxjs";
import {DatePipe} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit ,AfterViewInit {

  @ViewChild('projectElement') projectElement!: ElementRef;
  blogs: any;
  defaultThumbnail = 'https://via.placeholder.com/300x150';
  blogLoader: boolean = false;

  constructor(private appService: AppService,
              private mediumBlogService: MediumBlogService,
              private meta: Meta, private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Blogs by Faisal Ahmed Ador | Full Stack Engineer');
    this.meta.addTags([
      { name: 'description', content: 'Explore technical blogs by Faisal Ahmed Ador on Angular, React, NestJS, and more. Learn industry best practices and modern web development techniques.' },
      { name: 'keywords', content: 'Faisal Ahmed Ador Blogs, Angular Blogs, React Tutorials, NestJS Guides, Full Stack Engineer Blogs' },
      { property: 'og:title', content: 'Blogs by Faisal Ahmed Ador | Full Stack Engineer' },
      { property: 'og:description', content: 'Explore technical blogs by Faisal Ahmed Ador on Angular, React, NestJS, and more.' },
      { property: 'og:image', content: 'https://cdn-images-1.medium.com/fit/c/150/150/1*x6f5w8bQPLe5oLVdjgD9Cw.jpeg' },
      { property: 'og:url', content: 'https://faisalahmedador.github.io/blogs' }
    ]);
    this.fetchBlogs()
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.projectElement, 4);
  }

  private async fetchBlogs() {
    this.blogLoader = true;
    const articlesWithFeed$ = this.mediumBlogService.fetchAllBlogPosts();
    const articlesWithFeed: any = await lastValueFrom(articlesWithFeed$);
    this.blogLoader = false;
    this.blogs = articlesWithFeed?.items;
    console.log(this.blogs)
  }
}
