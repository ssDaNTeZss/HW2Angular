import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {

  private url = "/api/students";

  constructor(private http: HttpClient) {
  }

  getStudents(): Promise<void | any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response)
      .catch(this.error);
  }

  // Error handling
  private error(error: any) {
    let message = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : "Server error";
    console.error(message);
  }
}
