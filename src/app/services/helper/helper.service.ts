import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ActionService } from '../action/action.service';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private actionService: ActionService) { }

  getAllQuestionsetList(requestData: object): Observable<any> {
    const req = {
      url: 'composite/v3/search',
      data: requestData
    };
    return this.actionService.post(req).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
