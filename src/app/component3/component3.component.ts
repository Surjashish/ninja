import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  public favourites;

  constructor(private FetchData: FetchDataService) { 
    console.log("in constructor");
  }
  public vidId="https://www.youtube.com/embed/";

  ngOnInit() {
    console.log("in ngoninit 3");
    this.FetchData.getMyFav()
    .subscribe(data => this.favourites=data);
  }

  remove(value)
  {
    console.log("in component"+value);
    this.FetchData.rem(value);
    
  }

  comment(value,value2,value3)
  {
    this.FetchData.comm(value,value2,value3);
    
  }


}
