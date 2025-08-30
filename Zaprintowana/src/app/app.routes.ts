import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent  : () => {
        return import('./pickbar/pickbar').then( m => m.Pickbar );
    },
},
{
    path: 'todos',
    loadComponent  : () => {
        return import('./todos/todos').then( m => m.Todos );
}

}]; 
