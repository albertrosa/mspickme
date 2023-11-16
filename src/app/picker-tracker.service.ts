import { Injectable } from '@angular/core';


export class NameCount {
  name: string;
  count: number;
  answered: boolean;

  constructor (name:string, count:number=1){
    this.name = name;
    this.count = count;
    this.answered = false
  }

}

@Injectable({
  providedIn: 'root'
})
export class PickerTrackerService {

  teams: string[] = [];
  picked: NameCount[] = [];

  constructor() {}

  addName(name:string) {
    let  el = this.picked.find((item)=> item.name === name)
    if (el) {
      let update = this.picked.indexOf(el)
      el.count += 1
      this.picked[update] = el
    } else {
      this.picked.push(new NameCount(name, 1))
    }
  } 

  answered(name:string) {
    let  el = this.picked.find((item)=> item.name === name)
    if (el) {
      let update = this.picked.indexOf(el)
      el.answered = true
      this.picked[update] = el
    } else {
      console.log("Trying to say someone answere who wasn't picked")
    }
  } 

  





}
