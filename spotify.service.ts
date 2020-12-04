import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQC4wBYAVZMZkFpN-RPPy3zFDGvYDFiiXtwlh7BNewAic27f0aolrlKfP3iUx5Ftzymufm7H9EoIdW3ktSw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );

  }

} 
