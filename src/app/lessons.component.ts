import { Component } from "@angular/core";

//decorator
@Component({
    selector: 'lessons',
    //Angularda 2 ta jingalak qavsni ichida hohlagancha JS ko'dlarini yozish mumkin bu Expression deb ataladi
    //Endi shu jingalak qavslar orasida ko'd yozish usuli String Interpolation deyiladi
    //bu usul mo'ylovga o'xshagani uchun mustache syntax deb ham ataladi

    //buyerada View title o'zgaruvchisiga binding qilinmoqda
    template: '{{ "Sarlavha: " + title}}'
})
export class LessonsComponent {
    title: string = "Darslar ro'yhati";
}