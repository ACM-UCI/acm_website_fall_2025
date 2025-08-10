import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../scss/global.scss"

function BoardBanner() {
  let board_doodle = "/board/board_doodle.jpg";
  let board_banner_main_header = "ACM @ UCI wouldn’t be possible without our hardworking board members"
  let board_banner_sub_header = "Check out the AGENTS of ACM below, and if you’re interested, get involved and join the team!"

  return (
    <div className="board_banner_wrapper d-flex justify-content-center align-items-center">
      <Row className="align-items-center">
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <img src={board_doodle} className="subpage_banner_image"></img>
          </Col>
          <Col xs={12} md={8} className="text-left">
            <h1 className="font-size-10">{board_banner_main_header}</h1>
            <h1 className="font-size-6">{board_banner_sub_header}</h1>
          </Col>
        </Row>
    </div>
  )
}


function CompeteBanner() {
let compete_doodle = "/compete/compete_doodle.jpg";
let compete_banner_main_header = "Achieve fame and victory by competing at ICPC";
let compete_banner_sub_header = "Fame and victory not guaranteed. FUN is though!";

return (
  <div className="compete_banner_wrapper d-flex justify-content-center align-items-center">
    <Row className="align-items-center">
      <Col xs={12} md={8} className="text-left">
        <h1 className="font-size-10">{compete_banner_main_header}</h1>
        <h1 className="font-size-6">{compete_banner_sub_header}</h1>
      </Col>
      <Col xs={12} md={4} className="d-flex justify-content-center">
        <img src={compete_doodle} className="subpage_banner_image"></img>
      </Col>
    </Row>
  </div>
);

}

function WhatIsICPC() {

  let icpc_description = "ICPC is an algorithmic programming contest for college students all around the world. With access to only one computer, teams of three race against each other to solve these problems as fast as possible in order to advance to the next rounds."

  return (
    <div className="icpc_wrapper">
      <h1 className="font-size-12">What is ICPC?</h1>
      <h1 className="font-size-5">{icpc_description}</h1>
    </div>
  )
}

function Involvement() {
  let involvement_description = "We have tryouts during the Fall and Spring quarters where students simulate the actual contest environment by getting into teams of 3 and solving as many problems as they can in a 2 hour window. Tryouts are typically held on Kattis or Codeforces.";
  let involvement_image = "/compete/involvement.png";

  return (
    <div className="involvement_wrapper">
      <h1 className="font-size-12">How do I get Involved?</h1>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img src={involvement_image} className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="text-start">
          <h1 className="font-size-5">{involvement_description}</h1>
        </Col>
      </Row>
    </div>
  );
}

function CodeforcesShoutOut() {

  let codeforces_description = "Codeforces is a website that hosts competitive programming contests and provides a platform for programmers to improve their skills. It's a social and educational platform where users can participate in contests, discuss problems, and learn from each other.";

  let codeforces_ratings = "Codeforces ratings are determined by the ELO you get through winning contests.";

  let codeforces_image = "/compete/codeforces.png";

  return (
    <div className="codeforces_shoutout_wrapper">
      <h1 className="font-size-8">Heard of Codeforces?</h1>
      <h1 className="font-size-3">{codeforces_description}</h1>
      <h1 className="font-size-3">{codeforces_ratings}</h1>
      <img src={codeforces_image} className='codeforces_image'></img>
    </div>
  )

}

function ICS80ShoutOut() {
  let ics80_description = "I&C SCI 80 is the algorithmic training prep course! Actual description here. Studies in selected areas of information and computer sciences. Topics addressed vary each quarter.";
  return (
    <div className="ics80_wrapper">
      <h1 className="font-size-8">Heard of ICS 80?</h1>
      <h1 className="font-size-3">{ics80_description}</h1>
    </div>
  )
}

function NotSatisfied() {
  let not_satisfied_blurb = "Check out our learn tab for additional resources and our practice tab for presentations and practice problems!";

  return (
    <div className="not_satisfied_wrapper">
      <h1 className="font-size-8">Still Not Satisified?</h1>
      <h1 className="font-size-3">{not_satisfied_blurb}</h1>
    </div>
  );

}

function HallOfChampions() {
  let hall_of_champions_blurb = "This is a blurb about our past experience competing and our past victories and what not. From the pages that graced our coffee tables to the voices that echoed through the Essence Festival stage, Essence has championed our stories, advocated for our rights, and celebrated our triumphs.";


  return (
    <div className="hall_of_champions_wrapper">
      <h1 className="font-size-12">Hall of Champions</h1>
      <h1 className="font-size-4">{hall_of_champions_blurb}</h1>
      <Row className="align-items-center">
        <Col xs={12} md={9} className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item>
              <img
                src="/compete/hall_of_champions/icpc1.jpg"
                className="carousel_image"
              />
              <Carousel.Caption>
                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="/compete/hall_of_champions/icpc2.jpg"
                className="carousel_image"
              />
              <Carousel.Caption>
                <h3>Third Slide</h3>
                <p>This is a description for the third slide.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="/compete/hall_of_champions/icpc3.jpg"
                className="carousel_image"
              />
              <Carousel.Caption>
                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={3}>
          <div className='champions_side_info'>
            <h1 className="font-size-4">Some of our past champions include:</h1>
            <ul>
              <li>
                Jerry Li (retired)
              </li>
              <li>
                Thomas Neil (retired)
              </li>
              <li>
                Elijah Huang (4th year)
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function AdditionalResources() {
  return (
    <div className='additional_resources_wrapper'>
      <h1 className="font-size-8">Additional Resources</h1>
      <h1 className="font-size-4">ICPC main website:&nbsp;
        <a href="https://icpc.global">https://icpc.global</a>
      </h1>
      <h1 className="font-size-4">Past ICPC Problems:&nbsp;
        <a href="https://icpc.global/worldfinals/past-problems">https://icpc.global/worldfinals/past-problems</a>
      </h1>
      <h1 className="font-size-4">2023 World Finals Article:&nbsp;
        <a href="https://ics.uci.edu/2023/06/23/uc-irvine-to-compete-at-world-finals-of-the-international-collegiate-programming-contest/">https://ics.uci.edu/2023/06/23/uc-irvine-to-compete-at-world-finals-of-the-international-collegiate-programming-contest/ </a>
      </h1>
    </div>
  )
}



export default function Compete() {
  return (
    <div>
      <CompeteBanner></CompeteBanner>
      <WhatIsICPC></WhatIsICPC>
      <Involvement></Involvement>
      <CodeforcesShoutOut></CodeforcesShoutOut>
      <ICS80ShoutOut></ICS80ShoutOut>
      <NotSatisfied></NotSatisfied>
      <HallOfChampions></HallOfChampions>
      <AdditionalResources></AdditionalResources>
    </div>
  );
}