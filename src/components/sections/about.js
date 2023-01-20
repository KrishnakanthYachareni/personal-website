import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Microservices',
    'Java 8+',
    'Spring Framework',
    'Spring Boot',
    'Python',
    'SQL/NoSQl',
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML & CSS',
    'AngularJs',
    'React.js',
    'Maven',
    'Cassandra',
    'MongoDb',
    'Cucumber',
    'Selenium',
    'Docker & Kubernetes',
    'Jenkins',
    'Spinnaker',
    'AWS',
    'GCP',
    'Agile Methodologies',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I'm Krishnakanth, a Software Development Engineer based in USA.</p>

            <p>
              I'm interested in solving challenging problems in all fields through a strong
              foundation in mathematics, and computer science. I completed my Master's Degree in
              Computer Science from the University of Southern Mississippi (USM) with a 3.9 GPA in
              Dec, 2022. I would love to expand the boundaries of the shared space to create
              innovative and impactful technologies. I am currently working as Software Engineer 3
              at{' '}
              <a href="https://tech.walmart.com/content/walmart-global-tech/en_us.html">
                {' '}
                Walmart Global Tech{' '}
              </a>{' '}
              Dallas, Texas. Previously I worked as a research assistant for NOAA. It is the most
              prestigious American scientific and regulatory agency within the United States
              Department of Commerce that forecasts weather monitors oceanic and atmospheric
              conditions, charts the seas, and conducts deep-sea exploration.
            </p>

            <p>
              Known for excellent client-facing skills, I also excel in merging business and user
              needs into high-quality, cost-effective design solutions while keeping within
              budgetary constraints. I nurture my inherent curiosity by asking questions, breaking
              things and making them differently, learning through experimentation while iteratively
              trying new and different approaches, endlessly assimilating diverse skills and
              knowledge, and perhaps most importantly, learning from failure. This approach has
              often helped me to dynamically shift through protocols, languages, techniques, and
              disciplines while also leveraging just-in-time learning and divergent thinking to
              build avant-garde and creative solutions to ambiguous problems. I have always believed
              in realizing use cases - the real-life problems to solve and work back to engineer the
              technology for the same.
            </p>

            <p>Highlights of my skill and interest include (but hopefully not limited to):</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
