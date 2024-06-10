export type TRoles = "admin" | "moder" | "user";

export interface IUser {
    _id?:string,
    username: string,
    realname: string,
    role: TRoles
}

export interface IUserRegistration extends IUser{
    email:string,
    password:string,
    passwordRepeat: string
}

export interface IUserLogin extends Pick<IUserRegistration, "username" | "password">{}

export interface IRole {
    name: string,
    code: TRoles
}
