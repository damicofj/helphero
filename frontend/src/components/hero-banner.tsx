import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-black">
      {/* <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div> */}
      <h1 className="hero-banner__headline">HelpHero</h1>
      <p className="hero-banner__description">
        Find the best projects to support on <strong>HelpHero</strong>.
      </p>
      {/* <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication/typescript-react-router-6"
        className="button button--secondary"
      >
        Search by Location →
      </a> */}
      {/* search bar */}
      <div className="flex items-center w-2/4 mx-auto">
        <input
          className="py-4 px-5 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 w-full text-xl h-15"
          type="text"
          placeholder="Search by Project Name or Creator"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring focus:border-blue-300 mr-1 h-15">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="30"
            viewBox="0 0 50 50"
            style={{ fill: "#FFF" }}
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </button>
        {/* location search */}

        <p style={{color:"white", fontSize:"30px", marginLeft:"10px", marginRight:"10px"}}>|</p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 h-16">
          by Location
        </button>
      </div>
    </div>
  );
};
