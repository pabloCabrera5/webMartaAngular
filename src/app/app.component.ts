import { Component, Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component'
import { Router } from '@angular/router';

export class Menu {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private router : Router){

  }
  title = 'MartasWeb';
  menuOptions: Menu[] = [
    { title: 'INICIO', url: '/inicio' },
    { title: 'SOBRE MI', url: '/sobremi' },
    { title: 'EDUCACIÓN', url: '/educacion' },
    { title: 'EXPERIENCIA', url: '/experiencia' },
    { title: 'COMPETENCIAS-HABILIDADES', url: '/competenciashabilidades' },
  ]
  activeOption: string = 'INICIO';
  burguer: boolean = false;
  newContact = false; // variable to know if we click again in the contact section

  

  ngOnInit() {
    if (window.innerWidth <= 800) {
      this.burguer = true;
    }
    window.onresize = this.resize;
  }

  resize() {
    console.log(window.innerWidth, this.burguer)
    if (window.innerWidth <= 800) {
      this.burguer = true;
    }else{
      this.burguer = false;
    }
  }

  optionClicked(option) {
    this.activeOption = option;
    //this.router.navigate([`/${option}`]); //other way to route the link to another page
    //this.router.navigateByUrl(option);
  }  

}
