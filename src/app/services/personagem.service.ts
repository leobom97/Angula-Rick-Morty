import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  personagens = []

  constructor(private httpClient: HttpClient) { 
    this.carregarPersonagem()
  }

  async carregarPersonagem(){
    const requisicao = await this.httpClient.get<any>('https://rickandmortyapi.com/api/character').toPromise()

    this.personagens = requisicao.results

    console.log(requisicao)
  }

}
