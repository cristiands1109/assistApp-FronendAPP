import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
    
  }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      // return this.usuarioService.validarToken()
      //   .pipe(
      //     tap( estaAutenticado =>  {
      //       if ( !estaAutenticado ) {
      //         this.router.navigate(['/home']);
      //       }
      //     })
      //   );

      return this.authService.validarToken()
      .pipe(
        tap(autenticado => {
          // console.log(autenticado);
          if(!autenticado) {
            this.router.navigateByUrl('/mobile');
          }
        })
      );
      
      
  }
}
