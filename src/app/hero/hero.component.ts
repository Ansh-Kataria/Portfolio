import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private http: HttpClient) {}

  downloadFile() {
    const url =
      ' https://drive.google.com/file/d/1BVYc-XCXiso80mno8p0gF45lkm38tUvM/view?usp=share_link'; // Replace with your file URL
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = "Ansh's_Resume.pdf"; // Replace with your file name
      link.click();
    });
  }
}
