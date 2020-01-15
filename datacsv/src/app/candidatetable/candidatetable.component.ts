import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-candidatetable',
  templateUrl: './candidatetable.component.html',
  styleUrls: ['./candidatetable.component.css']
})
export class CandidatetableComponent implements OnInit {

  data: any;
  tableColumns: string[] = ['id', 'name', 'username'];

  constructor(private http : HttpClient) { }

  ngOnInit() {
  
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      console.log('books', response);
      this.data = response;
      
    });

  }

}
