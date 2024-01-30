// Sample data (you can replace it with your own data)
let books = [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
    { title: "Book 3", author: "Author 3" }
];

// Function to display books on the page
function displayBooks() {
    const bookListContainer = document.getElementById("bookList");
    bookListContainer.innerHTML = ""; // Clear previous content

    books.forEach((book, index) => {
        const bookEntry = document.createElement("div");
        bookEntry.className = "bookEntry";
        bookEntry.innerHTML = `<strong>${book.title}</strong> by ${book.author}     <button onclick="removeBook(${index})">Remove</button>`;
        bookListContainer.appendChild(bookEntry);
    });
}

// Function to add a new book entry
function addBook() {
    const newTitle = prompt("Enter the title of the book:");
    const newAuthor = prompt("Enter the author of the book:");

    if (newTitle && newAuthor) {
        const newBook = { title: newTitle, author: newAuthor };
        books.push(newBook);
        displayBooks(); // Update the displayed book list
    }
}

// Function to remove a book entry
function removeBook(index) {
    books.splice(index, 1);
    displayBooks(); // Update the displayed book list
}

// Initial display of books on page load
displayBooks();