import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../services/github.service'
import { Profile } from '../models/Profile';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  constructor(private github: GithubService) { }

  @Input() profile: Profile;
  @Input() showProfile: boolean;

  ngOnInit() {
    // this.github.user.subscribe(response =>
    //   console.log(response))

    // console.log(this.profile)
  }

}
