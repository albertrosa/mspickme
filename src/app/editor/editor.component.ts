import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output,EventEmitter } from '@angular/core';
import { ClassNamesService } from '../class-names.service';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent implements OnInit{

  constructor(private nameService: ClassNamesService) {}
  
  @Input() names:any;
  @Output() addNameEvent = new EventEmitter<string>()
  @Output() removeNameEvent = new EventEmitter<string>()
  @Input() showedit = false;
  @Input() hideButton = false;

  ngOnInit(): void {
    this.names = this.nameService.names;
  }

  addToStorage(name:string) {

    this.addNameEvent.emit(name);
  }

  addName(name:any) {    
    if (name.value != "") {
      name.value.split("\n").forEach(this.addToStorage, this);
      name.value = ""
    }
  }
  
  removeName(name:any) {
    this.removeNameEvent.emit(name);
  }

  reset(element:any) {
    element.value = ""
  }
}
