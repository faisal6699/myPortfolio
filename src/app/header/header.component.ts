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

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  activeItemName: string = 'home';
  selectedElement!: ElementRef;
  currentWindowWidth!: number;
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

  changeView(name: string, index: number) {
    this.selectedElement = this.appService.getComponentRef(index);
    console.log(this.selectedElement)
    this.selectedElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    this.activeItemName = name;

  }

  updateSectionPositions() {
    this.currentWindowWidth = window.innerWidth;
    console.log(this.currentWindowWidth)
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
