import { Component, OnInit } from '@angular/core';
import { CalendarDay } from './Interfaces/CalendarDay';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrl: './agendamentos.component.css'
})
export class AgendamentosComponent implements OnInit {
 
   

   diasDaSemanaAbreviados: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

   data: CalendarDay[] = [
    {day:'01' ,data: new Date('2024-02-01'), idClient: 3, idProfissional: 1  ,dayWeek:4},
    {day:'02' ,data: new Date('2024-02-02'), idClient: 17, idProfissional: 1 ,dayWeek:5},
    {day:'03' ,data: new Date('2024-02-03'), idClient: 28, idProfissional: 5 ,dayWeek:6},
    {day:'04' ,data: new Date('2024-02-04'), idClient: 30, idProfissional: 2 ,dayWeek:0},
    {day:'05' ,data: new Date('2024-02-05'), idClient: 31, idProfissional: 3 ,dayWeek:1},
    {day:'06' ,data: new Date('2024-02-06'), idClient: 32, idProfissional: 4 ,dayWeek:2},
    {day:'07' ,data: new Date('2024-02-07'), idClient: 33, idProfissional: 5 ,dayWeek:3},
    {day:'08' ,data: new Date('2024-02-08'), idClient: 20, idProfissional: 3 ,dayWeek:4},
    {day:'09' ,data: new Date('2024-02-09'), idClient: 25, idProfissional: 1 ,dayWeek:5},
    {day:'10' ,data: new Date('2024-02-10'), idClient: 15, idProfissional: 4 ,dayWeek:6},
    {day:'11' ,data: new Date('2024-02-11'), idClient: 18, idProfissional: 2 ,dayWeek:0},
    {day:'12' ,data: new Date('2024-02-12'), idClient: 22, idProfissional: 5 ,dayWeek:1},
    {day:'13' ,data: new Date('2024-02-13'), idClient: 12, idProfissional: 1 ,dayWeek:2},
    {day:'14' ,data: new Date('2024-02-14'), idClient: 8, idProfissional: 3  ,dayWeek:3},
    {day:'15' ,data: new Date('2024-02-15'), idClient: 7, idProfissional: 4  ,dayWeek:4},
    {day:'16' ,data: new Date('2024-02-16'), idClient: 14, idProfissional: 5 ,dayWeek:5},
    {day:'17' ,data: new Date('2024-02-17'), idClient: 19, idProfissional: 2 ,dayWeek:6},
    {day:'18' ,data: new Date('2024-02-18'), idClient: 27, idProfissional: 1 ,dayWeek:0},
    {day:'19' ,data: new Date('2024-02-19'), idClient: 10, idProfissional: 3 ,dayWeek:1},
    {day:'20' ,data: new Date('2024-02-20'), idClient: 23, idProfissional: 4 ,dayWeek:2},
    {day:'21' ,data: new Date('2024-02-21'), idClient: 16, idProfissional: 5 ,dayWeek:3},
    {day:'22' ,data: new Date('2024-02-22'), idClient: 24, idProfissional: 1 ,dayWeek:4},
    {day:'23' ,data: new Date('2024-02-23'), idClient: 29, idProfissional: 2 ,dayWeek:5},
    {day:'24' ,data: new Date('2024-02-24'), idClient: 11, idProfissional: 3 ,dayWeek:6},
    {day:'25' ,data: new Date('2024-02-25'), idClient: 9, idProfissional: 4  ,dayWeek:0},
    {day:'26' ,data: new Date('2024-02-26'), idClient: 26, idProfissional: 5 ,dayWeek:1},
    {day:'27' ,data: new Date('2024-02-27'), idClient: 13, idProfissional: 1 ,dayWeek:2},
    {day:'28' ,data: new Date('2024-02-28'), idClient: 21, idProfissional: 2 ,dayWeek:3},
    {day:'29' ,data: new Date('2024-02-29'), idClient: 22, idProfissional: 3 ,dayWeek:4},
  ];
  
  mes: CalendarDay[] = [];

  loadingMonth():void{
   const sizeArray: number = 42;
   let countDay: number = 0;
   let countDayWeek: number = 0;
   for (let i = 0; i < sizeArray; i++) {
     if(this.data.length > countDay && countDayWeek === this.data[countDay].dayWeek) {
       this.mes.push(this.data[countDay]);
       countDay++;
       countDayWeek = countDayWeek >= 6 ? 0 : countDayWeek + 1;
     }else{
      this.mes.push({day:'00' ,data: new Date('0000-00-00'), idClient: 0, idProfissional: 0  ,dayWeek:countDayWeek });
      countDayWeek = countDayWeek >= 6 ? 0 : countDayWeek + 1;
      
     }
     
  }
  console.log(this.mes)

  
} 

  ngOnInit(): void {
    this.loadingMonth();
  }

}
