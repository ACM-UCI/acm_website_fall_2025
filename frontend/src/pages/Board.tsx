// Board.tsx

import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";

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

function ThankYouMessage() {
  let confetti_right = "/board/confetti_right.png";
  let confetti_left = "/board/confetti_left.png";
  let thank_you_message = "Thank you to all past board members for building the foundation of ACM @ UCI and to any and all individuals who managed to stop by - even for just a single meeting!";

  return (

  <div className="thank_you_message">
    <Row className="align-items-center">

          <Col xs={12} md={1} className="d-flex justify-content-center">
            <img src={confetti_left}/> 
          </Col>
          <Col xs={12} md={10} className="text-center">
            <h1 className="font-size-4">{thank_you_message}</h1>
            
          </Col>

          <Col xs={12} md={1} className="d-flex justify-content-center">
            <img src={confetti_right}/> 
          </Col>
        </Row>
  </div>
);
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type BoardMember = {
  name: string;
  position: string;
  image: any;
  linkedin: string;
  group: "executive" | "support" | "advisory";
};

export default function Board() {
  const [members, setMembers] = useState<BoardMember[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "boardMember"]{
          name,
          position,
          image,
          linkedin,
          group
        }`
      )
      .then((data: any) => setMembers(data))
      .catch(console.error);
  }, []);

  const executive = {
    president: members.find((m) => m.position === "president"),
    internalVp: members.find((m) => m.position === "internal-vp"),
    externalVp: members.find((m) => m.position === "external-vp"),
  };

  const support = [
    "secretary",
    "events-coordinator",
    "treasurer",
    "webmaster",
  ].map((pos) => members.find((m) => m.position === pos));

  const advisory = [
    "faculty-advisor",
    "advisor-of-competition",
  ].map((pos) => members.find((m) => m.position === pos));

  return (
    <div>
      <BoardBanner></BoardBanner>
      <Container>
      <Executive {...executive} />
      <Supporting members={support} />
      <Advisory members={advisory} />
      <ThankYouMessage />
      </Container>
    </div>
  );
};

const MemberCard = ({
  member,
}: {
  member: BoardMember | undefined;
}) => {
  if (!member) return null;
  return (
    <div className={member.position.replace(/\s+/g, "_")}>
      <img
        src={urlFor(member.image).width(200).height(200).url()}
        alt={member.name}
        className="img-fluid mb-2"
      />
      <Row>
        <Col>
          <h1>{member.name}</h1>
          <h1 style={{ fontSize: "1.2rem" }}>{member.position.replace(/-/g, " ")}</h1>
        </Col>
        <Col>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img style={{ width: "1vw" }} src="/board/linkedin.png" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

const Executive = ({
  president,
  internalVp,
  externalVp,
}: {
  president?: BoardMember;
  internalVp?: BoardMember;
  externalVp?: BoardMember;
}) => (
  <div className="executive_wrapper my-5">
    <Col>
      <h1 className="font-size-10">Executive Board</h1>
      <div className="executive_board mt-4">
        <Row>
          <Col><MemberCard member={president} /></Col>
          <Col><MemberCard member={internalVp} /></Col>
          <Col><MemberCard member={externalVp} /></Col>
        </Row>
      </div>
    </Col>
  </div>
);

const Supporting = ({ members }: { members: (BoardMember | undefined)[] }) => (
  <div className="supporting_wrapper my-5">
    <Col>
      <h1 className="font-size-10">Supporting Staff</h1>
      <div className="supporting_staff mt-4">
        <Row>
          {members.map((m, i) => (
            <Col key={i}><MemberCard member={m} /></Col>
          ))}
        </Row>
      </div>
    </Col>
  </div>
);

const Advisory = ({ members }: { members: (BoardMember | undefined)[] }) => (
  <div className="advisory_wrapper my-5">
    <Col>
      <h1 className="font-size-10">Advisors</h1>
      <div className="advisors mt-4">
        <Row>
          {members.map((m, i) => (
            <Col key={i}><MemberCard member={m} /></Col>
          ))}
        </Row>
      </div>
    </Col>
  </div>
);


