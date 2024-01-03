import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadServiceService {

  private readonly apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  uploadImage(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post('http://localhost:9090/upload', formData);
  }
}
