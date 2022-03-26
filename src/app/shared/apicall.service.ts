import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  getHeader(): any {
    return new HttpHeaders()
      .set('Accept', 'application/json')
  }
  
  getImageData(): any {
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json", {
      headers: this.getHeader(),
      observe: 'response',
    });
  }
  public get() { 
    console.log("sdfjl");
    console.log(this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"),{responseType: 'json'});
    
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"); 
    } 
}
