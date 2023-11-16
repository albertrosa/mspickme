import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassNamesService } from '../class-names.service';
import { PickerTrackerService } from '../picker-tracker.service';
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
  @Output() pickedEvent = new EventEmitter<boolean>()

  selectedName = "";  
  allowdup:boolean = false
  noDupe: string[] = []  
  empty: boolean = false;
  preset: boolean = false;
  constructor(private pickerTracker :PickerTrackerService) {}  

  ngOnInit(): void {        
  }


  onCheckboxChange() {    
    this.allowdup = !this.allowdup    
  }

  resetDupes(){
    this.noDupe = [...this.names];
    this.empty = false;
  }

  pick() {    
    if (this.selectedName) {
      this.pickerTracker.answered(this.selectedName)
    }

    if (this.empty){
      return
    }

    if (this.allowdup){      
      this.selectedName = this.names[Math.floor(Math.random() * this.names.length)];    
    } else {
      if(!this.preset) {        
        this.resetDupes();
        this.preset = true;
      }     
      const rnd = Math.floor(Math.random() * this.noDupe.length)
      this.selectedName = this.noDupe[rnd];    
      this.noDupe.splice(rnd, 1)

      if(this.noDupe.length == 0 ){
        this.empty = true;
      }
    }
    
    this.pickerTracker.addName(this.selectedName)
    this.pickedEvent.emit(true);
  }

  repick() {
    this.selectedName = ""; // mark as non-responsive
    this.pick();    
  }


}
