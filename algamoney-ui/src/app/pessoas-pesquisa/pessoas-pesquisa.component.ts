import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

    pessoas = [
      { nome: 'Manoel Pinheiro', cidade: 'Belo Horizonte', estado: 'MG',
      ativo: true},
      { nome: 'Sebastião da Silva', cidade: 'Betim', estado: 'MG',
      ativo: false},
      { nome: 'Julia Cardoso', cidade: 'Divinópolis', estado: 'MG',
      ativo: true},
      { nome: 'Luiz Inacio', cidade: 'São Paulo', estado: 'SP',
      ativo: false},
      { nome: 'Maria Lima', cidade: 'Rio de Janeiro', estado: 'RJ',
      ativo: true},
      { nome: 'Laura Costa', cidade: 'Campinas', estado: 'SP',
      ativo: true},
      { nome: 'Neymar Junior', cidade: 'Santos', estado: 'SP',
      ativo: false},
      { nome: 'Thiago Neves', cidade: 'Belo Horizonte', estado: 'MG',
      ativo: true}
   ];

}
