import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {

  heroForm: FormGroup;

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      alterEgo: '',
      power: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
