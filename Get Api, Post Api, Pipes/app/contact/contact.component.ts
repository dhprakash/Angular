import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { map,tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  alldata:Observable<any[]>;
  alldata1:Observable<any[]>;
  //URL1:string="http://dummy.restapiexample.com/api/v1/employees";
  //URL:string="./assets/city-state.json";

  allurl={
    URL1:"http://dummy.restapiexample.com/api/v1/employees",
    URL:"./assets/city-state.json"


}
  constructor(private http:HttpClient) { 



/*this.alldata.subscribe(function(val)
{
console.log(val);
});
*/

  }

  callApi()
  {
    this.alldata=this.getApiCall();

  }


  callEmployee()
  {
    this.alldata1=this.getEmployee();

  }

  getEmployee():Observable<any[]>
  {
return this.http.get<any[]>(this.allurl.URL1);
  }



  getApiCall():Observable<any[]>
  {
return this.http.get<any[]>(this.allurl.URL);
  }

  ngOnInit() {
  }

}
