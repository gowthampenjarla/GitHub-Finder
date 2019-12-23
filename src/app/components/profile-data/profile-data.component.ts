import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../services/github.service'
import { Profile } from '../models/Profile';
import { Repo } from '../models/Repo';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  repoData: Repo[];
  repoSpinner: boolean = false;
  resp: any;

  constructor(private github: GithubService) { }

  @Input() profile: Profile;
  @Input() showProfile;

  ngOnInit() { }

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