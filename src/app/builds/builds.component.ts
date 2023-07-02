import { Component, OnInit } from '@angular/core';
import { Build, BUILDS } from '../builds';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {

  builds: Build[] = BUILDS;

  toggleArticle: boolean = true;

  constructor() { 
    // this.toggleArticle = true;
    

  }

  ngOnInit(): void {
    // this.toggleArticle = true;
  }

  // hide(disrupt: string) {
  //   console.log(disrupt)
  //   // hide cards and display article
  //   this.toggleArticle = false;

  // }

}
