import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../services/github.service'
import { Profile } from '../models/Profile';
import { Repo } from '../models/Repo';
declare var $: any;

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  repoData: Repo[];
  repoSpinner: boolean = false;

  constructor(private github: GithubService) { }

  @Input() profile: Profile;
  @Input() showProfile;

  ngOnInit() {
    // this.github.user.subscribe(response =>
    //   console.log(response))

    // console.log(this.profile)
  }

  getRepos() {
    this.repoSpinner = true;
    this.github.getRepoData(this.profile.login).subscribe(repoResp => {
      this.repoData = repoResp;
      console.log(this.repoData);
      this.repoSpinner = false;
      this.showProfile.repos = true;
    }, err => console.log(err))
  }
}