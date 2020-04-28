import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes: Observable<any>;
    // the observable it is so important in order to observe the episodes, without this does not work 


    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        // with this code or witout the app run normally 
        this.episodes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
}