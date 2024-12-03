export const BookList = () => {
  const books = [
    {
      id: 1,
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K. Rowling",
      year: 2007,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ];

 

  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="card mb-2 mt-2 col-3 mx-auto">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {book.year}
            </h6>
            <p className="card-text">{book.author}</p>
          </div>
        </div>
      ))}
    </>
  );
};
