import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateFn = (route, state) =>
{
  const apiService = inject(ApiService);
  const router = inject(Router);

  let loggedInUser = apiService.GetLoggedinUser();

  let roles = route.data?.['roles'] as Array<string>;

  if(loggedInUser && route.data?.['roles'] && roles.find(x=>x===loggedInUser.role))
  {
    return true;
  }
  else {
    router.navigate(['/login']);
  }

  return false;
};

