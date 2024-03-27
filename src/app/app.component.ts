import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private http:HttpClient){}
  title = 'FormAngular';
  formData: any={};
  

  submitForm(){
    console.log(this.formData);
    this.formData.action='save';
    console.log(this.formData);
    this.http.post('https://localhost:44382/api/Form/FormSave',this.formData).subscribe(
      respone=>{
        alert('Form Submitted Successfully'+respone );
      },
      error=>
      {
        alert('Error submitting a form' +error  );

      }
    );
  }
}
