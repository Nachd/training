import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { TodoComponent } from './admin/todo/todo.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children : [
      {
        path: 'todo',
        component: TodoComponent
      }
    ]
  },
  {
    path : 'register',
    component : RegisterComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
