import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  api_link = "https://api.academeyat.com/api"

  // api_link="http://stagingapis.academeyat.com/public/api"
  constructor(private http: HttpClient) {
  }

  getAllSubsc(token :  any, page?: any, data?: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    let params = data;
    return this.http.get(this.api_link + "/my-subscribes?page=" + page, {headers, params});
  }

  showDetails(token : any, id: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.get(this.api_link + "/my-subscribes/" + id, {headers});
  }

  getmyRequests(token : any, page?: any, data?: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    let params = data;
    return this.http.get(this.api_link + "/my-active-subscribes?page=" + page, {headers, params});
  }

  getMoney(token : any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.get(this.api_link + "/total-debt", {headers});
  }

  getTotalmoney(token : any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.get(this.api_link + "/total_subscription_amounts", {headers});
  }

  // cancle  request
  cancelRequest(token : any, id: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.get(this.api_link + "/subscribes/send-cancel-request/" + id, {headers});
  }

  // renew  request
  renewRequest(token : any, id : any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.get(this.api_link + "/subscribes/send-renew-request/" + id, {headers});
  }

  setOption(token : any, id:any, option: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.post(this.api_link + "/subscribe-options/" + id, {options: option}, {headers});
  }

  scheduleCancel(token : any, id:any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.post(this.api_link + "/schedule-cancel-subscribe/" + id, {token: token});
  }

  scheduleNew(token : any, id:any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Accept', 'application/json');
    return this.http.post(this.api_link + "/schedule-renew-subscribe/" + id, {token: token});
  }

}
