import { Component, OnInit } from '@angular/core';
import {Tickets} from './ticket.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event/event.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
   tickets: Tickets[];
   tickets$: Tickets[];
   user_id:number;
  myReactiveForm:FormGroup;


  constructor(private route: ActivatedRoute, private eventService: EventService, private auth:AuthenticationService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user_id=this.auth.getUserId();
    this.getMyTickets();
    this.myTicketsAttend();
    this.myReactiveForm = this.formBuilder.group({
      comments: ['', Validators.required],
      rate: ['', Validators.required]
    });
  }

   getMyTickets(){
    this.eventService.getMyTickets(this.user_id).subscribe(
      ticketData => {
        this.tickets = ticketData;
      },
      err => console.log(err),
      () => console.log('Getting  My Tickets complete...')
    );
  }
    myTicketsAttend(){
    this.eventService.myTicketsAttend(this.user_id).subscribe(
      ticketData => {
          this.tickets$= ticketData;
      },
      err => console.log(err),
      () => console.log('Getting  My Tickets Attended complete...')
    );
  }

   deleteTicket(ticket_id:number){
    this.eventService.deleteTicket(ticket_id).subscribe(
    ticketData => {
    },
    err => console.log(err),
    () => console.log('Deleting Tickets')
  );
   alert('ticket deleted')
     location.reload();

  }
   addRate(ticket_id:number){
    this.eventService.addRate(ticket_id,this.myReactiveForm).subscribe(
      data => {
      },
      err => console.log(err),
      () => console.log(' Add Rate')
    );
    location.reload()
   }
   isRated(rated:boolean){
    if (rated === true){
      return true;
    }


   }

}

