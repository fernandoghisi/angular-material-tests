import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ebook } from './ebook-register-interface';

@Component({
  selector: 'amt-ebook-register',
  templateUrl: './ebook-register.component.html',
  styleUrls: ['./ebook-register.component.css']
})
export class EbookRegisterComponent implements OnInit {
  ebook: Ebook = {
    name: '',
    author: '',
    categories: [],
    numberOfPages: 0,
    format: '',
    opinion: {
      rating: 0,
      comment: ''
    }
  };

  categories = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Adventure'},
    {id: 3, name: 'Drama'},
    {id: 4, name: 'Fantasy'},
    {id: 5, name: 'Horror'},
    {id: 6, name: 'Mystery'},
    {id: 7, name: 'Romance'},
    {id: 8, name: 'Science fiction'},
  ];

  formats = [{code: 1, description: 'Paper'}, {code: 2, description: 'Ebook'}, {code: 3, description: 'Both'}];
  options = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 4, name: 'Option 4'},
    {id: 5, name: 'Option 5'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    //form.value.name, form.value.author, form.value.numberOfPages, form.format
  }

}
