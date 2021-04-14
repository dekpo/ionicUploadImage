import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  file: File;
  title = '';

  onFileChange(event){
    this.file = event.target.files[0];
  }

  uploadFile(){
    let formData = new FormData();
    if (this.file) {
      formData.append('picture',this.file, this.file.name);
      formData.append('title',this.title);
      this.http.post('http://localhost:3000',formData).subscribe( (response) => {
      console.log('response');
    });
    }
  }

}
