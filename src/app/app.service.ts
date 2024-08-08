import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  componentRefList: ElementRef[] = [];

  setComponentRef(componentRef: ElementRef, index: number) {
    if(index >= this.componentRefList.length) {
      this.componentRefList.push(componentRef);
    }
  }

  getComponentRef(index: number) {
    return this.componentRefList[index];
  }
}
