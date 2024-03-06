import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RecipeListModel } from './models/recipe-list.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked,OnDestroy{

  ngOnInit(){
    console.log("Oninit executed");
  }

  ngDoCheck(){
    console.log("DoCheck executed");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit Oninit executed");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked executed");
  }

  ngOnDestroy(){
    console.log("OnDestroy executed")
  }

  name: {name:string, surname:string} = {name:'',surname:''};

  onAddNewClicked(event: any){
    this.name = event;
    alert("Thanks for clicking, " + this.name.name + ' ' + this.name.surname + '!')  
  }

  getName(){
    if(this.name){
      return this.name.name
    }
    return '';
  }

  getSurname(){
    if(this.name){
      return this.name.surname
    }
    return '';
  }

  newAddedRecipeItem!:RecipeListModel;

  getAddedRecipeItem(event: RecipeListModel){
    console.log(event);
    this.newAddedRecipeItem = event; 
  }

}
