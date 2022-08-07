import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'davidwebstar';

  activeTab = 'search';

  search(activeTab: string){
    this.activeTab = activeTab;
  }
  
  changeActiveTab(name: string){this.activeTab = name;}
   
}
