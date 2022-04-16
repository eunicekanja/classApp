import { Component, OnInit } from '@angular/core';
import { ClassRecordsService } from '../class-records.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers:[ClassRecordsService]
})
export class BodyComponent implements OnInit {
  showForm:boolean=true;
  name='eunice';
  classB=this.classRecordService.classB;
  count=0;
  images=this.classRecordService.images;
  constructor(private classRecordService:ClassRecordsService) { }

  ngOnInit(): void {
  }
  addRecord(){
    this.showForm=!this.showForm;
  }
  addGender(gender:any){
    if(gender==='male'){
      return this.images.male
    }
    else return this.images.female
  }
  addItem(name:string,gender:string,reg:any,status:string,grade:string){
    this.count++
    gender==='male' ? this.images.male : this.images.female; 
    const newRecord={
      name:name,
      regNo:reg,
      gender:gender,
      status:status,
      grade:grade,
      id:this.count,
    }
    this.classB.push(newRecord)
    this.showForm=true;
  }
  deleteRecord(i:any){
    this.classB.splice(i,1)
  }
}
