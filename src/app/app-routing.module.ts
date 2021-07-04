import { NotfoundComponent } from './notfound/notfound.component';
import { HelpComponent } from './help/help.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'deals',component:DealsComponent},
  {path:'helpcenter',component:HelpComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
