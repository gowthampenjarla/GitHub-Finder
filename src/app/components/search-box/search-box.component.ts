import { Component, OnInit } from '@angular/core';
import { GithubService } from "../../services/github.service";
import { Profile } from '../models/Profile'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})


export class SearchBoxComponent implements OnInit {

  profile: Profile = {
    login: '',
    avatar_url: '',
    html_url: '',
    location: '',
    email: '',
    public_repos: '',
    public_gists: '',
    followers: '',
    following: '',
    created_at: ''
  }
  userName: string;
  showProfile = {
    profile: false,
    alert: false,
    repos: false,
  }
  Spinner: boolean = false;
  constructor(private github: GithubService) { }

  ngOnInit() {
  }
  onSubmit() {

    this.clearState();
    this.Spinner = true;
    this.github.getUserProfile(this.userName).subscribe((response => {
      console.log(response);
      this.Spinner = false
      this.showProfile.profile = true;
      this.profile = response;
    }), err => {
      console.log(err);
      if (err.status === 404) {
        this.Spinner = false
        this.showProfile.alert = true;
      }
    })
  }

  clearState() {
    this.Spinner = false;
    this.showProfile.profile = false;
    this.showProfile.alert = false;
    this.showProfile.repos = false;
  }
}
