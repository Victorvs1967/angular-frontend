import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/admin/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashComponent } from './components/admin/components/dash/dash.component';
import { CardComponent } from './components/admin/components/card/card.component';
import { UsersTableComponent } from './components/admin/components/users-table/users-table.component';
import { ProjectsComponent } from './components/admin/components/projects/projects.component';
import { EditUserComponent } from './components/admin/components/edit-user/edit-user.component';
import { FrontInterceptor } from './interceptor/front.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    UserComponent,
    LayoutComponent,
    NavComponent,
    DashComponent,
    UsersTableComponent,
    CardComponent,
    ProjectsComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FrontInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
