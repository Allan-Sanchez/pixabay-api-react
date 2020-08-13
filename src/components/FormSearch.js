import React, { useState, Fragment } from "react";
import Error from "./Error";


const FormSearch = ({setSearch}) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  const searchImages = (e) => {
    e.preventDefault();

    if (word.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(word);
  };
  return (
    <Fragment>
      {error ? (
        <Error message="you forgot to write what you want to search." />
      ) : null}

      <div className="form-pixabay flex justify-center item-center">
        <form
          onSubmit={searchImages}
          className="flex justify-content item-center md:w-1/3 sm:w-full px-10"
        >
          <div className="w-2/3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="type your search"
              required
              autoFocus
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
          <div className="ml-2 w-1/3">
            <button className="bg-blue-400 py-2 px-10 rounded text-white font-bold">
              Seach
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormSearch;
