import React from "react";
import "./Movies.css";

export default function Movies() {
  return (
    <main className="movies">
      <h1 className="movies__title">Some great movies</h1>
      <section className="movies__movies">
        <p>here comes the movie card</p>
        {/* {Movies.map((movie, index) => {
          return;
        })} */}
      </section>
    </main>
  );
}
