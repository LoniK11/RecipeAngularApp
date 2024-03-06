import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeListModel } from '../../models/recipe-list.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit,OnDestroy{

  @Input() recipe!:RecipeListModel;
  @Output() a!:EventEmitter<any>;

  ngOnInit(){

  }

  
  ngOnDestroy(): void {
    console.log("OnDestroy executed")
  }

  outputMessage(){
    let e = new EventEmitter<string>();
    e.emit("Thanks for clicking!");
  }

}
