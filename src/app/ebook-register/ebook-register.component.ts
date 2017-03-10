import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ebook } from './ebook-register-interface';

import { EbookClassificationService } from '../ebook-classification.service';

@Component({
  selector: 'amt-ebook-register',
  templateUrl: './ebook-register.component.html',
  styleUrls: ['./ebook-register.component.css'],
  providers: [EbookClassificationService]
})
export class EbookRegisterComponent implements OnInit {
  categories = [];
  formats = [];
  options = [];

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

  constructor(private ebookClassificationService: EbookClassificationService) { }

  ngOnInit() {
    this.categories = this.ebookClassificationService.categories;
    this.formats = this.ebookClassificationService.formats;
    this.options = this.ebookClassificationService.options;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    //form.value.name, form.value.author, form.value.numberOfPages, form.format
  }

}
