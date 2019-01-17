import {Time} from '@angular/common';

export class Events{
  constructor(
    public event_id: number,
    public  event_name: string,
    public city: string,
    public description: string,
    public capacity: number,
    public time: string,
    public approved: boolean,
    public date: string

) {
}
}
