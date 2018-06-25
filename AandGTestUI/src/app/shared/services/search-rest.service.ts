import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseRestService } from '../base-rest.service';

@Injectable()
export class SearchRestService extends BaseRestService {

    getSearchResult(query: string, tags?:string[], numericFilters?:string[], page?: number) : Observable<any> {

      let urlPath =`search`;

      const params: URLSearchParams = new URLSearchParams();
      params.set('query', query);
      urlPath+='?query='+query;

      if (tags != null && tags !== []){
        params.set('tags', tags.join(','));
        urlPath+='&tags='+tags.join(',');
      }

      if (numericFilters != null && numericFilters !== []){
        params.set('numericFilters', numericFilters.join(','));
        urlPath+='&numericFilters='+numericFilters.join(',');
      }

      if (page != null){
        params.set('page', page.toString());
        urlPath+='&page='+page;
      }

      return this.get(urlPath,params);
    }

}
