import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import editor from "../../Assets/Projects/gbox.png";
import chatify from "../../Assets/Projects/movie.jpg";
import bitsOfCode from "../../Assets/Projects/woode.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Wooder Landing Page"
              description="This is my first project to code a landing page with skills of HTML, SCSS, JQUERY, JAVASCRIPT...              ."
              ghLink="https://github.com/watanuki469/wooder-landing-page"
              demoLink="https://watanuki469.github.io/wooder/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GBox"
              description="Develop using standard HTML5,SCSS,Javascript || Libraries: jQuery,Flickity,AOS,Fancybox,..."
              ghLink="https://github.com/watanuki469/gbox"
              demoLink="https://watanuki469.github.io/gbox/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IMDB Movie" 
              description="Develop using standard Typescript & NextJS || Libraries: Redux,tailwindcss,react-rounter-dom..."
              ghLink="https://github.com/watanuki469/themoviedb"
              demoLink="https://themoviedb-five.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="/"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="/"

            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
