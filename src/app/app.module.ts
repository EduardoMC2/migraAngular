import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { MisInteresesComponent } from './componentes/mis-intereses/mis-intereses.component';
import { DisponibilidadComponent } from './componentes/disponibilidad/disponibilidad.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentacionComponent,
    MisInteresesComponent,
    DisponibilidadComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
