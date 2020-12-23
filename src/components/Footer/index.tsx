import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://www.linkedin.com/in/mokhamad-nurmansah-029348140/">
          Linked In
        </Styled.Link>
        <Styled.Link href="https://github.com/mnurmansah">
          GitHub
        </Styled.Link>
        <Styled.Link href="mailto:mokhamadnurmansah@gmail.com">
          Email
        </Styled.Link>
        <Styled.Link href="https://twitter.com/mnurmansah19">
          Twitter
        </Styled.Link>
      </Styled.Links>
      
      <Styled.Links>
      © 2020, Mokhamad Nurmansah with Gatsby
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
