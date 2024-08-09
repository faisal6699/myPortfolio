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

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgClass
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
  constructor(private appService: AppService) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveItem();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateSectionPositions();
  }

  ngOnInit() {
    this.updateSectionPositions();
    this.selectedElement = this.appService.getComponentRef(0);
    console.log(this.selectedElement)
    this.selectedElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    console.log(document.getElementById('home'))
    document.getElementById('home')?.classList.add('active');
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  changeView(name: string, index: number) {
    this.selectedElement = this.appService.getComponentRef(index);
    console.log(this.selectedElement)
    this.selectedElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    this.activeItemName = name;

  }

  updateSectionPositions() {
    this.currentWindowWidth = window.innerWidth;
    if (this.currentWindowWidth > 1120) {
      this.isDrawerOpen = false;
    }
    this.sections = [];
    const sectionIds = ['home', 'experience', 'skill', 'project', 'education'];
    let counter: number = 0;
    console.log()
    sectionIds.forEach(id => {
      this.sections.push({ id, top: counter });
      counter += (window.innerHeight - 200);
    });
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
