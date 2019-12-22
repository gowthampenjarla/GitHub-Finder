import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../models/Repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  userRepo: Repo;
  @Input() repoData: Repo[];
  repoDisplay: boolean = false;
  constructor() { }
  ngOnInit() {

    if (!this.repoDisplay) {
      this.repoDisplay = true;
      console.log(this.repoData);
      // this.repoData.forEach(repo => {
      //   this.userRepo.name = repo.name;
      //   this.userRepo.html_url = repo.html_url;
      //   this.userRepo.forks_count = repo.forks_count;
      //   this.userRepo.stargazers_count = repo.stargazers_count;
      //   this.userRepo.watchers_count = repo.watchers_count;
      // });
    }
  }


}
