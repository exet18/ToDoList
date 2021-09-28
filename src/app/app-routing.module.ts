import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DescriptionComponent} from "./description/description.component";
import {ToDoComponent} from "./todo/to-do.component";

const routes: Routes = [
  {path: "", component: ToDoComponent},
  {path: ":id" ,component: DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
