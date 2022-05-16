import { Component, OnInit } from '@angular/core';

export interface Student {
  Sno:number,
  RollNO : string,	
  Name:string,	
  Dept:string,	
  Gender:string,
}
const stud_data:Student[]=[
  {Sno:1,RollNO:"19471A0501",Name:"Thumati kumari",Gender:"Female",Dept:"CSE"},
  {Sno:2,RollNO:"19471A0502",Name:"korapati Ajay",Gender:"Male",Dept:"CSE"},
  {Sno:3,RollNO:"19471A0503",Name:"kandru samson",Gender:"Male",Dept:"CSE"},
  {Sno:3,RollNO:"19471A0503",Name:"khambhampati Dorababu",Gender:"Male",Dept:"CSE"},
  {Sno:4,RollNO:"19471A0504",Name:"Rayapudi vijaya kumar",Gender:"Male",Dept:"CSE"},
  {Sno:5,RollNO:"19471A0505",Name:"mahatho anjali kumari",Gender:"Female",Dept:"CSE"},
  {Sno:6,RollNO:"19471A0506",Name:"Korapati sanjai",Gender:"Male",Dept:"CSE"},
  {Sno:7,RollNO:"19471A0507",Name:"Detta vishnu rekha",Gender:"Female",Dept:"CSE"},
  {Sno:8,RollNO:"19471A0508",Name:"koppula sneha",Gender:"Female",Dept:"CSE"},
  {Sno:9,RollNO:"19471A0509",Name:"Bonam Venkata manikanta",Gender:"Male",Dept:"CSE"},
  {Sno:10,RollNO:"19471A0510",Name:"Kadiyam pavan kumar",Gender:"Male",Dept:"CSE"},
  {Sno:11,RollNO:"19471A0511",Name:"Justin Bhuvan",Gender:"Male",Dept:"CSE"},
  {Sno:12,RollNO:"19471A0512",Name:"Dodda uday kumar",Gender:"Male",Dept:"CSE"},
  {Sno:13,RollNO:"19471A0513",Name:"Patan karishma",Gender:"Female",Dept:"CSE"},
  {Sno:14,RollNO:"19471A0514",Name:"Shaik sanaunnisa",Gender:"Female",Dept:"CSE"},
  {Sno:15,RollNO:"19471A05015",Name:"Tummala thriveni",Gender:"Female",Dept:"CSE"},
]
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  student_data=stud_data;
  columns:string[]=["Sno","RollNO","Name","Gender","Dept"]
  constructor() { }

  ngOnInit() {
  }

}
