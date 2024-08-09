import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
import {TypeWriterService} from "../type-writer.service";
import {AsyncPipe} from "@angular/common";
import {map, Observable} from "rxjs";
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

  constructor(private appService: AppService,
              private typeWriterService: TypeWriterService,) {
  }

  typedText$ = this.typeWriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));

  ngAfterViewInit() {
    this.appService.setComponentRef(this.homeElement, 1);

  }

}
