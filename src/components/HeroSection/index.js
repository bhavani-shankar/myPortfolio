import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Prit,
  Span,
  SpanFont,
  SubTitle,
  ResumeButton,
  SubTitleParagraph,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpeg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  const lines = Bio.description.split("\n");
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
            Hello 😎, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
                I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>
              {lines.map((line, index) => (
                <SubTitleParagraph key={index}>
                  {" "}
                  <br></br> {line}
                </SubTitleParagraph>
              ))}
            </SubTitle>
            <Prit>
              <ResumeButton href={Bio.resume} target="display">
              Explore My CV
              </ResumeButton>
              {/* <ResumeButton href={Bio.github} target="display">
                GitHub Profile
              </ResumeButton> */}
            </Prit>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
