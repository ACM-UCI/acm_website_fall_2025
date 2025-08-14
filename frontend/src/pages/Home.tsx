import React from 'react';


import "../scss/global.scss"

function TopBanner() {

  // definitely going to replace with custom image 
  let top_banner_images: any = ["/home/top_banner/anteater.png", "/home/top_banner/chili.png",
    "/home/top_banner/pizza.png", "/home/top_banner/acm_monster.png", "/home/top_banner/banana.png",
    "/home/top_banner/computer.png", "/home/top_banner/squirrel.png"]

  return (
    <div className="banner_header_wrapper">
      {top_banner_images.map((image: string, index: number) => (
        <img key={index} src={image} className="top_banner_image" />
      ))}
    </div>
  );
}

function WhatIsACM() {
  let what_is_acm = "What Is ACM?"
  let acm_short_description = "ACM@UCI is UCI’s official competitive programming club on campus."
  let acm_meeting_time_loc = "Meetings are every Wednesday from 6pm to 8pm in DBH 3011"

  let acm_with_balloons = "/home/what_is_acm/acm_balloons_doodle.png"

  return (
    <div className="what_is_acm_wrapper shadow rounded">
      <div className="what_is_acm_text">
        <h1 className="font-size-16">{what_is_acm}</h1>
        <div style={{ height: "4vh" }}></div>
        <h1 className="font-size-6">{acm_short_description}</h1>
        <hr />
        <h1 className="font-size-6">{acm_meeting_time_loc}</h1>
        <div style={{ height: "8vh" }}></div>
      </div>

      <img
        src={acm_with_balloons}
        className="what_is_acm_image"
        alt="ACM with balloons"
      />
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
    <div className="programming_language_wrapper">
      {programming_language_images.map((url: string, id: number) => (
        <React.Fragment key={id}>
          <img src={url} className="programming_language_image" />
          {id < programming_language_images.length - 1 && (
            <div className="vertical_spacer" />
          )}
        </React.Fragment>
      ))}
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
  let newcomers_text = "To start competitive programming, begin by learning a programming language, preferably C++, Java, or Python."

  let leetcode_img = "/home/club_preview/leetcode.webp"
  let codeforces_img = "/home/club_preview/codeforces.png"
  let practice_text = "Practice on platforms like Codeforces, LeetCode, or Kattis, focusing on solving problems of increasing difficulty."

  let compete_img = "/home/club_preview/compete.png"
  let compete_text = "Every year, ACM takes its top members to participate in the International Collegiate Programming Competition (ICPC). Tryouts open in the Fall."

  return (
    <div className="club_preview_wrapper">
      <h1 className="font-size-8 text-start">{club_preview_header}</h1>

      {/* Newcomers */}
      <div className="cp_newcomer_wrapper rounded">
        <h1 className="font-size-8 text-start">Newcomers</h1>
        <div className="cp_section">
          <img src={newcomers_img} className="img-fluid" alt="Newcomers" />
          <div className="cp_text text-end font-size-4">
            {newcomers_text} <a href="/#learn">LEARN MORE</a>
          </div>
        </div>
      </div>

      {/* Practice */}
      <div className="cp_practice_wrapper rounded">
        <h1 className="font-size-8 text-start">Practice</h1>
        <div className="cp_section">
          <div className="cp_text text-start font-size-4">
            {practice_text} <a href="/#practice">READ MORE</a>
          </div>
          <img src={leetcode_img} className="img-fluid" alt="LeetCode" />
          <img src={codeforces_img} className="img-fluid" alt="Codeforces" />
        </div>
      </div>

      {/* Compete */}
      <div className="cp_compete_wrapper rounded">
        <h1 className="font-size-8 text-start">Compete</h1>
        <div className="cp_section">
          <img src={compete_img} className="img-fluid" alt="Compete" />
          <div className="cp_text text-end font-size-4">
            {compete_text} <a href="/#compete">SEE MORE</a>
          </div>
        </div>
      </div>
    </div>
  );


}

function OurTeam() {
  let our_team = "OUR TEAM"
  let team_shoutout = "The club wouldn’t be possible without all our amazing board members and advisors. Check them out here!   "

  let team_symbol = "/home/our_team/team_icon.jpg"

  return (
    <div className="our_team_wrapper">
      <h1 className="font-size-8">{our_team}</h1>
      <div className="our_team_row">
        <img src={team_symbol} alt="" />
        <h1 className="font-size-4">
          {team_shoutout} <a href="/#board">VIEW BOARD</a>
        </h1>
        <img src={team_symbol} alt="" />
      </div>
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