import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'wedding',
    },
    {
        path: 'wedding',
        loadComponent: () =>
            import('./my-wedding/my-wedding.component').then(
                (cmp) => cmp.MyWeddingComponent
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
