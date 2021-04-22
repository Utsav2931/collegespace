import React from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import classes from "./Aboutus.module.css";
import collegespacelogo from '../../assets/Images/collegespace.png';

const AboutUs = () => {
  return (
    <BasicLayout>
      <div className={classes.titleHeader}>About us</div>
      <div className={classes.row}>
        <div className={classes.content}>
          CollegeSpace is a socio-academic portal for the students/alumni of
          CHARUSAT. CollegeSpace, an endeavor for all the students. With the help
          of this portal, students can find college-related information and
          material on a single website. With the help of this portal you can
          find all the necessary information and study materials like events
          update, notes, previous year’s exam papers, time-table in the same
          place.
          <br />
          <br />
          Show your LOVE if you like this website.
        </div>
        <div className={classes.imagediv}>
          <img
            className={classes.img}
            src={collegespacelogo}
            alt=""
          />
        </div>
      </div>
      {/* <div class="fonts">
        <section class="section-a">
          <div class="container">
            <div>
              <h1>About Us</h1>
              <p>
                Hi Folks, <br />
                CollegeSpace is a socio-academic portal for the students/alumni
                of CHARUSAT. CollegeSpace, an endeavor for all the students.With
                the help of this portal, students can find college-related
                information and material on a single website. With the help of
                this portal you can find all the necessary information and study
                materials like events update, notes, previous year’s exam
                papers, time-table in the same place.
                <br />
                <br />
                Show your LOVE if you like this website.
              </p>
            </div>
            <img
              class="img"
              src="https://i.ibb.co/SP3pYmM/collegespacelogo-removebg.png"
              alt=""
            />
          </div>
        </section>
      </div> */}
    </BasicLayout>
  );
};

export default AboutUs;
