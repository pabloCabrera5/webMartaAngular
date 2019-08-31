import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  child;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.child = data.child
    });
  }

}
