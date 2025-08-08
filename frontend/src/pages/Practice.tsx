// FULL DISCLOSURE - used ChatGPT and old ACM website to make the fetching function TOT
// manually doing it is a pain

import { Accordion, Row, Col } from 'react-bootstrap';
import {client} from "../sanity/client";
import { useState, useEffect} from "react"
import type { WeeklyProblems, Presentation, Problem } from '../extra/types.ts';
import "../scss/global.scss"

function getCurrentQuarterAndYear() {
  //const now = new Date();
  // hardcode for now
  const year =  2025 //now.getFullYear();
  const month = 4//now.getMonth(); // 0 = Jan

  let quarter;
  if (month >= 8) quarter = '0'; // Sep-Dec → Fall
  else if (month >= 0 && month <= 2) quarter = '1'; // Jan-Mar → Winter
  else quarter = '2'; // Apr-Aug → Spring

  return { year, quarter };
}

export default function Practice() {
  const [weeklyProblems, setWeeklyProblems] = useState<WeeklyProblems | null>(null);
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { year, quarter } = getCurrentQuarterAndYear();

      const wp: WeeklyProblems = await client.fetch(
        `*[_type == "weeklyProblem" && year == $year && quarter == $quarter][0]{
          ...,
          ${[...Array(10)].map((_, i) => `week${i + 1}[]->`).join(',')}
        }`,
        { year, quarter }
      );

      const pres: Presentation[] = await client.fetch(
        `*[_type == "presentation" && quarter == $quarter]`,
        { quarter }
      );

      setWeeklyProblems(wp);
      setPresentations(pres);
    }

    fetchData();
  }, []);

  if (!weeklyProblems) return <p>Loading...</p>;

  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);


  

  return (
    <Accordion defaultActiveKey="0">
      {weeks.map((weekNum, idx) => {
        const problems = weeklyProblems[`week${weekNum}`] || [];
        const presentation = presentations.find((p: any) => p.week === weekNum);

        return (
          <Accordion.Item eventKey={String(idx)} key={weekNum}>
            <Accordion.Header>Week {weekNum}</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                <Col>
                  <h5>Topic Description</h5>
                  <p>{presentation?.description|| "No description"}</p>
                </Col>
                <Col>
                  <h5>Presentation</h5>
                  {presentation?.url ? (
                    <a href={presentation.url} target="_blank" rel="noreferrer">
                      {presentation.title}
                    </a>
                  ) : (
                    "No presentation"
                  )}
                </Col>
              </Row>

              <h6>Practice Problems</h6>
              <ul>
                {problems.map((problem: any) => (
                  <li key={problem._id}>
                    <a href={problem.url} target="_blank" rel="noreferrer">
                      {problem.name}
                    </a> - {problem.difficulty} ({problem.percentagePassed}% passed)
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
