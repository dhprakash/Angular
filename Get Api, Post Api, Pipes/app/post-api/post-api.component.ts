import { Component, OnInit } from '@angular/core';


/*POST API*/
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { map,tap } from 'rxjs/operators';

const httphead={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  data:Observable<any>;
  URL = "http://dummy.restapiexample.com/api/v1/create";

  constructor(private http:HttpClient) { }

  InsertData(x){
    console.log(x);
    this.data=this.createEmployee(x);
    this.data.subscribe((d)=>{
    console.log(d);
    });
    
  }


createEmployee(emp:any):Observable<any>{
  return this.http.post<any>(this.URL,emp,httphead);
}

  ngOnInit() {
  }

}
