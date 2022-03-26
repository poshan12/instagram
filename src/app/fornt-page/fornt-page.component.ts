import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fornt-page',
  templateUrl: './fornt-page.component.html',
  styleUrls: ['./fornt-page.component.css']
})
export class ForntPageComponent implements OnInit {

  private urlhttpClient: HttpClient;
  imgSrc :any
  allData:any
  isValid :boolean= false
  constructor(    handler: HttpBackend,
    private apicall : ApicallService
    ) { 
      this.urlhttpClient = new HttpClient(handler);


  }

  ngOnInit(): void {
console.log("pos");

    this.apicall.getImageData().subscribe((res:any)=>{
      if (res.status === 200) {
          this.allData=  res.body;
          console.log(this.allData);
          
      }
      if (res.status === 406) {
      }
      if (res.status === 500) {
      }
    },
    )
  }

  onSubmit(image: string){
    this.isValid =true
          this.imgSrc = image
  }
}

