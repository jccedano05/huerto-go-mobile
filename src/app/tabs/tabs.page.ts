import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {


  urlPath: string;

  constructor(private router: Router) {
    router.events.subscribe(e => {
      if(e instanceof NavigationStart){
        this.urlPath = e.url;
      }
    });
   }

   ngOnInit(): void{
    this.urlPath = this.router.url;
   }

};
