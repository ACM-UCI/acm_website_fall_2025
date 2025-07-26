import path from "path"
import fs from 'fs'

import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../scss/global.scss"

function TopBanner() {

  let top_banner_images: any = ["/home/top_banner/anteater.png",	"/home/top_banner/chili.webp",
    	"/home/top_banner/pizza.png", "/home/top_banner/banana.png", 
      "/home/top_banner/computer.png", "/home/top_banner/squirrel.png"]

  return (
    <div>
      {top_banner_images.map((image: any) => (
        <img className="top_banner_image"
          src={image}
        />
      ))}
    </div>
  ) 
}

function WhatIsACM() {
  return (
    <div>
      <h1 className="font-size-1">What Is ACM?</h1>
    </div>
  )
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
      {/*For this - will ask cursor for better alignment/styling*/}
      <Row>
      <div className="vertical_spacer"></div>
      {programming_language_images.map((image: any) => (
        <div>
        <img className="programming_language_image"
        src={image}
        />
        <div className="vertical_spacer"></div>
        </div>
      ))}
      </Row>
    </div>
  )

}

function MissionStatement() {
  return (
    <div>
      <h1 className="font-size-4">long mission statement here</h1>
    </div>
  )
}

function ClubPreview() {
  /*
probably like a column of rows (each with an image, some text, etc)
  */

}

function OurTeam() {

}

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <TopBanner></TopBanner>
      <WhatIsACM></WhatIsACM>
      <ProgrammingLanguageDisplay></ProgrammingLanguageDisplay>
      <MissionStatement></MissionStatement>
    </div>
  );
}