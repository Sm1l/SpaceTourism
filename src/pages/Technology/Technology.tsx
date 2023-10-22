import React, { useState, useEffect } from "react";

import data from "../../data/data.json";
// import { linkConversion } from "../../Helpers/linkConversion";

import styles from "./Technology.module.scss";
import { useParams, Navigate } from "react-router";
import { TechnologyNav } from "../../components/TechnologyNav";

//*for GitHub
import img1 from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import img2 from "../../assets/images/technology/image-spaceport-portrait.jpg";
import img3 from "../../assets/images/technology/image-space-capsule-portrait.jpg";
//*end

interface TechnologyProps {}

const Technology: React.FC<TechnologyProps> = () => {
  const { tech } = useParams();

  const [techImage, setTechImage] = useState<string>();

  const filteredTech = data.technology.filter((el) => el.name.toLowerCase().split(" ").join("") === tech)[0];

  useEffect(() => {
    // tech && setTechImage(linkConversion(filteredTech.images.portrait));

    switch (tech) {
      //*for GitHub
      case "launchvehicle":
        setTechImage(img1);
        break;
      case "spaceport":
        setTechImage(img2);
        break;
      case "spacecapsule":
        setTechImage(img3);
        break;
      default:
        break;
      //*end
    }
  }, [tech]);

  if (!tech) {
    return <Navigate to="/technology/launchvehicle" replace />;
  } else {
    return (
      <div className={styles.technology}>
        <div className={styles.technologyContainer}>
          <h5 className={styles.title}>
            <span className={styles.number}>03</span>Space launch 101
          </h5>
          <div className={styles.technologyContainer2}>
            <div className={styles.contentContainer}>
              <div className={styles.infoContainer}>
                <TechnologyNav />
                <div className={styles.textContainer}>
                  <p className={styles.terminology}>the terminology…</p>
                  <h3>{filteredTech.name}</h3>
                  <p className={styles.text}>{filteredTech.description}</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src={techImage} alt={filteredTech.name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { Technology };
