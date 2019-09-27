import { Component, OnInit } from '@angular/core';
import {Tickets} from '../ticket/ticket.model';
import {EventService} from '../event/event.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-events-ticket',
  templateUrl: './events-ticket.component.html',
  styleUrls: ['./events-ticket.component.css']
})
export class EventsTicketComponent implements OnInit {
  tickets: Tickets[];
  event_id :number;
  constructor(private eventService: EventService,private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe((value:any) => {
      this.event_id=value.event_id;
    })
    this.getEventsTicket();
  }


   getEventsTicket() {
    this.eventService.eventsTicket(this.event_id).subscribe(
      tickData => {
          this.tickets = tickData;
      },
      err => console.log(err),
      () => console.log('Ticket List Completed')
    );
  }
  attendEvent(ticket_id:number){
    this.eventService.attendEvent(ticket_id).subscribe(
      ticketData => {
      },
      err => console.log(err),
      () => console.log('asdfg')
    )
    location.reload()
  }
  isAttend(attend:boolean){
    if (attend === true){
      return true;
    }
  }
}
