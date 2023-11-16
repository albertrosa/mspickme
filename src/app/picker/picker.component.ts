import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassNamesService } from '../class-names.service';
import { Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.css'
})
export class PickerComponent implements OnInit{
  
  @Input() team:string = "";
  @Input() names:string[] = [];  

  selectedName = "";  
  noSelectedName = "Be Prepared!";
  constructor(private nameService: ClassNamesService) {}  

  ngOnInit(): void {    
    // this.selectedTeam = this.teams[0];    
  }


  pick() {
    // this.names = this.nameService.names;
    // console.log(this.names)    
    this.selectedName = this.names[Math.floor(Math.random() * this.names.length)];    
    // console.log(this.selectedName)
  }

  repick() {
    this.selectedName; // mark as non-responsive
    this.pick();

  }


}
