import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public CEP:number = 32657403
  public URL:string = 'https://viacep.com.br/ws/'

  constructor(private http:HttpClient) { }

  getAPi():Promise<any> {
    return this.http.get(`${this.URL}${this.CEP}/json/`)
    .toPromise()
    .then((data) => data)
  } 

  getCep(cepAtual:any) {
   
     this.CEP = cepAtual
  }
}
