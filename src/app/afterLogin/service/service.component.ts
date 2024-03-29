import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageUploadServiceService } from 'src/app/appService/image-upload-service.service';
import { ProductService } from 'src/app/appService/product.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

//   selectedFile: File | undefined;
//   products:any

//   constructor(private imageUploadService: ImageUploadServiceService, private productSer_:ProductService) { }

//   onFileChanged(event:any) {
//     this.selectedFile = event.target.files[0];
//   }

//   imageFile:any

//   onUpload() {
//     if (this.selectedFile) {
//       this.imageUploadService.uploadImage(this.selectedFile).subscribe(
//         (response) => {
//           this.imageFile = response
//           console.log('Image uploaded successfully!', response);
//           // Handle success response
//           console.log("Uploaded");
//           return
//         });
//         console.log("Not Uploaded");
//     }
// }

// getAllProduct(){
//   this.productSer_.getAllProducts().subscribe((res)=>{
//     this.products = res
//     console.log(this.products);
//   })
// }

constructor(private httpClient: HttpClient) { }

  // selectedFile: File | undefined;
  selectedFile: any
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string | undefined;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        (res) => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }


}
