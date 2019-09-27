import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './Login/Login.component';
import {AuthGuard} from './authentication/auth.guard';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {EventComponent} from './event/event.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {ActiveEventsComponent} from './active-events/active-events.component';
import {EditEventComponent} from './edit-event/edit-event.component';
import {TicketComponent} from './ticket/ticket.component';
import {EventsTicketComponent} from './events-ticket/events-ticket.component';
import {NonactiveComponent} from './nonactive-events/nonactive.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  {path: 'home', component: AppComponent},
  {path: 'users', component: UserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'event', component: EventComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'active-events', component: ActiveEventsComponent},
  {path: 'nonactive-events', component: NonactiveComponent},
  {path: 'my-events', component: MyEventsComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'event/:event_id', component:EventDetailComponent},
  {path: 'edit_event/:event_id', component:EditEventComponent},
  {path: 'events_ticket/:event_id', component:EventsTicketComponent},
  {path: 'user/:usersid', component: UserEditComponent},
  {path: 'user-profile', component: UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

