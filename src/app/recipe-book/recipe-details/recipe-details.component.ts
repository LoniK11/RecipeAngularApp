import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeListModel } from '../models/recipe-list.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Output() recipeItem:EventEmitter<RecipeListModel> = new EventEmitter<RecipeListModel>();

  name!:string;
  description!:string;
  imageUrl!:string;
  imageName!:string

  inputImage(event: any){
    const file:File = event.target.files[0];
    this.imageName = event.target.files[0].name;

    if(file){

      const fileReader = new FileReader();

      fileReader.onload = (e:any) => {
        this.imageUrl = e.target.result;
        console.log(this.imageUrl)
      }
      
      fileReader.readAsDataURL(file); 

    }
  }

  onSubmit(){

    this.recipeItem.emit({name:this.name,description:this.description,imageUrl:this.imageUrl});
    this.name = '';
    this.description = '';
    this.imageUrl = '';
    this.imageName = '';
  }

}
