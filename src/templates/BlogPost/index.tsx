import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <FormatHtml content={post.html} />
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
