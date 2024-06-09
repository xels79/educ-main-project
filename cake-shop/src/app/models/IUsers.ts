export interface IUser {
    _id?:string,
    username: string,
    realname: string,
}
export interface IUserRegistration extends IUser{
    email:string,
    password:string,
    passwordRepeat: string
}
export interface IUserLogin extends Pick<IUserRegistration, "username" | "password">{}

