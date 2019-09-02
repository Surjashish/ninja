import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public url_="";
  public vidId2="https://www.youtube.com/embed/";

  constructor(private activateroute:ActivatedRoute, private FetchData: FetchDataService) { }
  public vidData=[];

  ngOnInit() {
let vID=this.activateroute.snapshot.paramMap.get('VID');
    let vidId2=this.vidId2+vID;
    this.url_ = vidId2;
     
    this.FetchData.getDescription(vidId2)
      .subscribe(data => this.vidData=data);                                      

  }

}
