import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ItemComponent} from "./item/item.component";
import {Experience} from "../domains/experience";
import {AppService} from "../app.service";
import {NgxPaginationModule} from "ngx-pagination";

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
      name: "Software Engineer",
      items: [
        "Developed an admin platform using Angular, ensuring standalone components and best practices.",
        "Overhauled the appointment system, leading end-to-end development from business requirement analysis to complex UI/UX implementation, API integration, and business logic for enhanced functionality",
        "Developed a socket server as an R&D project for real-time communication between doctors and patients using Nodejs, Socket.io, Webpack and TypeScript.",
        "Spearheaded the Telemedicine System, enabling remote appointments and video consultations.Orchestrated Amazon Chime integration for video consultations and managed intricate business logic.",
        "Engineered a Tutorial Application using Next.js, facilitating doctors to access feature-based tutorials. Implemented SSR and SSG, combining frontend advancements with backend development using Spring Boot."
      ],
      type: "Full-time",
      duration: "July 2021 - Present",
      company: "Square Health Ltd.",
      companyUrl: "https://squareHealth.com.bd"
    },
    {
      name: "Angular Developer",
      items: [
        "R&D on new development and make new feature",
        "Make custom UI for different features",
        "Implement complex charts"
      ],
      type: "Part-time",
      duration: "Jan 2023 - Nov 2023",
      company: "GetMeHired Ltd.",
      companyUrl: "https://getMeHired.co"
    },
    {
      name: "React Developer",
      items: [
        "Collaborated on API-driven e-commerce site with backend team",
        "Developed functional applications using React and Redux",
        "Reviewed and resolved application functionality issues"
      ],
      type: "Full-time",
      duration: "Jan 2021 - Jun 2021",
      company: "DecodeLab Ltd.",
      companyUrl: "https://www.decode-lab.com"
    }
  ];

  @ViewChild('experienceElement') experienceElement!: ElementRef;

  constructor(private appService: AppService) {
  }

  ngAfterViewInit() {
    this.appService.setComponentRef(this.experienceElement, 2);
  }
}
