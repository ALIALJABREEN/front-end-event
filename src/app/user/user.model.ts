export class User {
  constructor(
    public users_id : number,
   public userName: string,
   public firstName: string,
  public lastName: string,
  public password: string,
  public email: string,
  public mobileNumber: string,
  public gender: string,
  public role: string,
  public  enabled:boolean
    
  ) {
  }
}
