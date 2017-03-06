import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'amt-ebook-register',
  templateUrl: './ebook-register.component.html',
  styleUrls: ['./ebook-register.component.css']
})
export class EbookRegisterComponent implements OnInit {

  inputText: string = "";
  options = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 4, name: 'Option 4'},
    {id: 5, name: 'Option 5'}
  ];
  categories = ['Action', 'Adventure', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science fiction'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
