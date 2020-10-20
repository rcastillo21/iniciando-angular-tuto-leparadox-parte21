import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parte21';
  
  constructor(
    private _http: HttpClient
  ){}

  usuarios: Usuario[] = [];

  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      delay(2000)
    ).subscribe((usuarios: Usuario[]) => this.usuarios = usuarios);
  }

}

export interface Usuario {
  name: string;
}
