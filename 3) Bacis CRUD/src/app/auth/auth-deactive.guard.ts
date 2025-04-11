import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';

export const authDeactiveGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  let loggedInUser = apiService.GetLoggedinUser();
  if(loggedInUser)
  {
    if(loggedInUser.role == "Admin" || loggedInUser.role == "Manager")
    {
      router.navigate(['/admin/index']);
    }
    else
    {
      router.navigate(['/employee/index']);
    }
  }

  return true;
};
