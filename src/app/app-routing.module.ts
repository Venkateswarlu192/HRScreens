import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'departments', component: DepartmentsComponent},
  { path: 'edit', component:EditComponent},
  {path:'', redirectTo:'departments', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
