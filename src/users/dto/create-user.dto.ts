export class createUserDto{
    name: string;
    email: string;
    role: 'user' | 'admin' | 'moderator';
}