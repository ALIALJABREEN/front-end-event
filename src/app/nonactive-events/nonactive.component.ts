import { Component, OnInit } from '@angular/core';
import {Events} from '../event/event.model';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event/event.service';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-nonactive',
  templateUrl: './nonactive.component.html',
  styleUrls: ['./nonactive.component.css']
})
export class NonactiveComponent implements OnInit {

  event$: Events[];
  currentEvent: Event;
  user_id:number;
  constructor(private route: ActivatedRoute, private eventService: EventService,private auth:AuthenticationService) { }

  ngOnInit() {
    this.user_id=this.auth.getUserId();
    this.nonactiveEvents();

  }

  nonactiveEvents() {
    this.eventService.nonactiveEvents().subscribe(
      eventData => {
        this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting Non Active Events ...')
    );

  }
  getEvent(event:Events){
    this.eventService.getEvent(event.event_id);
  }
}

