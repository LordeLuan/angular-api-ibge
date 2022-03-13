import { MunicipiosModel } from './../../models/municipios.model';
import { ApiIbgeService } from './../../services/api-ibge.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cidades$ = new Observable<MunicipiosModel[]>();

  constructor(private ibgeService: ApiIbgeService) { }

  ngOnInit(): void {
    // this.loadMunicipiosByUF('SC');
  }

  loadMunicipiosByUF(event: any){
    const UF = (event.target as HTMLSelectElement)?.value;
    if(UF){
      this.cidades$ = this.ibgeService.getCidade(UF);
                this.ibgeService
                .getCidade(UF)
                .subscribe(
                (response) => {
                  console.log(response);
                }
              );
            }
          }
}
