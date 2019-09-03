import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { videoData } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  private url: string = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Aurora+Borealis&key=AIzaSyCvghSepXgC77l5jhillJDXipJvy85Vtzc";

  constructor(private http: HttpClient) { }

  getVideo(): Observable<videoData[]> {
    return this.http.get<videoData[]>(this.url);
  }

  getSearch(search) {
    console.log(search);
    let newURL: string = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + search + "&key=AIzaSyCvghSepXgC77l5jhillJDXipJvy85Vtzc";
    return this.http.get<videoData[]>(newURL);

  }
  getDescription(videoID) {
    console.log(videoID);
    let newURL2 = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + videoID + "&key=AIzaSyCvghSepXgC77l5jhillJDXipJvy85Vtzc";

    return this.http.get<videoData[]>(newURL2);

  }

  public received = {
    video_Id: '',
    comments: ''
  }
  jason = 'http://localhost:3000/videozz';

  add1(value) {

    this.received.video_Id = value;
    return this.http.post(this.jason, this.received);
  }

  getMyFav() {
    return this.http.get(this.jason);
  }

  rem(val) {
    console.log(val);
    console.log("http://localhost:3000/videozz" + val)
    this.http.request('delete', "http://localhost:3000/videozz/" + val)
      .subscribe((ok) => (console.log(ok)));
    // alert("Removed from favourite!!!!!");
    window.location.reload();
  }
  comm(val, val2, val3) {
    console.log(val); console.log(val2);
    this.received.video_Id = val3;
    this.received.comments = val;
    this.http.put("http://localhost:3000/videozz/" + val2, this.received).toPromise();
    // alert("comment to this video added!!!");
  }
}
