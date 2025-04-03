import { Routes } from '@angular/router';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';

export const routes: Routes = [
  { path: '', component: CharacterlistComponent },
  { path: 'character/:name', component: CharacterdetailsComponent } 
];
