import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// api link from https://fakestoreapi.com/
const apiUrl = "https://fakestoreapi.com/products";

function App() {
  // Method 1 \\
  // fetch method: The fetch() method in JavaScript is used to request to the server and load
  // the information in the webpages. The request can be of any APIs that return the data of the
  // format JSON or XML. This is an in-built browser method and returns a promise.

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
  //     response.json().then((json) => console.log(json))
  //   );
  // }, []);

  // Method 2 \\
  // axios package: Axios is a promise-based HTTP client designed for Node.js and browsers.
  // With Axios, we can easily send asynchronous HTTP requests to REST APIs and perform create, read,
  // update and delete operations.

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => console.log(response.data));
  // }, []);

  // Method 3 \\
  // Async-Await: This is the preferred way of fetching the data from an API.

  // Async: It simply allows us to write promise-based code as if it was synchronous
  // and it checks that we are not breaking the execution thread. It operates asynchronously
  // via the event loop. Async functions will always return a value.

  // Await: Await function is used to wait for the promise.
  // It could be used within the async block only. It makes the code wait until the promise
  // returns a result. It is used to prevent call-back hell and we can use it with Axios rather
  // than the fetch method as Axios makes our code look cleaner and also makes it shorter
  // (as we don’t need to convert to JSON format).

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // can't use async directly in useEffect. Declare a separate function then call it here
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(apiUrl);
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    setProducts(jsonData);
  };

  fetchData();

  return (
    <div>
      <h1 className="intro">Fakestore API test</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="card">
              <div className="card-image">
                <img src={product.image} alt="#" />
              </div>
              <div className="card-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// Synchronous APIs \\
// They use traditional protocols such as REST, SOAP, etc.
// These APIs handle requests synchronously, and users have to wait for the response from the API
// before they can continue in the application. They can not process two requests at the same time.
// Therefore, they can bottleneck performance if a request takes too long.

// Asynchronous APIs \\
// Asynchronous APIs can process multiple requests at the same time. Due to this mechanism, the APIs
// allow relatively time-consuming requests to be processed in the background while more minor requests
// are serviced right away.
