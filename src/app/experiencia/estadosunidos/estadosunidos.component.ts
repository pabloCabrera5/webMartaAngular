import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadosunidos',
  templateUrl: './estadosunidos.component.html',
  styleUrls: ['./estadosunidos.component.css']
})
export class EstadosunidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imagesSources = [
    //'../../../assets/eeuu/foto1.PNG',
    '../../../assets/eeuu/foto2.PNG',
    '../../../assets/eeuu/foto3.PNG',
    '../../../assets/eeuu/foto4.PNG',
    '../../../assets/eeuu/foto5.PNG',
  ]

}
