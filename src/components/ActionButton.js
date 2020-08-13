import React from "react";

const ActionButton = ({ totalPage,setPageCurrently,pageCurrently }) => {
//   const [pageCurrently, setPageCurrently] = useState(1);

  const previous = () => {
    const newPageCurrently = pageCurrently - 1;

    if (newPageCurrently === 0) return;

    setPageCurrently(newPageCurrently);
  };

  const next = () => {
    const newPageCurrently = pageCurrently + 1;
    setPageCurrently(newPageCurrently);

    if (newPageCurrently > totalPage) return;
  };

  return (
    <div className="flex justify-center items-center pb-10">
      {pageCurrently <= 1 ? null : (
        <button
          onClick={previous}
          className=" bg-gray-800 text-lg w-32 text-white px-3 py-2  font-semibold rounded uppercase hover:bg-gray-700"
        >
          <span className="px-1">&laquo;</span>Previous
        </button>
      )}

      {pageCurrently === totalPage ? null : (
        <button
          onClick={next}
          className="ml-2 bg-gray-800 text-lg text-white w-32 px-3 py-2 font-semibold rounded uppercase hover:bg-gray-700"
        >
          Next<span className="px-1">&raquo;</span>
        </button>
      )}
    </div>
  );
};

export default ActionButton;
