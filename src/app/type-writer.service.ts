import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {concat, concatMap, delay, from, ignoreElements, interval, map, of, repeat, take} from "rxjs";
import {isPlatformServer} from "@angular/common";

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TypeWriterService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }
  private type({ word, speed, backwards = false }: TypeParams) {
    return interval(speed).pipe(
      map((x) =>
        backwards
          ? word.substring(0, word.length - x)
          : word.substring(0, x + 1)
      ),
      take(word.length)
    );
  }

  typeEffect(word: string) {
    console.log(word)
    return concat(
      this.type({ word, speed: 50 }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 30, backwards: true }),
      of('').pipe(delay(300), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[]) {
    if (isPlatformServer(this.platformId)) {
      return of(titles.join(' | ')); // Combine all titles for SSR
    } else {
      return from(titles).pipe(
        concatMap((title) => this.typeEffect(title)),
        repeat()
      );
    }
  }
}
