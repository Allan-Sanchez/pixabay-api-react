import React, { useState,useEffect } from "react";
import CardImage from "./components/CardImage";
import FormSearch from "./components/FormSearch";

function App() {

  const [search,setSearch] = useState('');
  const [searchImage,setSearchImage] = useState([]);

  useEffect(() => {
    const searchAPI = async () =>{

      if(search === '') return;
  
      const PAGINATION = 30;
      const APIKEY = '17848674-2e6c8733acacbec74800b79e5';
      const URL = `https://pixabay.com/api/?key=${APIKEY}&q=${search}&per_page=${PAGINATION}`;
    
      const request = await fetch(URL);
      const response = await request.json();

      setSearchImage(response.hits)
      // console.log(response.hits);
    }

    searchAPI();
  }, [search])
  
  return (
    <div className="bg-blue-900 w-full min-h-screen">
      <h1 className="text-center text-4xl pt-10 pb-5 text-white font-bold">
        Search Pixabay
      </h1>

      <FormSearch setSearch={setSearch}/>
      

      <div className="mt-10 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
        {searchImage.map( item =>( 
          // console.log(item)
          <CardImage key={item.id} descriptionImage={item}/>
          ))}
      </div>
    </div>
  );
}

export default App;
