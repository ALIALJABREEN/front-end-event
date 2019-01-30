import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event/event.service';
import {Events} from '../event/event.model';
import {AuthenticationService} from '../authentication/authentication.service';
import {Tickets} from '../ticket/ticket.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comments} from '../event/comment.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls:['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Events;
  event_id:number;
  user_id:number;
  comments:Comments[];
  myReactiveForm:FormGroup;
  private sub: Subscription;
  tickets:Tickets;
  errorbook;
  errorcomment;

  constructor(private route:ActivatedRoute ,private eventService:EventService,private auth:AuthenticationService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
    this.sub = this.route.params.subscribe((param: any) => {
      this.event_id = param.event_id;
    });
    this.eventService.getEvent(this.event_id).subscribe(value => {
      this.event = value;
    });

    this.myReactiveForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
    this.getComments();

  }
  aprroveEvent(){
    this.eventService.approveEvents(this.event_id).subscribe(
      approveData => {
        this.event= approveData;
        this.router.navigate(['/active-events'])
      },
      err => console.log(err),
      () => console.log('Getting approve events')
    );
  }



  disaprroveEvent(){
    this.eventService.disapproveEvent(this.event_id).subscribe(
      disaprroveData => {
        this.event= disaprroveData;
        this.router.navigate(['/nonactive-events'])
      },
      err => console.log(err),
      () => console.log('Getting disapprove events')
    );
  }

    bookTicket(eventid:number){
    this.eventService.bookTicket(this.user_id,eventid).subscribe(
      bookTicketData => {
        this.tickets = bookTicketData;
        this.router.navigate(['/ticket'])
      },
      error => this.errorbook = error.error.message,
      () => console.log('Getting booktickets complete...')
    );
  }

    isAprove(){
    if (this.event.approved === true){
      return true;
    }
  }

    addComment() {
      this.eventService.addComment(this.user_id, this.event_id, this.myReactiveForm).subscribe(
        data => {

        },
        error => this.errorcomment= error.error.message,
        () => location.reload(),
        )
    };
     getComments(){
     this.eventService.getComment(this.event_id).subscribe(
       data => {
         this.comments=data;
       },
       err => console.log(err),
       () => console.log(),
     );
    }



  isAdmin(){
    if (this.auth.getRole()==='ROLE_ADMIN')
      return true;
  }

  isOrganizer(){
    if (this.auth.getRole()==='ROLE_ORGANIZER')
      return true;
  }

  isUser(){
    if (this.auth.getRole()==='ROLE_USER')
      return true;
  }

}
