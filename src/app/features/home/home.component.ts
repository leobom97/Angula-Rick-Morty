import { Component, OnInit } from '@angular/core';
import { PersonagemService } from 'src/app/services/personagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  constructor(public personagemService: PersonagemService) { }

  ngOnInit(): void {
  }

}
