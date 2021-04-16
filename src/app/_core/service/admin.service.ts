import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { configs } from "../config";

@Injectable({
  providedIn: "root"
})
export class AdminService {
    API_URL = {
        postAddUser: configs.domain + configs.apiRoutes.admin.getCreate,

    }
    responseType = "json";
    header = new HttpHeaders({ "Content-Type": "application/json" });
  
    constructor(private _http: HttpClient) {}
      postAddUser(userInfo: any, token: string): Observable<any> {
          let result = this._http.post(this.API_URL.postAddUser, {
            headers: this.createHeaderWithAuth(token),
            responseType: "json"
          });
          console.log(token);
          console.log(result);
          return result;
        }
      createHeaderWithAuth(token: string): HttpHeaders {
        return new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        });
      }
    
      createHeaderWithAuthNotContentType(token: string): HttpHeaders {
        return new HttpHeaders({
          Authorization: "Bearer " + token
        });
      }
}
