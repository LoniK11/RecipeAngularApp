import { Component, EventEmitter, Input, Output, AfterViewChecked, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { RecipeListModel } from '../models/recipe-list.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements AfterViewChecked{

  ngAfterViewChecked(){
    this.addNewRecipeItem();
  }

  recipes:RecipeListModel[] = [
    {name:'recipeOne',description:'recipeOne Desc',imageUrl:'./assets/images/recipe1.jpg'},
    {name:'recipeTwo',description:'recipeTwo Desc',imageUrl:'./assets/images/recipe2.jpg'}
  ]

  @Output() addNew:EventEmitter<{name:string, surname:string}> = new EventEmitter<{name:string, surname:string}>();

  @Input() newRecipeItem:RecipeListModel = {name:'',description:'',imageUrl:''};

  addNewUser(){
    this.addNew.emit({name:'Valon',surname:'Kulici'});
  }

  addNewRecipeItem(){
    if(this.newRecipeItem){
      if((this.newRecipeItem.imageUrl !== undefined && this.newRecipeItem.name !== undefined &&this.newRecipeItem.description !== undefined) && 
        (this.newRecipeItem.imageUrl !== '' && this.newRecipeItem.name !== '' && this.newRecipeItem.description !== '')){
        console.log(true)
        this.recipes.push(this.newRecipeItem);
        this.newRecipeItem = {name:'',description:'',imageUrl:''}
      }
      else{
        console.log(false)
      }
    }
  }

  @ViewChild('name' ,{ static:true }) name2 !: ElementRef;


  click(){
    alert(this.name2.nativeElement.value)
  }

  removeElement(index: any){
    let i = parseInt(index);
    this.recipes.splice(index,1);
  }

}
