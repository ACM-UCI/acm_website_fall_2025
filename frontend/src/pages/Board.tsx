// Board.tsx

import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import {client} from "../sanity/client";

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

const Board = () => {
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
    <Container>
      <Executive {...executive} />
      <Supporting members={support} />
      <Advisory members={advisory} />
      <ThankYouMessage />
    </Container>
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
            <img style={{width: "1vw"}} src="/board/linkedin.png"/>
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
      <h1>Executive Board</h1>
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
      <h1>Supporting Staff</h1>
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
      <h1>Advisors</h1>
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

const ThankYouMessage = () => (
  <div className="thank_you_message my-5">
    <h1>Thank You</h1>
  </div>
);

export default Board;
