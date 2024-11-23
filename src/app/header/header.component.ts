import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {AppService} from "../app.service";
import {NgClass} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  activeItemName: string = 'home';
  selectedElement!: ElementRef;
  currentWindowWidth!: number;
  isDrawerOpen: boolean = false;
  sections: { id: string, top: number }[] = [];
  constructor(private appService: AppService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.updateSectionPositions();
    this.selectedElement = this.appService.getComponentRef(0);
    const routeParamName = window.location.pathname.replace(/^\//, '');
    console.log(routeParamName);
    if (this.activeItemName !== routeParamName) {
      this.activeItemName = routeParamName;
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }


  updateSectionPositions() {
    this.currentWindowWidth = window.innerWidth;
    if (this.currentWindowWidth > 1120) {
      this.isDrawerOpen = false;
    }
  }

  updateActiveItem() {
    this.currentWindowWidth = window.innerWidth;
    if (this.currentWindowWidth > 1120) {
      this.isDrawerOpen = false;
    }
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let activeSection = this.sections[0].id;

    for (let section of this.sections) {
      console.log(scrollPosition, section.top, this.sections);
      if (scrollPosition >= section.top) {
        activeSection = section.id;
      } else {
        break;
      }
    }

    this.activeItemName = activeSection;
  }
}
