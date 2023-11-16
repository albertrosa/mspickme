import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teamselect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teamselect.component.html',
  styleUrl: './teamselect.component.css'
})
export class TeamselectComponent implements OnInit {
  @Input() teams:string[] = [];
  @Output() teamSelectedEvent = new EventEmitter<string>();

  
  ngOnInit(): void {
    this.presetTeam(this.teams[0])    
  }

  presetTeam(team:string) {           
    this.teamSelectedEvent.emit(team);
    // this.names = this.nameService.getNames(team);
    // this.selectedTeam = team;
  }

}
