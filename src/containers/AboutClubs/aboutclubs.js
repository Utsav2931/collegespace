import React from 'react';
import './aboutclubs.css';
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";



const aboutdept = () => {
  return (
    <BasicLayout>


      <center><h1 className="contentHead">About Clubs</h1></center>
      <div class="blog-card">
        <div class="meta">
          <div class="photo" ></div>
        </div>
        <div class="description">
          <h1><b>Club Gaama</b></h1>
          <h2>Opening a door to the future</h2>
          <p> Club Gamma formulates a contributory platform to scrutinize learner's potential talents with profound guidance. The club assists in both technical and non-technical spheres.The pivot of the club fundamentally is to promote the inclusive growth of the learners and help the learners attain analytical knowledge.</p>
          <p class="read-more">
            <a href="https://www.linkedin.com/company/clubgamma/">Read More</a>
          </p>
        </div>
      </div>
      <div class="blog-card alt">
        <div class="meta">
          <div class="photo1" ></div>
        </div>
        <div class="description">
          <h1><b>gsc</b></h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>GSC’s mission is to ensure the Internet is a global public resource, open and accessible to all. A GSC & College Club is a group of students with a passion for technology who meet regularly to advance this mission by building and innovating on open source projects that keep the web open.</p>
          <p class="read-more">
            <a href="https://www.linkedin.com/company/gsc-charusat/">Read More</a>
          </p>
        </div>
      </div>

      <div class="blog-card">
        <div class="meta">
          <div class="photo2" ></div>
        </div>
        <div class="description">
          <h1><b>Developer Student Club</b></h1>
          <h2>Opening a door to the future</h2>
          <p> The sole mission of the Developer Student Club (DSC) is to bring together like-minded students interested in google technologies. Powered by Google Developers, DSC endeavors to wedge the gap between theory and practice. DSC encourages students to solve real world problems</p>
          <p class="read-more">
            <a href="https://dsc-hackbash-2021.web.app/">Read More</a>
          </p>
        </div>
      </div>
      <div class="blog-card alt">
        <div class="meta">
          <div class="photo3" ></div>
          {/* <ul class="details">
            <li class="author"><a href="#">SOMEONE</a></li>
            <li class="date">July. 15, 2020</li>
            <li class="tags">
              <ul>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </li>
          </ul> */}
        </div>
        <div class="description">
          <h1><b>AWS Student's Club</b></h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>Together as a Club ASC aims to provide a platform for the intellectuals to learn and explore the Cloud fundamentals of AWS. As a part of the club we assure that every individual gets something productive out of this club. ASC intends to bring developers under one roof to create a community to inspire many.</p>
          <p class="read-more">
            <a href="https://asc.charusat.ac.in/">Read More</a>
          </p>
        </div>
      </div>
    </BasicLayout>
  )
}

export default aboutdept
