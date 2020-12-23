import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import Timeline from 'components/ui/Timeline';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Service {
  node: {
    id: string;
    frontmatter: {
      title: string;
      icon: IconProps;
      description: string;
      content: string;
    };
  };
}

const Services: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "services section" } }) {
        frontmatter {
          title
          subtitle
          content
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "services" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              description
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const services: Service[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <InfoBlock content={sectionTitle.content} center />
      <Styled.Services>
        {services.map((item) => {
          const {
            id,
            frontmatter: { title, icon, description }
          } = item.node;

          return (
            <Styled.ServiceItem key={id}>
              <InfoBlock icon={icon} title={title} center content={description} /> 
            </Styled.ServiceItem>
          );
        })}
      </Styled.Services>
    </Container>
  );
};

export default Services;
