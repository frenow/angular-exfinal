import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const withBaseUrl = path =>
   `https://brasil.io/api/dataset/covid19/caso/data?${path}`;

@Injectable({
  providedIn: "root"
})
export class covidService {
  constructor(private http: HttpClient) {}

  getUF(uf: string): Observable<any> { 
    return this.http.get(withBaseUrl(`is_last=True&state=${uf}`));                                    
  }

  getBR(): Observable<any> {
    return this.http.get(withBaseUrl(`is_last=True&place_type=state`));                                         
  }

  
}