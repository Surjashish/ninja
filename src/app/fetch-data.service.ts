import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { videoData } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  private url: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Aurora+Borealis&key=AIzaSyDyCuMWElbU7qPRYwidkWUNgwKpuBBNocA";

  constructor(private http: HttpClient) { }

  getVideo(): Observable<videoData[]>{
    return this.http.get<videoData[]>(this.url);
  }

  getSearch(search){
    console.log(search);
    let newURL: string = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+search+"&key=AIzaSyDyCuMWElbU7qPRYwidkWUNgwKpuBBNocA";
    return this.http.get<videoData[]>(newURL);

  }
  getDescription(videoID){
    console.log(videoID);
    let newURL2="https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoID+"&key=AIzaSyDyCuMWElbU7qPRYwidkWUNgwKpuBBNocA";

    return this.http.get<videoData[]>(newURL2);

  }

  public received={
    video_Id: ''
  }
  jason='http://localhost:3000/videozz';

  add1(value)
  {

    this.received.video_Id=value;
    this.http.post(this.jason,this.received).toPromise();
    alert("Added to favourites!!!!");
  }

  getMyFav()
  {
    return this.http.get(this.jason);
  }

  rem(val)
  {
    console.log(val);
    console.log("http://localhost:3000/videozz"+val)
    this.http.request('delete',"http://localhost:3000/videozz/"+val)
    .subscribe((ok)=>(console.log(ok)));
    alert("Removed from favourite!!!!!");
    window.location.reload();
  }
}
