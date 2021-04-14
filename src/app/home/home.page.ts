import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient,
    private router: Router) {}
  env = environment;
  list: any;

  goTo(route){
    this.router.navigateByUrl(route);
  }

  ionViewWillEnter(){
    this.http.get(this.env.API_URL+'/list').subscribe( data => {
      this.list = data;
      console.log(data);
    })
  }

}
