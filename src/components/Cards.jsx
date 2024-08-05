import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center gap-10 px-20">
      <div className="cardContainer w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-[50vh] bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-32"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy; 2024
          </button>
        </div>
      </div>
      <div className="cardContainer w-1/2 flex gap-10">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-[50vh] bg-[#102000]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-32"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy; 2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-[50vh] bg-[#102000]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-32"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy; 2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
