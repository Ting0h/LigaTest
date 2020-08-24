import { DatePipe } from '@angular/common';

export interface Commentary{
    creator: string;
    text: string;
    category: string;
    face: string;
    date: Date;
}