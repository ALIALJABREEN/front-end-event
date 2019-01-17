export class Tickets{
  constructor(
    public ticket_id:number,
    public ticketdate:string,
    public tickettime:string,
    public rate:number,
    public comment:string,
    public event_name:string,
    public rated:boolean,
    public attend:boolean
  ){
  }
}
