import { Role } from "./role.type";

export interface IUser {
    id:string
    username:string
    password:string
    int: string
    role: Role
    token:string
    userId:string
    message:string

}