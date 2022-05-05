// import functions and grab DOM elements
import { books } from './books.js';
import { renderBook } from './utils.js';

const bookList = document.getElementById('books');
// let state

for (let book of books) {
    const bookDiv = renderBook(book);
    bookList.append(bookDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
