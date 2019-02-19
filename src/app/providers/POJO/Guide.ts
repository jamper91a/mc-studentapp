import {Step} from './Step';

export class Guide {

    id: number;
    name:string;
    description:string;
    countries_id:number;
    steps:Step[];
    createdAt: string;
    updatedAt: string;
}
