import React from "react";
import { CreatorsFeature } from "./creator";

export const Creators: React.FC = () => {
  const creatorsList = [
    {
      title: "Save the Whales",
      category: "Animals",
      subtitle: "Ethan Johnson",
      link: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Southern_right_whale.jpg",
    },
    {
      title: "World Fund for Artists",
      category: "Art",
      subtitle: "John Doe",
      link: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Art-portrait-collage_2.jpg",
    },
    {
      title: "American Red Cross",
      category: "Health",
      subtitle: "Jane Merry",
      link: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Headquarters_building_of_the_American_Red_Cross%2C_Washington%2C_D.C_LCCN2011632232.tif/lossy-page1-1539px-Headquarters_building_of_the_American_Red_Cross%2C_Washington%2C_D.C_LCCN2011632232.tif.jpg",
    },
    {
      title: "Food for the Hungry",
      category: "Food",
      subtitle: "Neymar Jr.",
      link: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Homeless_man_in_Toronto_across_from_old_City_Hall.jpg",
    },
  ];

  return (
    <div className="auth0-features">
      {/* Projects / Creations */}
      <h2 className="auth0-features__title_2">
        Trending Projects 
      </h2>
      <div className="auth0-features__grid">
        {creatorsList.map((feature) => (
          <CreatorsFeature
            key={feature.title}
            title={feature.title}
            subtitle={feature.subtitle}
            category={feature.category}
            link={feature.link}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};
