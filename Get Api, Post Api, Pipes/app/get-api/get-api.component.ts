import { Component, OnInit } from '@angular/core';

/*GET API*/
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { map,tap } from 'rxjs/operators';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {

  alldata:Observable<any[]>;
  URL:string="./assets/city-state.json";
  

  constructor(private http:HttpClient) { 

  this.alldata=this.getApiCall();

  }


  getApiCall():Observable<any[]>
  {
  return this.http.get<any[]>(this.URL);
  }

  ngOnInit() {
  }
  

}