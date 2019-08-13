import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipess',
  templateUrl: './pipess.component.html',
  styleUrls: ['./pipess.component.css']
})
export class PipessComponent implements OnInit {

  employees:any[]=[
    {code:'emp001', name:'Chandan', salary:85000, dob:'02/aug/1990'},
    {code:'emp002', name:'Rahul', salary:85000, dob:'02/aug/1989'},
    {code:'emp003', name:'Mohan', salary:85000, dob:'02/aug/1991'},
    {code:'emp004', name:'Soni', salary:85000, dob:'02/aug/1990'},
  ];





  public jsonPipe=[
    {ID:'001', name:'Amar', age:45, dob:'02/aug/1950'},
    {ID:'002', name:'Badal', age:40, dob:'02/aug/1959'},
    {ID:'003', name:'Shohan', age:54, dob:'02/aug/1951'},
    {ID:'004', name:'Monu', age:40, dob:'02/aug/1940'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
