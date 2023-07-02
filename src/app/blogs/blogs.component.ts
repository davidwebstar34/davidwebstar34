import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Build, BUILDS } from '../builds';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  builds: Build[] = BUILDS;

  blogTitle: any = this.route.snapshot.paramMap.get('title');

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.builds.forEach(element => {
    //   if(element.title == this.blogTitle){
    //     this.content = element.content
    //     this.element.content
    //   }
    // });    
  }

}
