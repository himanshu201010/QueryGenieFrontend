// app.component.ts
import { Component } 
    from '@angular/core';
import { FormsModule } 
    from '@angular/forms';
import { CommonModule }
    from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [FormsModule, CommonModule]
})

export class AppComponent {

  constructor(private http: HttpClient) { }
    formData: any = {
        name: ""
    };
    displayFormData: boolean = false;
    submittedValue: string = '';

    onSubmit(form: NgForm) {
        // if (!this.displayFormData) {
        //     this.update();
        // }
        this.http.post('YOUR_API_ENDPOINT', form.value)
        .subscribe({
          next: (response) => {
            console.log('Success!', response);
          
          },
          error: (error) => {
            console.error('Error!', error);
          }
        });
    }

    update() {
      this.submittedValue = this.formData.name;
        this.displayFormData = !this.displayFormData;
       
    }

    onButtonClick() {
        this.formData.name = '';
        this.submittedValue = '';
        this.displayFormData = false;
    }
}