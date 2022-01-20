import {NgModule} from '@angular/core';//Importamos NgModule
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        /**Configuración de la ruta principale de la aplicación */
        path: '',//En este caso podemos poner la ruta vacua es decir que sea http://localhost:4200/(y aca vacio)
        component: PorPaisComponent,//Que componente quiero mostrar, el cual tiene que estar importado en el app.component.ts
        // y exportado en su respectivo módulo en este caso en país
        pathMatch: 'full'//Para que no coincida con otras rutas que empiecen con el string vacio
    },
    {
        path: 'region',
        component: PorRegionComponent, 
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        /**Para configurar la ruta de por país, necesitamos algo asi como la ruta seguida por un parámetro, p.o, el id del país */
        //path: 'pais/cri',//Asi estaríamos harcodeando el cri, si queremos que sea dinámico, lo haremos con :
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        /**Esta sería la ruta si alguien pone una que no exista, se puede hacer hacia una 404 tambien */
        path: '**',
        redirectTo: ''//Para redirigir a la ruta principal
    }
    

    

];

@NgModule({//Utilizamos el decorador
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}//Exportamos la clase