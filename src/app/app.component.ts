import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PickerComponent } from './picker/picker.component';
import { EditorComponent } from './editor/editor.component';
import { ClassNamesService } from './class-names.service';
import { TeamselectComponent } from './teamselect/teamselect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PickerComponent, EditorComponent, TeamselectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer-picker';

  names:string[] = [];
  teams:string[] = [];
  selectedName = "";
  selectedTeam = ""
  noSelectedName = "Be Prepared!";
  showEditer = false;

  constructor(private nameService: ClassNamesService) {}  

  ngOnInit(): void {
    this.teams = this.nameService.teams;
    this.selectedTeam = this.teams[0];
    this.names = this.nameService.getNames(this.selectedTeam);
  }

  pickFromTeam(teamname:string):void{
    this.selectedTeam= teamname;    
    this.names = this.nameService.getNames(this.selectedTeam);
  }

  
  addName(name:any) {
    let added = this.nameService.addName(this.selectedTeam, name);    
    if (added) {
      this.names = this.nameService.names;
    }
    else {
      alert("Name was not Added")
    }
 
  }

  removeName(name:any) {
    this.nameService.removeName(this.selectedTeam, name);  
    this.names = this.nameService.names; 
  }
}