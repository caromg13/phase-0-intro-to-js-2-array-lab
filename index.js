// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];


//destructivelyAppendCat(name)

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  
function destructivelyAppendCat() {
    cats.push('Ralph');
}

//destructivelyPrependCat(name)

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyPrependCat() {
  cats.unshift('Bob');
}


//destructivelyRemoveLastCat

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});



function destructivelyRemoveLastCat() {
  cats.pop();
}

//'destructivelyRemoveFirstCat()

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});



function destructivelyRemoveFirstCat() {
  cats.shift();
}


//'appendCat(name)'

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});



function appendCat() {
  cats.slice(...cats,'Broom');
}

appendCat (...cats, 'Broom');










//'prependCat(name)'

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});



//'removeLastCat()'

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});



//'removeFirstCat()'

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

