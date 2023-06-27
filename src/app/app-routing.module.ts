import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { MainComponent } from './componentes/main/main.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes : Routes = [
  { path: 'main', component: MainComponent},
  { path: 'tiempo', component: RegistroComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', component: MainComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
