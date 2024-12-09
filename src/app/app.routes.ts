import { Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { securityGuard } from './security.guard';



export const routes: Routes = [
    {
        "path":'',
        "component":AppComponent,
    },
    {
        "path":'user',
        "component":UserComponent,
    },
    {
        "path":'login',
        "component":LoginComponent
    },
    {
        "path":'Modules',
        "component":ModulesComponent,
    },
    {
        "path":'register',
        "component":RegisterComponent,
    },
    {
        "path":'home',
        "component":HomeComponent, 
        canActivate:[securityGuard],
    },


];

