import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { WorkingWithCustomDirectivesComponent } from './working-with-custom-directives/working-with-custom-directives.component';

import { BasicHighlightDirective } from './Directives/basic-highlight.directive';
import { BetterHighlightDirective } from './Directives/better-highlight.directive';
import { AppUnlessDirective } from './Directives/app-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    WorkingWithCustomDirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AppUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
