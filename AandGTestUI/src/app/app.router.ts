import { Routes } from '@angular/router';
import { YcombinatorComponent } from './ycombinator/ycombinator.component';

export const routes: Routes = [

  { path: '', redirectTo: 'YCombinator', pathMatch: 'full' },
  {
    path: 'YCombinator', component: YcombinatorComponent
  }
]
