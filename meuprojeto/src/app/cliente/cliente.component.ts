import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  profissoes = ['Programador', 'Empresário', 'Outra'];
  cliente = new Cliente();

  salvar(form: NgForm) {
    this.cliente.nome = form.value.primeiroNome;
    this.cliente.email = form.value.emailAddress;
    this.cliente.profissao = form.value.profissao;
    console.log(form.value);
    console.log(this.cliente);
    form.reset({profissao: ''});
  }

}
