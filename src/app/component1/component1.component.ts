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
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public videos=[];
  
  constructor(private FetchData: FetchDataService) { }

  ngOnInit() {
    this.FetchData.getVideo()
      .subscribe(data => this.videos=data);
  }
  public vidId="https://www.youtube.com/embed/";

  fireEvent(val)
  {
    console.log(val);
    this.FetchData.getSearch(val) 
    .subscribe(data => this.videos=data);
  }
  add(value)
  { 
    console.log(value);
    this.FetchData.add1(value);
  }

}
