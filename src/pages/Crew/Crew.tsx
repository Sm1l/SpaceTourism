import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";

import data from "../../data/data.json";
import { linkConversion } from "../../Helpers/linkConversion";

import styles from "./Crew.module.scss";
import { CrewNav } from "../../components/CrewNav";

interface CrewProps {}

const Crew: React.FC<CrewProps> = () => {
  const { member } = useParams();

  const [memberImage, setMemberImage] = useState<string>();

  const filteredMember = data.crew.filter((el) => el.name.toLowerCase().split(" ").join("") === member)[0];

  useEffect(() => {
    member && setMemberImage(linkConversion(filteredMember.images.webp));
  }, [member]);

  if (!member) {
    return <Navigate to="/crew/douglashurley" replace />;
  } else {
    return (
      <div className={styles.crew}>
        <div className={styles.crewContainer}>
          <div className={styles.contentContainer}>
            <h5 className={styles.title}>
              <span className={styles.number}>02</span>Meet your crew
            </h5>
            <div className={styles.infoContainer}>
              <h4>{filteredMember.role}</h4>
              <h3>{filteredMember.name}</h3>
              <p className={styles.text}>{filteredMember.bio}</p>
              <CrewNav />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={memberImage} alt={filteredMember.name} />
          </div>
        </div>
      </div>
    );
  }
};

export { Crew };
