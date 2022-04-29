import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsService } from './lessons.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'darslar/:id/:title', component: LessonsComponent},
  {path: 'darslar', component: LessonsComponent},
  {path: 'boglanish', component: ContactFormComponent},
  {path: 'navbar', component: NavbarComponent},
  // ** agarada bizda yo'q reoute berilsa page not found componentiga jo'natvoradi
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
    ContactFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  //mashetdan ro'yxatdan o'tkazib qo'yishimiz kerak ekan dependency injection qilib ishlatgan service larimizi huddi Scoped, Singleton, Trancient ga o'xshab aheyy
  // Demak bu Singleton pattern holatida ishlar ekan
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
