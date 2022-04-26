import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Angular Asoslari"
  price = 50.0
  duration = 20
  intakeDeadline = new Date(2022, 4, 25)

}
