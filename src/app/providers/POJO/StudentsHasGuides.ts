import {Guide} from './Guide';
import {Student} from './Student';

export class StudentsHasGuides {
    id: number;
    step_number: number;
    guides_id: Guide;
    student_id: Student;
    createdAt: string;
    updatedAt: string;
}