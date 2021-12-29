var booksList = JSON.parse(localStorage.getItem("bl")) || [];

if (!localStorage.getItem("bl")) {
  localStorage.setItem("bl", JSON.stringify(booksList));
}

class Books {
  clear() {
    document.getElementById("root").innerHTML = "";
  }
  render() {
    this.clear();
    booksList.forEach((element, i) => {
      var div = document.createElement("div");
      div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${element.image}  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.author}</p>
      <button type="button" class="btn btn-danger" onclick="delet(${i})">delete ${i}</button>
    </div>
  </div>`;
      document.getElementById("root").appendChild(div);
    });
  }

  d(index) {}

  addBook() {
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var image = document.getElementById("image").value;
    if (name === "" || author === "" || image === "") {
      alert("heyy please fill all the inputs");
    } else {
      var book = { name, author, image };
      booksList.push(book);
      var bl = JSON.parse(localStorage.getItem("bl"));

      localStorage.setItem("bl", JSON.stringify(booksList));
      this.render();
      document.getElementById("name").value = "";
      document.getElementById("author").value = "";
      document.getElementById("image").value = "";
    }
  }
}
var a = new Books();
a.render();

document.getElementById("add").addEventListener("click", () => {
  a.addBook();
});

function delet(index) {
  booksList.splice(index, 1);
  localStorage.setItem("bl", JSON.stringify(booksList));
  a.render();
}

// Destructuring with objects

var obj = { name: "halim", lastname: "boussada" };
// OLD WAY
var name = obj.name;
var lastname = obj.lastname;
// NEW WAY
var { name, lastname } = obj;

// Destructuring with Arrays

var arr = [1, 4, 2, 5];
// old way
var uno = arr[0];
var dos = arr[1];
var tres = arr[2];
// new way
var [uno, dos, tres] = arr;

function numbers(array) {
  return array[0];
}
function numbers([first, second]) {
  return first + second;
}
numbers([1, 4, 2]);
// old way
function p(person) {
  return person.name;
}
// new way
function p({ name }) {
  return name;
}

function sayHi(name) {
  return "hello " + name + ", how are you";
}

function sayHi(name) {
  return `hello ${name}, how are you?`;
}

// old way
function whereAreYouFrom(country) {
  var c = country || "USA";
  return `you are from ${c}`;
}
// new way
function whereAreYouFrom(country = "USA") {
  return `you are from ${country}`;
}

function test(a, b, c, d) {
  return [a, b, c, d];
}

// arrow function
function double(number) {
  return number * 2;
}

var double = (number) => {
  return number * 2;
};

var double = (number) => {
  return number * 2;
};

var double = (number) => number * 2;
