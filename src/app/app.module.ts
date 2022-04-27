import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsService } from './lessons.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'darslar', component: LessonsComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: '**', component: PageNoteFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent,
    HomeComponent,
    PageNoteFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  //mashetdan ro'yxatdan o'tkazib qo'yishimiz kerak ekan dependency injection qilib ishlatgan service larimizi huddi Scoped, Singleton, Trancient ga o'xshab aheyy
  // Demak bu Singleton pattern holatida ishlar ekan
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
