import React from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import classes from "./Aboutus.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SocialLink from "../../components/LinkComponent/Linkcomponent";
import collegespacelogo from "../../assets/Images/collegespace.png";
import harsh from "../../assets/Images/HarshProfile.png";
import utsav from "../../assets/Images/UtsavProfileee.png";
import smit from "../../assets/Images/SmitProfile.png";
import dev from "../../assets/Images/DevProfile.png";
import DevCard from "./DevCard";

// Social links for CollegeSpace
const socialLinks = [
  "https://twitter.com/CollegeSpace1",
  "https://www.instagram.com/collegespace1/",
];

// developer info object which contains the information of developers
let developerInfo = [
  {
    name: "Harsh Patel",
    image: harsh,
    social: [
      "https://twitter.com/harshptl14",
      "https://www.instagram.com/harshptl14/",
      "https://github.com/harshptl14",
    ],
  },
  {
    name: "Utsav Patel",
    image: utsav,
    social: [
      "https://twitter.com/Utsav14403558",
      "https://www.instagram.com/utsav_2931/",
      "https://github.com/Utsav2931",
    ],
  },
  {
    name: "Smit Patel",
    image: smit,
    social: [
      "https://twitter.com/SmitPat64609331",
      "https://www.instagram.com/smit028/",
      "https://github.com/smit4297",
    ],
  },
  {
    name: "Dev Patel",
    image: dev,
    social: [
      "https://twitter.com/DevPate42553609",
      "https://www.instagram.com/_devpatel_5/",
      "https://github.com/DevPatel05",
    ],
  },
];

// Component to display the About us page
const AboutUs = () => {
  return (
    <BasicLayout>
      <div className={classes.titleHeader}>About us</div>
      <div className={classes.row}>
        <div className={classes.content}>
          CollegeSpace is a socio-academic portal for the students/alumni of
          CHARUSAT. CollegeSpace, an endeavor for all the students. With the
          help of this portal, students can find college-related information and
          material on a single website. With the help of this portal you can
          find all the necessary information and study materials like events
          update, notes, previous year’s exam papers, time-table in the same
          place.
          <br />
          <br />
          Show your LOVE if you like this website.
        </div>
        <div className={classes.imagediv}>
          <img className={classes.img} src={collegespacelogo} alt="" />
        </div>
      </div>

      {/* Display the social networks of CollegeSpace */}
      <div className={classes.link}>
        <li className={classes.iconStyle}>
          <SocialLink link={socialLinks[0]}>
            <FaTwitter size={30} />
          </SocialLink>
        </li>

        <li className={classes.iconStyle}>
          <SocialLink link={socialLinks[1]}>
            <FaInstagram size={30} />
          </SocialLink>
        </li>
      </div>

      <div className={classes.headerText}>Gigs behind this project</div>

      {/* Map all developerInfo object's data to DevCard component to display data */}
      <div className={classes.CardRow}>
        {developerInfo.map((variable, index) => {
          return <DevCard varr={variable} key={index} />;
        })}
      </div>
    </BasicLayout>
  );
};

export default AboutUs;
