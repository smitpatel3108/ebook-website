import React from "react";
import react from '../Assets/download.jpg'
import react1 from '../Assets/download1.jpg'
import react2 from '../Assets/images.jpg'


const books = [
  { title: "Book 1", author: "Author 1", cover:react,},
  { title: "Book 2", author: "Author 2", cover:react1 },
  { title: "Book 3", author: "Author 3", cover:react2 },
];

const BooksSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available E-Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <img src={book.cover} alt={book.title} className="h-64 w-full object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
