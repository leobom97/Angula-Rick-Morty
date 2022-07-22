import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent{

  @Input()
  personagem: any

  @Input()
  numero: any

  pegarImagemPersonagem(){
    const numeroFormatado = this.numero;

    return `https://rickandmortyapi.com/api/character/avatar/${numeroFormatado}.jpeg`
  }
}
