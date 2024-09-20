import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
// firstRout
{
path:'',
redirectTo:'login',
pathMatch:'full'
},
// secondRout
{

path:'login',
component:LoginComponent

},
// ThirdRout
{
path:'',
component:LayoutComponent,
children:[
{
  path:'dashboard',
  component:DashboardComponent
}

]

}




];
