import {Guide} from './Guide';

export class Step {
    id: number;
    number: number;
    name: string;
    description: string;
    guides_id: Guide;
    createdAt: string;
    updatedAt: string;
}