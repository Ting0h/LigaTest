import { Injectable } from '@angular/core';
import { Commentaries} from './mock-commentary';
import { Commentary } from './commentary';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  constructor() { }

  getCommentaries(): Observable<Commentary[]>{
    return of (Commentaries);
  }
}
