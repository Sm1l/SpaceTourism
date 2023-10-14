import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";
import data from "../../data/data.json";
import { linkConversion } from "../../Helpers/linkConversion";

import styles from "./Destination.module.scss";
import { DestinationNav } from "../../components/DestinationNav";

// type TPlanet = "moon" | "mars" | "europa" | "titan";

interface DestinationProps {}

const Destination: React.FC<DestinationProps> = () => {
  const { planet } = useParams();

  const [planetImage, setPlanetImage] = useState<string>();

  const filteredPlanet = data.destinations.filter((el) => el.name.toLowerCase() === planet)[0];

  useEffect(() => {
    planet && setPlanetImage(linkConversion(filteredPlanet.images.webp));
  }, [planet]);

  if (!planet) {
    return <Navigate to="/destination/moon" replace />;
  } else {
    return (
      <div className={styles.destination}>
        <h5 className={styles.title}>
          <span className={styles.number}>01</span>Pick your destination
        </h5>
        <div className={styles.destinationContainer}>
          <div className={styles.imageContainer}>
            <img src={planetImage} alt={filteredPlanet.name} />
          </div>
          <div className={styles.contentContainer}>
            <DestinationNav />
            <h2 className={styles.title}>{filteredPlanet.name}</h2>
            <p className={styles.text}>{filteredPlanet.description}</p>
            <div className={styles.info}>
              <div className={styles.distance}>
                <p className={styles.infoText}>avg. distance</p>
                <span className={styles.infoNumber}>{filteredPlanet.distance}</span>
              </div>
              <div className={styles.time}>
                <p className={styles.infoText}>est.travel time </p>
                <span className={styles.infoNumber}>{filteredPlanet.travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { Destination };
