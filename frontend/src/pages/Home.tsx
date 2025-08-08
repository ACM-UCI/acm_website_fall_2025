import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../scss/global.scss"

function TopBanner() {

  // definitely going to replace with custom image 
  let top_banner_images: any = ["/home/top_banner/anteater.png", "/home/top_banner/chili.webp",
    "/home/top_banner/pizza.png", "/home/top_banner/banana.png",
    "/home/top_banner/computer.png", "/home/top_banner/squirrel.png"]

  return (
    <div className="banner_header_wrapper">
    <Row className="align-items-center">
      {top_banner_images.map((image: any) => (
        <Col className="d-flex justify-content-center">
          <img src={image} className="top_banner_image" />
        </Col>
      ))}
    </Row>
    <p> Going to make a custom image... ew </p>
    </div>
  )
}

function WhatIsACM() {
  let what_is_acm = "What Is ACM?"
  let acm_short_description = "ACM@UCI is UCI’s official competitive programming club on campus."
  let acm_meeting_time_loc = "Meetings are every Wednesday from 6pm to 8pm in DBH 3011"

  let acm_with_balloons = "/home/what_is_acm/acm_with_balloons.png"

  return (
    <div className="what_is_acm_wrapper">
    <Row className="align-items-center">
      <Col xs={12} md={8} className="text-start">
        <h1 className="font-size-16">{what_is_acm}</h1>
        <div style={{height: "4vh"}}></div>
        <h1 className="font-size-6">{acm_short_description}</h1>
        <hr />
        <h1 className="font-size-6">{acm_meeting_time_loc}</h1>
        <div style={{height: "8vh"}}></div>
      </Col>
      <Col xs={12} md={4} className="d-flex justify-content-center">
        <img src={acm_with_balloons} className="img-fluid" />
      </Col>
    </Row>
    </div>
  );
}

function ProgrammingLanguageDisplay() {

  let programming_language_images: any = [
    "/home/programming_languages/Go.png",
    "/home/programming_languages/Ruby_logo.svg.png",
    "/home/programming_languages/JS.png",
    "/home/programming_languages/Rust.png",
    "/home/programming_languages/Cpp.png",
    "/home/programming_languages/Kotlin.png",
    "/home/programming_languages/Csharp.png",
    "/home/programming_languages/Python_logo_01.svg"
  ];

  return (
    <div>
      <Row className="align-items-center">
        {programming_language_images.map((url: any, id: any) => (
          <React.Fragment key={id}> {/* Note to self - react.fragments just mean no extra DOM node is created */}
            <Col className="d-flex justify-content-center">
              <img src={url} className="programming_language_image" />
            </Col>

            {id < programming_language_images.length - 1 && (
              <Col xs="auto" className="vertical_spacer_col">
                <div className="vertical_spacer" />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </div>
  )

}

function MissionStatement() {

  // can have mission statement (and other interchable text) be defined and imported from a messages file
  let our_mission = "OUR MISSION"
  let mission_statement = "ACM@UCI is UCI's official competitive programming club, where coders of all kinds — those passionate about competitive programming, trying to get through technical interviews, or hoping to apply what they learn in their algorithms class — come together and solve problems! Each week, we host informative presentations on various topics in data structures and algorithms, including the divide and conquer paradigm, dynamic programming, and greedy algorithms. We also hold practice sessions on another day of the week after the session so members can internalize the concepts we cover. Sometimes, we host friendly programming contests for our members as well!"

  return (
    <div className="mission_statement_wrapper">
      <h1 className="font-size-12">{our_mission}</h1>
      <h1 className="font-size-3">{mission_statement}</h1>
    </div>
  )
}

function ClubPreview() {
 let club_preview_header = "Come Check Us Out!"

 // maybe today - images and text defined in a separate document (then just import all and like src=images.newcomer_img, etc)
 let newcomers_img = "/home/club_preview/newcomers.jpg"
 let newcomers_text = "To start competitive programming, begin by learning a programming language, preferably C++, Java, or Python.   READ MORE "

 let leetcode_img = "/home/club_preview/leetcode.webp"
 let codeforces_img = "/home/club_preview/codeforces.png"
 let practice_text = "Practice on platforms like Codeforces, LeetCode, or CodeChef, focusing on solving problems of increasing difficulty.   SEE MORE"

  let compete_img = "/home/club_preview/compete.png"
  let compete_text = "Mastering fundamental data structures and algorithms is crucial, along with practicing regularly and participating in contests.   LEARN MORE "

   return (
    <div className="club_preview_wrapper">
      <h1 className="font-size-8 text-start">{club_preview_header}</h1>
      <div className="cp_newcomer_wrapper">
         <h1 className="font-size-8 text-start">Newcomers</h1>
      <Row className="align-items-center">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <img src={newcomers_img} className="img-fluid" />
        </Col>
        <Col xs={12} md={8} >
          <h1 className="font-size-4 text-end">{newcomers_text}</h1>
        </Col>
      </Row>
    </div>
    <div className="cp_practice_wrapper">
  <h1 className="font-size-8 text-start">Practice</h1>
  <Row className="align-items-center">
    <Col xs={12} md={8}>
      <h1 className="font-size-4 text-start">{practice_text}</h1>
    </Col>
    <Col xs={12} md={2} className="d-flex justify-content-center">
      <img src={leetcode_img} className="img-fluid" />
    </Col>
        <Col xs={12} md={2} className="d-flex justify-content-center">
      <img src={codeforces_img} className="img-fluid" />
    </Col>
  </Row>
</div>
<div className="cp_compete_wrapper">
  <h1 className="font-size-8 text-start">Compete</h1>
  <Row className="align-items-center">
    <Col xs={12} md={4} className="d-flex justify-content-center">
      <img src={compete_img} className="img-fluid" />
    </Col>
    <Col xs={12} md={8}>
      <h1 className="font-size-4 text-end">______{compete_text}______</h1>
    </Col>
  </Row>
</div>

    </div>
  );

}

function OurTeam() {
  let our_team = "OUR TEAM"
  let team_shoutout = "The club wouldn’t be possible without all our amazing board members and advisors. Check them out here!    VIEW BOARD"

  let team_symbol = "/home/our_team/team_icon.png"

  return (
    <div className="our_team_wrapper">
      <h1 className="font-size-8">{our_team}</h1>
      <Row className="align-items-center">
        <Col xs={12} md={1} className="d-flex justify-content-center">
          <img src={team_symbol} className="img-fluid" />
        </Col>
        <Col xs={12} md={10} >
          <h1 className="font-size-4">{team_shoutout}</h1>
        </Col>
        <Col xs={12} md={1} className="d-flex justify-content-center">
          <img src={team_symbol} className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <TopBanner></TopBanner>
      <WhatIsACM></WhatIsACM>
      <ProgrammingLanguageDisplay></ProgrammingLanguageDisplay>
      <MissionStatement></MissionStatement>
      <ClubPreview></ClubPreview>
      <OurTeam></OurTeam>
    </div>
  );
}