import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  getRandomArray(length: number, max: number) {
    var randomArray: number[] = [];
    var randomNumber: number;
    while (randomArray.length < length) {
      randomNumber = Math.floor(Math.random() * max) + 1;
      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
      }
    }
    return randomArray.sort(function (a, b) {
      return a - b;
    });
  }
}