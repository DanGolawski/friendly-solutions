import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Page, Work } from '../models/api-models';
import { ELEMENT_DATA } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public dataSubject: BehaviorSubject<Work[]> = new BehaviorSubject([] as Work[]);
  public data$: Observable<Work[]> = this.dataSubject.asObservable();

  constructor() { }

  public getWorkData(filterPredicate: string = ''): void {
    this.dataSubject.next(ELEMENT_DATA.data.filter(elements => elements.description.toLocaleLowerCase().includes(filterPredicate)));
  }
}
