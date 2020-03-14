import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';


const routes: Routes = [
  {path: 'Contacts', component: ContactListComponent},
  {path: 'Search', component: ContactSearchComponent},
  {path: '', component: ContactListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
