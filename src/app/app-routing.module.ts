import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';


const routes: Routes = [
  {path: 'Contacts', component: ContactListComponent},
  {path: 'Search', component: ContactSearchComponent},
  {path: 'Create', component: ContactCreateComponent},
  {path: '', component: ContactListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
