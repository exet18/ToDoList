import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {ToDoAddComponent} from './to-do-add/to-do-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DescriptionComponent} from './description/description.component';
import {ToDoComponent} from './todo/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ToDoAddComponent,
    DescriptionComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
