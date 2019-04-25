import {Guide} from './Guide';
import {Student} from './Student';
import {School} from './School';

export class Courses {
    id: number;
    name: string;
    description: string;
    photo: string;
    school: School;
    createdAt: string;
    updatedAt: string;
}
