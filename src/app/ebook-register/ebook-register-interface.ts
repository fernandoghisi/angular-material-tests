export interface Ebook {
    name: string,
    author: string,
    categories: string[],
    numberOfPages: number,
    format: string,
    opinion: {
      rating: number,
      comment: string
    }
}
