import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/admin/components/dash/dash.component';
import { EditUserComponent } from './components/admin/components/edit-user/edit-user.component';
import { NavComponent } from './components/admin/components/nav/nav.component';
import { ProjectsComponent } from './components/admin/components/projects/projects.component';
import { UsersTableComponent } from './components/admin/components/users-table/users-table.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: NavComponent,
    children: [
      { path: 'dashboard', component: DashComponent },
      { path: 'users-table', component: UsersTableComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'edit-user', component: EditUserComponent },
    ] 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
