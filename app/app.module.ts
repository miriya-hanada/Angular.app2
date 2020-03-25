import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDataComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
