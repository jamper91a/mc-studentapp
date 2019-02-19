import {User} from '../POJO/User';
import {Answer} from './Answer';

export class AnswerLogin extends Answer {
    data:{
        token:string;
        user: User
    };

}