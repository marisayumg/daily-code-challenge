import React, { useState, useEffect } from "react";

const App = () => {
  // store the API response
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // can't write async function directly on useEffect function
    const fetchData = async () => {
      const response = await fetch("https://book-club-json.herokuapp.com/books")
        .then((response) => {
          console.log("This is our response", response);
          return response.json();
        })
        .then((books) => {
          console.log("This is our jsonified response", books);
          setBooks(books);
        });
    };

    fetchData();
  }, []);

  return <div>Hello world</div>;
};

export default App;
