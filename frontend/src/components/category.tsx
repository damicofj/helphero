import React from "react";

interface CategoryFeatureProps {
  title: string;
  link: string;
}

export const CategoryFeature: React.FC<CategoryFeatureProps> = ({
  title,
  link,
}) => (
  <a
    href={link}
    className="auth0-feature mx-2 mb-2 border border-gray-200 rounded-xl p-5 items-center justify-center text-center hover:bg-gray-100 transition duration-150 ease-in-out"
    target="_blank"
    rel="noopener noreferrer"
    style={{ width: "auto", color: "#FFF", backgroundColor: "#000",  }}
  >
    {title}
  </a>
);
