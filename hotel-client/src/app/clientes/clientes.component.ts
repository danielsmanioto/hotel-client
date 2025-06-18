import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'hotel-client',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let c of clientes">{{ c.nome }}</li>
    </ul>
    <button (click)="adicionar()">Adicionar Cliente</button>
  `
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.listar().subscribe(data => this.clientes = data);
  }

  adicionar() {
    this.clienteService.criar({ nome: 'Novo Cliente' })
      .subscribe(c => this.clientes.push(c));
  }
}
