import React from "react";

const CardImage = ({descriptionImage}) => {
   const {largeImageURL,comments,likes} =descriptionImage;
  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto pb-24">
      <div
        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      >
       <a href={largeImageURL} target="_blank" rel="noopener noreferrer">
       <img src={largeImageURL} alt=""/>
       </a>
      </div>

      <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          {descriptionImage.user}
        </h3>

        <div className="flex items-center justify-between py-2 px-3 bg-gray-200">
          <span className="text-gray-800 font-bold ">Likes <span className="text-blue-700">{likes}</span></span>
          <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
          comments <span className="text-red-300">{comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
