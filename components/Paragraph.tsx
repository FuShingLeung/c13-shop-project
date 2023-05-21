import { Typography } from '@/components/mui';

const Paragraph = ({ children, ...props }: { children: any }) => {
  return (
    <Typography paragraph {...props}>
      {children}
    </Typography>
  );
};

export default Paragraph;
