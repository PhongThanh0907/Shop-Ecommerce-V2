export interface User {
    userName: string;
    email: string;
    password: string;
    isAdmin?: boolean
    token: string;
}