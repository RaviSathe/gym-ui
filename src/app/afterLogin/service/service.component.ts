import { Component } from '@angular/core';
import { ImageUploadServiceService } from 'src/app/appService/image-upload-service.service';
import { ProductService } from 'src/app/appService/product.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  selectedFile: File | undefined;
  products:any

  constructor(private imageUploadService: ImageUploadServiceService, private productSer_:ProductService) { }

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }

  imageFile:any

  onUpload() {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          this.imageFile = response
          console.log('Image uploaded successfully!', response);
          // Handle success response
          console.log("Uploaded");
          return
        });
        console.log("Not Uploaded");
    }
}

getAllProduct(){
  this.productSer_.getAllProducts().subscribe((res)=>{
    this.products = res
    console.log(this.products);
  })
}

}
