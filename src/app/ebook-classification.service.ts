export class EbookClassificationService {

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

}
