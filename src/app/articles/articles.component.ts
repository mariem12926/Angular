import { Component, OnInit } from '@angular/core';
import { Articles } from '../core/Articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  titre!:string
  constructor() { }

  ngOnInit(): void {
    this.titre="Les articles de jour"
      
  }
}
