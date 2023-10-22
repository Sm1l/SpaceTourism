import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";

import data from "../../data/data.json";
// import { linkConversion } from "../../Helpers/linkConversion";

import styles from "./Crew.module.scss";
import { CrewNav } from "../../components/CrewNav";

//*for GitHub
import img1 from "../../assets/images/crew/image-douglas-hurley.webp";
import img2 from "../../assets/images/crew/image-mark-shuttleworth.webp";
import img3 from "../../assets/images/crew/image-victor-glover.webp";
import img4 from "../../assets/images/crew/image-anousheh-ansari.webp";
//*end

interface CrewProps {}

const Crew: React.FC<CrewProps> = () => {
  const { member } = useParams();

  const [memberImage, setMemberImage] = useState<string>();

  const filteredMember = data.crew.filter((el) => el.name.toLowerCase().split(" ").join("") === member)[0];

  useEffect(() => {
    // member && setMemberImage(linkConversion(filteredMember.images.webp));
    //*for GitHub
    switch (member) {
      case "douglashurley":
        setMemberImage(img1);
        break;
      case "markshuttleworth":
        setMemberImage(img2);
        break;
      case "victorglover":
        setMemberImage(img3);
        break;
      case "anoushehansari":
        setMemberImage(img4);
        break;
      default:
        break;
    }
    //*end
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
