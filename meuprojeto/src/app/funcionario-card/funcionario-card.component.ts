import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-block{
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() funcionarioCard: any;

  getEstilosCartao() {
    return{
      'border-width.px': this.funcionarioCard.id,
      backgroundColor: this.funcionarioCard.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

  // getListaClassesCss(){
  //  return ['badge', 'badge-primary'];
  // }

  isAdmin(){
    return this.funcionarioCard.nome.startsWith('T');
  }

}
