import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassNamesService {

  teams:string[] = ["1", "2","3","4", "5",]
  names:string[] = [];
  memory = [
    {"team": "1", "names": ['Alice', 'Bob', 'Charlie'] },
    {"team": "2", "names": ['Alice', 'Bob', 'Charlie'] },
    {"team": "3", "names": ['Alice', 'Bob', 'Charlie'] },
    {"team": "4", "names": ['Alice', 'Bob', 'Charlie'] },
    {"team": "5", "names": ['Alice', 'Bob', 'Charlie'] },
]

  constructor() {}

  getNames(teamName:string): string[]{
    this.names =[];

    this.memory.forEach(element => {
      if (element.team == teamName){
        this.names = element.names            
      }
    });

    return this.names;   
    
  }

  addName(team:string, name:string):boolean {
    this.getNames(team)
    if (this.names.indexOf(name) == -1) {
      this.names.push(name);

      this.memory.forEach(element => {
        if (element.team == team)
          element.names = this.names        
      });
      return true
    } 
    return false
  }

  removeName(team:string, name:string) {
    const index = this.names.indexOf(name);
    if (index !== -1) {
      this.names.splice(index, 1);

      this.memory.forEach(element => {
        if (element.team == team)
          element.names = this.names        
      });

    }
  }
}
