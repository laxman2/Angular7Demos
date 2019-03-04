/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('userData')) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */
