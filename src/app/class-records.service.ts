import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassRecordsService {
  classB:{name:string,id:number,regNo:string,status:string,grade:string,gender:string,}[]=[]
 
  teacher=[{
    name:'Jeremy Robson',
    img:'https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png',
    gender:'male',
    rollNo:1891,
    class:'Grade 4',
    onDuty:true,
  }
  ]
  images={
  female: 'https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png',
  male:'https://www.nicepng.com/png/detail/662-6623341_male-icon-png-clipart-computer-icons-user-clip.png'
  }
  constructor() { }
}
