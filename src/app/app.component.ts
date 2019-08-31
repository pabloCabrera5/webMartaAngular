import { Component, Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component'
import { Router } from '@angular/router';

export class Menu {
  title: string;
  url: string;
  submenu?: Menu[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private router: Router) {

  }
  title = 'MartasWeb';
  menuOptions: Menu[] = [
    { title: 'INICIO', url: '/inicio' },
    { title: 'SOBRE MI', url: '/sobremi' },
    {
      title: 'EDUCACIÓN', url: '/educacion', submenu: [
        { title: 'Literatura Infantil', url: '/educacion/litinfantil' },
        { title: 'Materiales', url: '/educacion/materiales' },
      ]
    },
    { title: 'EXPERIENCIA', url: '/experiencia' },
    { title: 'COMPETENCIAS-HABILIDADES', url: '/competenciashabilidades' },
  ]
  activeOption: string = 'INICIO';
  burguer: boolean = false;
  newContact = false; // variable to know if we click again in the contact section
  isNotPC: boolean = false;
  child = false;



  /*ngOnInit() {
    if (window.innerWidth <= 800) {
      this.burguer = true;
    }
    window.onresize = this.resize;
  }*/

  /*resize() {
    console.log(window.innerWidth, this.burguer)
    if (window.innerWidth <= 800) {
      this.burguer = true;
    } else {
      this.burguer = false;
    }
  }*/

  burguerMenu() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar topnav") {
      x.className += " responsive";
    } else {
      x.className = "navbar topnav";
    }
  }

  optionClicked(option) {
    this.child = false;
    //if(option != 'INICIO')
    //we do this to control when clicked the menu option inicio, hide/show the responsive menu
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar topnav responsive")
      this.burguerMenu();
    this.activeOption = option;
    //this.router.navigate([`/${option}`]); //other way to route the link to another page
    //this.router.navigateByUrl(option);
  }

}
