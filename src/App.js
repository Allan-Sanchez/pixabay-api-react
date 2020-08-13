import React, { useState, useEffect } from "react";
import CardImage from "./components/CardImage";
import FormSearch from "./components/FormSearch";
import ActionButton from "./components/ActionButton"; 

function App() {
  const [search, setSearch] = useState("");
  const [searchImage, setSearchImage] = useState([]);

  const [totalPage, setTotalPage] = useState(1);
  const [currentlyPage, setCurrentlyPage] = useState(1);

  useEffect(() => {
    const searchAPI = async () => {
      if (search === "") return;

      const PAGINATION = 12;
      const APIKEY = "17848674-2e6c8733acacbec74800b79e5";
      const URL = `https://pixabay.com/api/?key=${APIKEY}&q=${search}&per_page=${PAGINATION}&page=${currentlyPage}`;

      const request = await fetch(URL);
      const response = await request.json();

      setSearchImage(response.hits);

      const calculateTotalPage = Math.ceil(response.totalHits / PAGINATION);
      setTotalPage(calculateTotalPage);

      const scrollForm = document.querySelector('.form-pixabay');
      scrollForm.scrollIntoView({behavior : 'smooth'})
    };

    searchAPI();
  }, [search,currentlyPage]);

  return (
    <div className="bg-blue-900 w-full min-h-screen">
      <h1 className="text-center text-4xl pt-10 pb-5 text-white font-bold">
        Search Pixabay
      </h1>

      <FormSearch setSearch={setSearch} />

      <div className="mt-10 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
        {searchImage.map((item) => (
          <CardImage key={item.id} descriptionImage={item} />
        ))}
      </div>

          <ActionButton totalPage={totalPage} setPageCurrently={setCurrentlyPage} pageCurrently={currentlyPage}/>
    </div>
  );
}

export default App;
