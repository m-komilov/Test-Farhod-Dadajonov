import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsService } from './lessons.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //mashetdan ro'yxatdan o'tkazib qo'yishimiz kerak ekan dependency injection qilib ishlatgan service larimizi huddi Scoped, Singleton, Trancient ga o'xshab aheyy
  // Demak bu Singleton pattern holatida ishlar ekan
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
