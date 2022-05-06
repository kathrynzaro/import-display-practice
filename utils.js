export function renderBook(book) {
    const div = document.createElement('div');
    div.classList.add('book');

    const h1 = document.createElement('h1');
    h1.textContent = book.title;

    const img = document.createElement('img');
    img.src = book.image;

    const p = document.createElement('p');
    p.textContent = `${book.title} was written by ${book.author} and published in ${book.yearPublished}.`;

    div.append(h1, img, p);
    return div;
}

export function renderStop(stop) {
    const div = document.createElement('div');
    div.classList.add('stop');

    const h1 = document.createElement('h1');
    h1.textContent = stop.what;

    const img = document.createElement('img');
    img.src = stop.image;

    const p = document.createElement('p');
    p.textContent = `On their cross country road trip... Kat, Joe, and Renly stopped at ${stop.what} in ${stop.where} to ${stop.why}.`;

    div.append(h1, img, p);
    return div;
}

export function renderFood(food) {
    const div = document.createElement('div');
    div.classList.add('food');

    const h1 = document.createElement('h1');
    h1.textContent = food.name;

    const img = document.createElement('img');
    img.src = food.image;

    const p = document.createElement('p');
    p.textContent = `${food.name} is perfect for when I feel ${food.whenIFeel} because it has a ${food.blankLevel} level of 10.`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Bare Minimum Ingredients';

    const ul = document.createElement('ul');
    for (let ingredient of food.ingredients) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.append(li);
    }

    div.append(h1, img, p, h2, ul);
    return div;
}