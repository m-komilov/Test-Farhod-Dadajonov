import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
                              
import { Lesson } from '../lesson';                                                                 
                            
@Component({                                                                
  selector: 'app-lesson',                                                                 
  templateUrl: './lesson.component.html',                                                                 
  styleUrls: ['./lesson.component.scss']                                                                
})                                                                
export class LessonComponent implements OnInit {                                                                
                            
  @Input() lesson: Lesson;                                                                
  @Output() changeTitle = new EventEmitter<boolean>();                                                                
  constructor() { }                                                                 
                            
  ngOnInit(): void {                                                                
  }            
  
  onPlusBtn() {
    this.changeTitle.emit(true)
  }

  onMinusBtn(){
    this.changeTitle.emit(false)
  }
}                                                                 
                            