import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Lesson } from "./lesson";
import { LessonsService } from "./lessons.service";
// import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { merge, fromEvent, interval } from 'rxjs';


//decorator
@Component({
    selector: 'lessons',
    //Angularda 2 ta jingalak qavsni ichida hohlagancha JS ko'dlarini yozish mumkin bu Expression deb ataladi
    //Endi shu jingalak qavslar orasida ko'd yozish usuli String Interpolation deyiladi
    //bu usul mo'ylovga o'xshagani uchun mustache syntax deb ham ataladi

    //buyerada View title o'zgaruvchisiga binding qilinmoqda

    // back tick yani bek tik ( => ` <= ) bunday belgi nima uchun qo'yiladi desak
    // bunday holda biz bir nechta qator satrlarni yozishimiz mumkin huddi pythondagi ( => """  """ <= )shunga o'xshedi ekan :)
    template: `

    <h1>{{getTitle()}}</h1>

    <ul>
        <!-- index as i  qibturib misol uchun manashu for ni indexlarini ovolo'ramizakan  -->
        <li *ngFor="let lesson of lessonsArray" (click)="onSelect(lesson)" >
        <a [routerLink]="['/darslar', lesson.id ,lesson.title]"> {{lesson.title}} </a>
        </li>
    </ul>
    
    <app-lesson [lesson]="selectedLesson" (changeTitle)="onTitleChange($event)"></app-lesson>
    `
    
})
export class LessonsComponent implements OnInit {

    titleParam: string | null = '';
    title: string = "Darslar ro'yhati";
    lessonsArray: Lesson[];
    selectedLesson: Lesson;

    getTitle(): string {
        return  "Sarlavha: " + this.title;
    }

    constructor(private route: ActivatedRoute ,lessonsSvs: LessonsService) {
        this.lessonsArray = lessonsSvs.getLessons()
    }

    onSelect(lesson: Lesson): void {
        this.selectedLesson = lesson;
    }

    onTitleChange(isPlus: boolean) {
        isPlus ? this.selectedLesson.title += "+" : this.selectedLesson.title += "-"
    }

    ngOnInit(): void {
        let params$ = merge(this.route.paramMap, this.route.queryParamMap);
        params$.subscribe(combinedParams => {
            this.titleParam = combinedParams.get('title');
            this.getLessonByTitle();

            let page= combinedParams.get('page');
            console.log(page);
        })
    }
    
    getLessonByTitle() : void {
        if (!!this.titleParam){
        var lesson = this.lessonsArray.find(les => les.title == this.titleParam)!;
            this.onSelect(lesson);
        }
    }
}