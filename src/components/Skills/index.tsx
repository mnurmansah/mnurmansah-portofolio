import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import ProgressBar from 'components/ui/ProgressBar';
import * as Styled from './styles';

interface Skill {
  node: {
    id: string;
    frontmatter: {
      title: string;
    };
  };
}

const Skills: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "skills" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  //const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const skills: Skill[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <Styled.Skills>
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title}
          } = item.node;

          return (
            <Styled.Skill key={id}>
              <ProgressBar title={title} />
            </Styled.Skill>
          );
        })}
      </Styled.Skills>
    </Container>
  );
};

export default Skills;
