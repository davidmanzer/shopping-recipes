import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://i.pinimg.com/originals/7f/5d/08/7f5d0818893b7151b4180d2ced804b25.jpg'),
    new Recipe('A test recipe', 'This is a test', 'https://i.pinimg.com/originals/7f/5d/08/7f5d0818893b7151b4180d2ced804b25.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
