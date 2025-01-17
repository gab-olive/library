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

const readtrueDiv = document.createElement("div")
const readtrueLabel = document.createElement("label")
const readtrueInput = document.createElement("input")

const readfalseDiv = document.createElement("div")
const readfalseLabel = document.createElement("label")
const readfalseInput = document.createElement("input")

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

readtrueLabel.textContent = "Read"
readtrueLabel.setAttribute('for', 'read')
readtrueInput.setAttribute('type', 'radio')
readtrueInput.setAttribute('id', 'read')
readtrueInput.setAttribute('value', 'yes')
readtrueInput.setAttribute('name' , 'read')

readtrueDiv.appendChild(readtrueLabel)
readtrueDiv.appendChild(readtrueInput)
readtrueDiv.setAttribute("style", "display: flex; gap: 20px")

readfalseLabel.textContent = "Not read"
readfalseLabel.setAttribute('for', 'read')
readfalseInput.setAttribute('type', 'radio')
readfalseInput.setAttribute('id', 'read')
readfalseInput.setAttribute('value', 'no')
readfalseInput.setAttribute('name' , 'read')
readfalseDiv.setAttribute("style", "display: flex; gap: 20px")


readfalseDiv.appendChild(readfalseLabel)
readfalseDiv.appendChild(readfalseInput)

submit.textContent = "Add book"
submit.setAttribute("type", "submit")

const newbook = document.querySelector(".add-button")

function displayBooks(){
    
    books.innerHTML = ""

    myLibrary.forEach((book) => {
        const card = document.createElement("div")
        card.classList.add("card")

        const titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        titleDiv.textContent = book.title

        const authorDiv = document.createElement("div")
        authorDiv.classList.add("author")
        authorDiv.textContent = book.author
        
        const pagesDiv = document.createElement("div")
        pagesDiv.classList.add("pages")
        pagesDiv.textContent = book.pages

        const readDiv = document.createElement("div")
        readDiv.classList.add("read")
        readDiv.textContent = book.read

        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(pagesDiv);
        card.appendChild(readDiv);

        // append card to books container
        books.appendChild(card);
    })
    
}

newbook.addEventListener('click' , () => {
    form.innerHTML = "";

    form.appendChild(titleLabel)
    form.appendChild(titleInput)

    form.appendChild(authorLabel)
    form.appendChild(authorInput)

    form.appendChild(pageLabel)
    form.appendChild(pageInput)

    form.appendChild(readtrueDiv)
    form.appendChild(readfalseDiv)

    form.appendChild(submit)

    form.setAttribute("style", "display: flex; gap: 20px")

    main.appendChild(form)
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = titleInput.value
    const author = authorInput.value
    const pages = pageInput.value
    const read = readtrueInput.value
    
    const book = new Book(title, author, pages, read)
    console.log(book)
    addBookToLibrary(book)
    console.log(myLibrary)
    displayBooks();
    form.reset()
    main.removeChild(form)
    
})

