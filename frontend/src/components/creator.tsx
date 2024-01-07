import React from "react";

interface CreatorsFeatureProps {
  title: string;
  subtitle: string;
  category: string;
  link: string;
  image: string;
}

export const CreatorsFeature: React.FC<CreatorsFeatureProps> = ({
  title,
  subtitle,
  category,
  link,
  image,
}) => (
  <a
    href={link}
    className="auth0-feature grid grid-cols-3"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="col-span-2 md:col-span-2">
      <h3 className="auth0-feature__headline">{title}</h3>
      <p className="auth0-feature__description">{subtitle}</p>
      <p className="auth0-feature__description mt-10">{category}</p>
    </div>
    <div className="col-span-1 md:col-span-1">
      <img
        className="auth0-feature__icon w-full rounded-xl"
        src={image}
        alt="external link icon"
      />
    </div>
  </a>
);
