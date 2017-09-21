import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  ultimoId = 0;

  nome = 'Alvimar Henriques';
  dataAtual = new Date();
  preco = 12855.32;
  troco = 0.57392;

  telefone = '';
  adicionado = false;
  // tslint:disable-next-line:no-output-rename
  @Output('') funcionarioAdicionado = new EventEmitter();

  adicionar(nome: string) {
    this.nome = nome;
    this.adicionado = true;

     const funcionario = {
        id: ++this.ultimoId,
        nome: this.nome
      };

      this.funcionarioAdicionado.emit(funcionario);
  }

}
