// Board.tsx

import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";

function BoardBanner() {
  let board_doodle = import.meta.env.BASE_URL + "/board/board_doodle.jpg";
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
  let confetti_right = import.meta.env.BASE_URL + "/board/confetti_right.png";
  let confetti_left = import.meta.env.BASE_URL + "/board/confetti_left.png";
  let thank_you_message = "Thank you to all past board members for building the foundation of ACM @ UCI and to any and all individuals who managed to stop by - even for just a single meeting!";

  return (
<div className="thank_you_message">
  <img src={confetti_left} className="board_confetti" />
  <h1 className="font-size-4 text-center">{thank_you_message}</h1>
  <img src={confetti_right} className="board_confetti" />
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


function MemberCard({
  member,
}: {
  member: BoardMember | undefined;
}) {

  if (!member) return null;

  function formatPosition(position: string) {
  const pos = position.replace(/-/g, " ");
  
  // Capitalize first letters of each word
  const capitalized = pos.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

  // Handle VP special case
  if (/internal vp/i.test(pos)) return "Internal VP";
  if (/external vp/i.test(pos)) return "External VP";

  return capitalized;
}

const getImageSize = (position: any) => {
  const key = position.toLowerCase();
  if (["president", "internal-vp", "external-vp"].includes(key)) {
    return 0.25;
  }
  if (["webmaster", "treasurer", "secretary", "events-coordinator"].includes(key)) {
    return 0.20;
  }
  if (["faculty-advisor", "advisor-of-competition"].includes(key)) {
    return 0.35;
  }
  return 0.2; 
};

const sizePercent = getImageSize(member.position) * 100; 

  return (

<div
  className={member.position.replace(/\s+/g, "_")}
  style={{ width: `${sizePercent}vw` }}
>
  <img
    src={urlFor(member.image).url()}
    alt={member.name}
    className="img-fluid mb-2"
    style={{
      width: "100%",
      height: "25vw", 
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />
  <Row className="align-items-center" style={{ width: "100%", margin: 0 }}>
    <Col>
      <h1>{member.name}</h1>
<h1 style={{ fontSize: "1.2rem", margin: 0 }}>
  {formatPosition(member.position)}
</h1>

    </Col>
    <Col xs="auto" className="text-end">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
        <img
          style={{
            width: "3vw",
            maxWidth: "40px",
          }}
          src={import.meta.env.BASE_URL + "/board/linkedin.png"}
          alt="LinkedIn"
        />
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



