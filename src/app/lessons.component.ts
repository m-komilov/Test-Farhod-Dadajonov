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

    <table>
        <tr> 
            <!-- attribute binding bundan foydalanish uchun ishlatmoqchi bo'lgan attributimini oldiga attr ni o'shib qo'yishimniz kerak -->
            <td [attr.colspan]="colSpan" >

            </td>
        </tr>
    </table>

    <h1>{{getTitle()}}</h1>

    <input type="text" [(ngModel)]="userName"> <br>
    <label>{{userName}} </label> <br>
    <!-- [class.btn]="isBtnApplicable" [class.btn-primary]="isBtnPrimaryApplicable"  bu class binding pastda o'zgaruvchi ochilgan boolean tipida manashunga qarab 
          tugmamizi classlari almashadi :)  -->
    <button [class.btn]="isBtnApplicable" [class.btn-primary]="isBtnPrimaryApplicable" (click)="onTestButtonClicked()"> Reset </button>

    <!-- [style.backgroundColor]="isActive ? 'green' : 'white'"  <=== Style binding -->
    <button [style.backgroundColor]="isActive ? 'green' : 'white'" (click)="onTestButtonClicked()"> Test stryle binding</button>
    <ul>
        <!-- index as i  qibturib misol uchun manashu for ni indexlarini ovolo'ramizakan  -->
        <li *ngFor="let lesson of lessonsArray; index as i">
            {{ i + 1 + " " + lesson}}
        </li>
    </ul>

    <app-lesson></app-lesson>

    <!-- mashetda shartlar berib tashasa bo'ladikan yomonakan omalee -->
    <!-- rasmdi ichida shart berib qanoatlantirmasa boshqa componentga yo'naltirvoryabmiz yonmiiii -->

    <img *ngIf="colSpan < 0; else noLogo" width="200" src="{{ logoUrl }}"/>         <!-- string interpolation --> <!-- string interpolation ni tagidayam property binding yotibdi ekan brat addushishi Farhodaka -->

    <ng-template #noLogo >
        <h1>
            Nimo'lyaptiii
        </h1>
    </ng-template>

    <img width="200" [src]="logoUrl">   <!-- property binding  bu bir tomonlama binding deyiladi ekan  -->

    <div [ngSwitch]="colSpan">
        <p *ngSwitchCase="1" >Colspan 1</p>
        <button *ngSwitchCase="2" >Colspan 2</button>
        <input *ngSwitchCase="3" type="text" value="Colspan 3">
        <h1 *ngSwitchDefault="">Colsapan default</h1>
    </div>

    <button [ngStyle]="{'backgroundColor': isActive ? 'green' : 'white',
                        'color': isActive ? 'red' : 'black' }" >
    Salomlar
    </button>

    <button [ngClass]="{'btn': !isActive, 'btn-info': !isActive}">  Test 1</button>
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