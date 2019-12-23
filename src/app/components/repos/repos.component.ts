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

    if (this.repoData.length != 0) {
      this.repoDisplay = true;
      console.log(this.repoData);
    } else {
      window.alert("This user doesn't have any repositories");
    }
  }


}
