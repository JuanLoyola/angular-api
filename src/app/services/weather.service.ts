import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.60&lon=-58.38&appid=0e4566ce184e8e0f81917cbe5a299f4a&units=metric&lang=sp';

	constructor(private http: HttpClient) { }

	getWeatherData(): Observable<any> {
		return this.http.get(this.apiUrl);
	}
}
