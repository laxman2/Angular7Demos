/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Laxman Kanhere';

	// Add few students for initial listing
	studentsList = [
	{
		id : 1,
		first_name : 'Laxman',
		last_name : 'Kanhere',
		email : 'laxmank@yopmail.com',
		phone : 9503733178,
		department : 'Science'
	},
	{
		id : 2,
		first_name : 'Sarfraj',
		last_name : 'kureshi',
		email : 'Sarfraj@yopmail.com',
		phone : 8574889658,
		department : 'Commerce'
	},
	{
		id : 3,
		first_name : 'Tushar',
		last_name : 'Kapoor',
		email : 'tushar@yopmail.com',
		phone : 7485889658,
		department : 'Science'
	},
	{
		id : 4,
		first_name : 'John',
		last_name : 'Doe',
		email : 'john@yopmail.com',
		phone : 9685589748,
		department : 'Arts'
	},
	{
		id : 5,
		first_name : 'Peter',
		last_name : 'Parker',
		email : 'peter@yopmail.com',
		phone : 8595856547,
		department : 'Engineering'
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */
