import { useState } from "react";
import "./styles.css";

var BookDictionary = {
  Finance: [
    ["RICH DAD POOR DAD", "4/5"],
    ["The Intelligent Investor", "4/5"],
    ["THINK and GROW RICH!", "4.5/5"]
  ],
  Tech: [
    ["WHAT TECHNOLOGY WANTS", "4.5/5"],
    ["THE FUTURE IS FASTER THAN YOU THINK", "4/5"],
    ["THE MASTER SWITCH", "5/5"]
  ],
  Sports: [
    ["The DHONI Touch", "5/5"],
    ["Believe: What life and cricket taught me", "4.5/5"]
  ]
};

var booklist = Object.keys(BookDictionary);
console.log(booklist);

export default function App() {
  var sublist = BookDictionary["Finance"];
  var [outputlist, setoutputlist] = useState(sublist);

  function bookClickHandler(book) {
    var sublist = BookDictionary[book];
    setoutputlist(sublist);
    console.log(sublist);
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span> 📚 </span>
          Book Recommendation App
        </h1>
      </header>

      <main>
        <p> Checkout my favorite books. Select a genre to get started.</p>{" "}
        <div className="genreList">
          {booklist.map((book) => {
            return <span onClick={() => bookClickHandler(book)}>{book}</span>;
          })}
        </div>
        <hr />
        <div className="showBook">
          <ul>
            {Array.from(outputlist).map((book) => {
              return (
                <li>
                  {book[0]}
                  <br />

                  <span className="rating">Rating: {book[1]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
