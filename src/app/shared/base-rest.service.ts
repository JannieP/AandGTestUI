import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import { map } from 'rxjs/operators';

@Injectable()
export abstract class BaseRestService {

    private static baseServiceUrl = "https://hn.algolia.com/api/v1";

    constructor(private _http: HttpClient) {
    }

    protected get(url: string,params?:URLSearchParams): any {
        let options:any = { headers: this.getHeaders()};
        if (params){
          options = { headers: this.getHeaders(), params: params};
        }
        return this.getHttp().get(`${BaseRestService.baseServiceUrl}/${url}`, options).pipe(
          map(res => res)
        );
    }

    protected getHttp(): HttpClient {
        return this._http;
    }

    protected getHeaders(isUpload:boolean = false): HttpHeaders {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        if(!isUpload) {
            headers.append('Content-Type', 'application/json');
        }
        //headers.append('Authorization', 'Basic am9objpqb2hu');
        return headers;
    }

}
