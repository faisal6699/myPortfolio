import {Component, Input} from '@angular/core';
import {Experience} from "../../domains/experience";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() experienceItem: Experience | undefined;
}
