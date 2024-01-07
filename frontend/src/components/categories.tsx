import React from "react";
import { CategoryFeature } from "./category";

export const Categories: React.FC = () => {
  const categoriesList = [
    {
      title: "Design",
      link: "/cateogry/design",
    },
    {
      title: "Tech",
      link: "/cateogry/tech",
    },
    {
      title: "Charity",
      link: "/cateogry/charity",
    },
    {
      title: "Food",
      link: "/cateogry/food",
    },
    {
      title: "Art",
      link: "/cateogry/art",
    },
    {
      title: "Housing",
      link: "/cateogry/housing",
    },
    {
      title: "Education",
      link: "/cateogry/education",
    },
    {
      title: "Health",
      link: "/cateogry/health",
    },
    {
      title: "Community",
      link: "/cateogry/community",
    },
    {
      title: "Animals",
      link: "/cateogry/animals",
    },
    {
      title: "Environment",
      link: "/cateogry/environment",
    },
    {
      title: "Other",
      link: "/cateogry/other",
    },
  ];

  return (
    <div className="auth0-features ml-auto mr-auto">
      <div className="auth0-features__grid_2 flex flex-wrap">
        {categoriesList.map((feature) => (
          <CategoryFeature
            title={feature.title}
            link={feature.link}
            key={feature.title} // Make sure to add a unique key for each CategoryFeature
          />
        ))}
      </div>
    </div>
  );
};
