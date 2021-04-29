import React from "react";
import "./faq.css";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";

// Displays all the faqs
const faq = () => {
  return (
    <BasicLayout>
      <h1 className="contentHead">FAQS</h1>
      <div className="conflict">
        <div className="faq">
          <p class="faq-heading">What is CollegeSpace?</p>
          <div class="faq-arrow"></div>
          <p class="faq-text">
            CollegeSpace is a socio-academic portal for the students/alumni of
            Charusat. CollegeSpace, an endeavor for all the students. With the
            help of this portal, students can find college-related information
            and material on a single website.
          </p>
        </div>
        <hr class="new1"></hr>

        <div className="faq">
          <label for="faq-b">
            <p class="faq-heading">How can I upload class-notes ?</p>
            <div class="faq-arrow"></div>
            <p class="faq-text">
              First, open Left Navigation Drawer, Then Click on Add-Notes and
              fill data According to your notes and click on Upload Notes
              Button, and upload your notes and click submit. Now your notes
              will be uploaded.
            </p>
          </label>
        </div>
        <hr class="new1"></hr>
        <div className="faq">
          <label for="faq-c">
            <p class="faq-heading">
              How much time will it take to varify and upload post ?
            </p>
            <div class="faq-arrow"></div>
            <p class="faq-text">
              Nearly It will take 1 to 2 hours to verify and upload Your post to
              the home screen. Appreciate your peace!!!
            </p>
          </label>
        </div>
        <hr class="new1"></hr>
        <div className="faq">
          <label for="faq-d">
            <p class="faq-heading">How to change department path ?</p>
            <div class="faq-arrow"></div>
            <p class="faq-text">
              For PC you will find<b> The Path</b> on the rightmost side of the
              navbar and for Mobile, you will find<b> The Path</b> at the bottom
              of the left navigation drawer. Click on that Path and you can
              change your path.
            </p>
          </label>
        </div>
        <hr class="new1"></hr>
        <div className="faq">
          <label for="faq-e">
            <p class="faq-heading">
              What if my questions are not answered in FAQ's section ?
            </p>
            <div class="faq-arrow"></div>
            <p class="faq-text">
              You can always contact on our social media handles, we are happy
              to solve your doubts :)
            </p>
          </label>
        </div>
        <hr class="new1"></hr>
      </div>
    </BasicLayout>
  );
};

export default faq;
