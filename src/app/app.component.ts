import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private meta: Meta, private title: Title,) {

  }

  ngOnInit() {
    this.title.setTitle('Faisal Ahmed Ador | Full Stack Engineer Portfolio')
    this.meta.addTags([
      {
        name: 'description',
        content: 'Explore Faisal Ahmed Ador\'s portfolio, an experienced Full Stack Engineer skilled in Angular, React, TypeScript, NestJS, and more. Discover his projects, blogs, and achievements.'
      },
      {name: 'author', content: 'Faisal Ahmed Ador'},])
  }
}
