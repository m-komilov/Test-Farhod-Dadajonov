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
        <!-- index as i  qibturib misol uchun manashu for ni indexlarini ovolo'ramizakan  -->
        <li *ngFor="let lesson of lessonsArray; index as i">
            {{ i + 1 + " " + lesson}}
        </li>
    </ul>

    <app-lesson></app-lesson>

    `
})
export class LessonsComponent {
    isBtnApplicable: boolean = true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    isBtnPrimaryApplicable: boolean = true;

    isActive: boolean = false;
    colSpan : number = 1

    title: string = "Darslar ro'yhati";
    lessonsArray: string[];
    logoUrl: string = "https://blog.ndepend.com/wp-content/uploads/global-coding-standards-2-960x460.jpg";
    userName: string = "";
    showImage: boolean = false;

    getTitle(): string {
        return  "Sarlavha: " + this.title;
    }

    constructor(lessonsSvs: LessonsService) {
        this.lessonsArray = lessonsSvs.getLessons()
    }

    onTestButtonClicked() {
        console.log("Tugma bosilib tashayabdiii :) ")
        this.userName = "";
    }

    onTextInput(event: any) {
        this.userName = event.target.value;
        console.log(this.userName)

        console.log(event)
    }
}