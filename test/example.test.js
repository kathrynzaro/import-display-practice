// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderBook, renderStop } from '../utils.js';
import { books } from '../books.js';
import { stops } from '../roadtrip.js';

const test = QUnit.test;

test('test book render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="book"><h1>Blood Meridian</h1><img src="./assets/bloodmeridian.png"><p>Blood Meridian was written by Cormac McCarthy and published in 1985.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBook(books[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test stop render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="stop"><h1>Chapel in the Hills</h1><img src="./assets/chapel.jpg"><p>On their cross country road trip... Kat, Joe, and Renly stopped at Chapel in the Hills in South Dakota to attempt to get married.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderStop(stops[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
