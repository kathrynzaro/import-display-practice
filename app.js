// import functions and grab DOM elements
import { books } from './books.js';
import { stops } from './roadtrip.js';
import { renderBook, renderStop } from './utils.js';

const bookList = document.getElementById('books');
const stopList = document.getElementById('roadtrip');

// let state

for (let book of books) {
    const bookDiv = renderBook(book);
    bookList.append(bookDiv);
}

for (let stop of stops) {
    const stopDiv = renderStop(stop);
    stopList.append(stopDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


