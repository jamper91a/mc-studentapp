import {User} from '../../../providers/pojo/User';
import {Answer} from './Answer';

export class AnswerLogin extends Answer {
    data:{
        token:string;
        user: User
    };
    lio:string="eee";

}