const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const main = document.querySelector(".main")
const books = document.querySelector(".books")
const form = document.createElement("form")

const titleLabel = document.createElement("label")
const authorLabel = document.createElement("label")

const titleInput = document.createElement("input")
const authorInput = document.createElement("input")

const pageLabel =  document.createElement("label")
const pageInput = document.createElement("input")

const readLabel = document.createElement("label")
const readInput = document.createElement("input")


const submit = document.createElement("button")


titleLabel.textContent = "Book title"
titleLabel.setAttribute('for', 'title')
titleInput.setAttribute('type', 'text')
titleInput.setAttribute('id', 'title')

authorLabel.textContent = "Author"
authorLabel.setAttribute('for', 'author')
authorInput.setAttribute('type', 'text')
authorInput.setAttribute('id', 'author')

pageLabel.textContent = "Page number"
pageLabel.setAttribute('for', 'pages')
pageInput.setAttribute('type', 'text')
pageInput.setAttribute('id', 'pages')

readLabel.textContent = "Have you read it?"
readLabel.setAttribute('for', 'read')
readInput.setAttribute('type', 'checkbox')
readInput.setAttribute('id', 'read')

submit.textContent = "Add book"
submit.setAttribute("type", "submit")

const newbook = document.querySelector(".add-button")

function displayBooks(){
    books.innerHTML = ""; // Limpa o conteúdo existente

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = book.title;

        const authorDiv = document.createElement("div");
        authorDiv.classList.add("author");
        authorDiv.textContent = book.author;

        const pagesDiv = document.createElement("div");
        pagesDiv.classList.add("pages");
        pagesDiv.textContent = `${book.pages} pages`;

        const readButton = document.createElement("button");
        readButton.classList.add("read");
        readButton.textContent = book.read ? "Read" : "Not Read";
        readButton.style.backgroundColor = book.read ? "#2a9d8f" : "#e76f51";
        let isRead = book.read
        readButton.addEventListener('click', () => {
            isRead = !isRead
            readButton.style.backgroundColor = isRead ? "#2a9d8f" : "#e76f51";
            readButton.textContent = isRead ? "Read" : "Not read";
});
        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(pagesDiv);
        card.appendChild(readButton);

        // Adiciona o card ao container de livros
        books.appendChild(card);
    })
    };

newbook.addEventListener('click' , () => {
    form.innerHTML = "";

    form.appendChild(titleLabel)
    form.appendChild(titleInput)

    form.appendChild(authorLabel)
    form.appendChild(authorInput)

    form.appendChild(pageLabel)
    form.appendChild(pageInput)

    form.appendChild(readLabel)
    form.appendChild(readInput)

    form.appendChild(submit)

    form.setAttribute("style", "display: flex; gap: 20px")

    main.appendChild(form)
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = titleInput.value
    const author = authorInput.value
    const pages = pageInput.value
    const read = readInput.checked
    
    const book = new Book(title, author, pages, read)
    console.log(book)
    addBookToLibrary(book)
    console.log(myLibrary)
    displayBooks();
    form.reset()
    main.removeChild(form)
})
