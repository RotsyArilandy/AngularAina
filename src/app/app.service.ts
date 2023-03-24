import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Playlist } from "./model";

@Injectable()
export class AppService {
    private url = 'assets/data.json';
    constructor(private http: HttpClient)
    { }

    public getData(): Observable<any> {
        return this.http.get(this.url);
    }

    public writeData(data: string): Observable<any> {
        return this.http.post(this.url,data);
    }
}