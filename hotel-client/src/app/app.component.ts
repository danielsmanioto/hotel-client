// src/app/app.component.ts
import { Component } from '@angular/core';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClientesComponent, HttpClientModule],
  template: `<hotel-client></hotel-client>`
})
export class AppComponent {}
