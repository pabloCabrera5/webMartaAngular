import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy } from '@angular/core';
import { Menu } from '../app.component'
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,) { }

  child =  false;
  menuOptions: Menu[] = [
    { title: 'ESTADOS UNIDOS', url: '/experiencia/eeuu' },
    { title: 'ERASMUS', url: '/experiencia/erasmus' },
    { title: 'EXPERIENCIA LABORAL', url: '/experiencia/explaboral' },
    { title: 'IMAGENES', url: '/experiencia/images' },
  ]

  ngOnInit() {
    this.child = false;
    this.route.data.subscribe(data => {
      this.child = data.child
    });
  }

  //for navigate
  openCourse(course) {
    this.router.navigateByUrl(`/courses/${course.id}`);
    this.router.navigate(['/courses', course.id]);
  }

  optionClicked(item){
    this.child = true;
    //this.router.navigateByUrl(`${item}`);
  }
}
