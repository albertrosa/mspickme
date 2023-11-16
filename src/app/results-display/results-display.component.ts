import { Component, Input, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { PickerTrackerService } from '../picker-tracker.service';

@Component({
  selector: 'app-results-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-display.component.html',
  styleUrl: './results-display.component.css'
})
export class ResultsDisplayComponent implements OnInit{

  @Input() showTable: boolean = true
  @Input() team: string = "Default";
  @Input() names: string[] = [];
  @Input() picked:any[] =[];


  // constructor(private pickerTracker:PickerTrackerService){}

  ngOnInit(): void {
    // this.picked = this.pickerTracker.picked
  }


}
