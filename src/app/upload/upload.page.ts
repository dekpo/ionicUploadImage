import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss'],
})
export class UploadPage {

  constructor(private http: HttpClient, private router:Router) {}


  UPLOAD_URL = environment.API_URL;
  file: File;
  title = '';
  description = '';
  author = '';

  onFileChange(event){
    this.file = event.target.files[0];
  }

  uploadFile(){
    let formData = new FormData();
    if (this.file) {
      formData.append('picture',this.file, this.file.name);
      formData.append('title',this.title);
      formData.append('author',this.author);
      formData.append('description',this.description);
      this.http.post(this.UPLOAD_URL,formData).subscribe( () => {
      this.router.navigateByUrl('/home');
    });
    }
  }

}