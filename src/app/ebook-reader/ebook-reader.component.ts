import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amt-ebook-reader',
  templateUrl: './ebook-reader.component.html',
  styleUrls: ['./ebook-reader.component.css']
})
export class EbookReaderComponent implements OnInit {

  chapters = [
    {number: 1, name: 'Introduction'},
    {number: 2, name: 'First part'},
    {number: 3, name: 'Second part'},
    {number: 4, name: 'Conclusion'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
