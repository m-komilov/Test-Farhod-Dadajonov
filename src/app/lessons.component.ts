import { Component } from "@angular/core";
import { LessonsService } from "./lessons.service";

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
        <li *ngFor="let lesson of lessonsArray">
            {{lesson}}
        </li>
    </ul>
    `
})
export class LessonsComponent {
    title: string = "Darslar ro'yhati";

    getTitle(): string {
        return  "Sarlavha: " + this.title;
    }

    lessonsArray;

    constructor(lessonsSvs: LessonsService) {
        this.lessonsArray = lessonsSvs.getLessons()
    }
}