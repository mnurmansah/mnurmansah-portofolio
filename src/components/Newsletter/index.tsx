import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

const Newsletter: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter: Newsletter = markdownRemark.frontmatter;

  return (
    <Styled.Newsletter>
      
    </Styled.Newsletter>
  );
};

export default Newsletter;
