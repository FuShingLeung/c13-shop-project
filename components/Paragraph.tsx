import { Typography } from '@/components/mui';

const Paragraph = ({ children, ...props }: { children: String }) => {
  return (
    <Typography paragraph {...props}>
      {children}
    </Typography>
  );
};

export default Paragraph;
