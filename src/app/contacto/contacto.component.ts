import { Component, OnInit, Output, Input } from '@angular/core';
//import { RouteParams } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

import { ServerService } from "../server.service";

export class Contacto {
  constructor(
    public name: string,
    public email: string,
    public telefone: number,
    public asunto: string,
    public message: string,
  ) { }
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  constructor(private server: ServerService, private activeRoute: ActivatedRoute) {
    //this.pepe = activeRoute.snapshot.data[0]['newContact'];

  }

  submitted = false;
  model = new Contacto('', '', null, '', '');


  ngOnInit() {
    this.model = new Contacto('', '', null, '', '');
    //const queryParams = this.activeRoute.snapshot.queryParams;
  }


  onSubmit() {
    this.server.sendEmail(this.model).subscribe(data => {
      if (data['answer'] === 'ENVIADO') {
        alert('Email enviado correctamente')
        location.reload();
      }
      else {
        alert('Ha habido un error al enviar un email, lo lamentamos')
      }
    });

    //this.model = new Contacto('', '', null, '', '');
    //this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  sendEmail() {
    //this.model = new Contacto('','', 6 ,'','');
    this.submitted = true;
  }





}
