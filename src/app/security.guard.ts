import { CanActivateFn,Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';

export const securityGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated=localStorage.getItem('fullName')
  

  if (isAuthenticated ==undefined) {
    alert("Please login to Access Home page")
      router.navigate(['/login']);
      return false;
      
  }
  return true;
}
