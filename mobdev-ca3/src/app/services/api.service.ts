import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// It is a service created to get all the information from http://breakingbadapi/ 
// I created a method for each topic that I want to get from the api


@Injectable({
    providedIn: 'root'
})
export class ApiService {


    constructor(private http: HttpClient) { }

    getEpisodes() {
        // this <[]> it is to get the information inseide of an array
        return this.http.get<[]>(`https://www.breakingbadapi.com/api/episodes`);
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }



}
