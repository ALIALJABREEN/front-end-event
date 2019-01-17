import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Events} from './event.model';
import {Tickets} from '../ticket/ticket.model';
import {Comments} from './comment.model';
import {Rate} from '../ticket/rate.model';



const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(`api/events`);
  }
  getEvent(event_id:number): Observable<Events>{
    return this.http.get<Events>(`api/event/` + `${event_id}`);
  }

  addEvent(orgenizerid:number,a: Events): Observable<Event> {
    return this.http.post<Event>(`api/event/create/` + `${orgenizerid}`, JSON.stringify(a), API_ARGS);
  }

  ubdateEvent(event_id:number,a): Observable<Events>{
    return this.http.put<Events>( `api/event/` + `${event_id}`,JSON.stringify(a.value),API_ARGS);
  }

   deleteEvent(event_id:number): Observable<Events>{
    return this.http.delete <Events>( `api/event/` + `${event_id}`);
  }


   getMyEvents( orgnizerid:number): Observable<Events[]> {
    return this.http.get<Events[]>(`api/myEvents/` + `${orgnizerid}`);
  }

  activeEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(`api/activeEvents`);
  }

  nonactiveEvents():Observable<Events[]>{
    return this.http.get<Events[]>(`api/nonactiveEvents`);
  }

  approveEvents(event_id:number): Observable<Events>{
    return this.http.get<Events>( `api/approveEvent/` + `${event_id}`);
  }

  disapproveEvent(event_id:number): Observable<Events>{
    return this.http.get<Events>( `api/disapproveEvent/` + `${event_id}`);
  }

   bookTicket(user_id:number,event_id:number): Observable<Tickets> {
    return this.http.get<Tickets>(`api/bookticket/` + `${user_id}` + `/` +`${event_id}`);
  }
   getMyTickets(user_id:number): Observable<Tickets[]>{
    return this.http.get<Tickets[]>(`api/mytickets/` + `${user_id}`);
   }
    myTicketsAttend(user_id:number):Observable<Tickets[]>{
    return this.http.get<Tickets[]>(`api/mytickets/attend/` + `${user_id}`);
   }

   deleteTicket(ticket_id:number):Observable<Tickets>{
    return this.http.delete<Tickets>(`api/ticket/` + `${ticket_id}`);
   }

   eventsTicket(event_id:number):Observable<Tickets[]>{
    return this.http.get<Tickets[]>(`api/eventsticket/ ${event_id}`)
   }

   getComment(event_id:number):Observable<Comments[]>{
   return this.http.get<Comments[]>(`api/comments/${event_id}`)
   }


  addComment(user_id:number,event_id:number,a): Observable<Comments> {
    return this.http.post<Comments>(`api/comment/` + `${user_id}` + `/` +`${event_id}`, JSON.stringify(a.value), API_ARGS);
  }

  addRate(ticket_id:number,a): Observable<Rate> {
    return this.http.post<Rate>(`api/rate/` + `${ticket_id}`,JSON.stringify(a.value), API_ARGS);
  }
  attendEvent(ticket_id:number) : Observable<Tickets>{
    return this.http.get<Tickets> (`api/approveticket/` + `${ticket_id}`)
  }
}
