import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './MainComponent';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user/user.service';
import { LoginComponent } from './Login/Login.component';
import {ErrorInterceptor} from './authentication/error.interceptor';
import {BasicAuthInterceptor} from './authentication/basic-auth.interceptor';
import {AuthenticationService} from './authentication/authentication.service';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { ActiveEventsComponent } from './active-events/active-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { TicketComponent } from './ticket/ticket.component';
import { EventsTicketComponent } from './events-ticket/events-ticket.component';
import { NonactiveComponent } from './nonactive-events/nonactive.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    UserDetailComponent,
    UserEditComponent,
    EventComponent,
    EventDetailComponent,
    CreateEventComponent,
    MyEventsComponent,
    ActiveEventsComponent,
    EditEventComponent,
    TicketComponent,
    EventsTicketComponent,
    NonactiveComponent,
    UserProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
