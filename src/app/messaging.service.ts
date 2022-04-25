import { Injectable } from '@angular/core';

// Agarda bitta service birnechta service ga qarama bo'ladigan bo'sa Injectable attributi chaqirilishi kerak aks holda kerak emas
// service lar bir biriga bog'liqligini qanday bilishimiz mumkin didigon bo'sek serviceimizi ichidagi constructorga chaqirilgan bo'ladi 
// dependency injection ga o'xshab qilib 
@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor() { }
}
