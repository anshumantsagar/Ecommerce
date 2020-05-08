import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  products : any = null
  carts : any = []
  constructor() { }
}
