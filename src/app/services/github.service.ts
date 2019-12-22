import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from "../components/models/Profile";
import { ProfileDataComponent } from '../components/profile-data/profile-data.component';
import { Repo } from '../components/models/Repo'


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  client_id: string = '**********';
  client_secret: string = '**********';
  repos_perPage: number = 5;
  sort_order: string = 'created: asc'


  // Using Behavioral Subject
  // public userSource = new BehaviorSubject<Profile>({
  //   login: '',
  //   avatar_url: '',
  //   html_url: '',
  //   location: '',
  //   email: '',
  //   public_repos: '',
  //   public_gists: '',
  //   followers: '',
  //   following: '',
  //   created_at: ''
  // });
  // user = this.userSource.asObservable();

  constructor(private http: HttpClient) { }

  // getUserProfile(username) {
  //   console.log("hitting github with username: " + username);
  //   const resp = this.http.get(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  //   console.log(resp)
  //   this.userSource.next(resp);
  //   return resp;
  // }

  // getUserProfile(username: string): Observable<Profile> {
  //   console.log("hitting github with username: " + username);

  //   var resp = this.http.get<Profile>(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  //   console.log("response is " + resp);
  //   return resp;
  // }

  getUserProfile(username: string): Observable<Profile> {
    console.log("hitting github with username: " + username);
    return this.http.get<Profile>(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  getRepoData(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`https://api.github.com/users/${username}/repos?per_page=${this.repos_perPage}&sort=${this.sort_order}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

}
