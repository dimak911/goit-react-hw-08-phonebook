import { Box } from 'components/Box';
import { SectionHeading } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box
    as="section"
    p={4}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <SectionHeading>{title}</SectionHeading>
    {children}
  </Box>
);
