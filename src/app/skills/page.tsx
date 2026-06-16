'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

const skillCategories = [
  {
    title: "Design & Accessibility",
    skills: ["UX/UI Design", "Mobile-First Prototyping", "AODA / WCAG Compliance", "Figma", "Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    title: "Frontend Engineering",
    skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap & Tailwind"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "C# (ASP.NET Core)", "PHP", "SQL Server / MySQL", "MongoDB"]
  }
];
export default function Skills() {
  return (
    <main className="py-5">
      <Container>
        <h1 className="mb-2">Technical Toolkit</h1>
        <p className="text-muted mb-5">The programming languages, frameworks, and design methodologies I use to build digital experiences.</p>
        
        <Row className="g-4">
          {skillCategories.map((category) => (
            <Col xs={12} md={4} key={category.title}>
              <Card className="h-100 border-0 bg-light p-3">
                <Card.Body>
                  <Card.Title className="fw-bold h5 mb-3 pb-2 border-bottom border-dark-subtle">
                    {category.title}
                  </Card.Title>
                  <div className="d-flex flex-column gap-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="d-flex align-items-center gap-2 py-1">
                        {/* A clean, consistent bullet point style */}
                        <span className="text-dark fw-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}