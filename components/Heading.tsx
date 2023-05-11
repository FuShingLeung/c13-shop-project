import { Typography } from '@/components/mui';

const Heading = ({
  component = 'h1',
  variant,
  children,
  ...props
}: {
  component: string;
  variant: string;
  children: String;
}) => {
  return (
    <Typography component={component} variant={variant || component} {...props}>
      {children}
    </Typography>
  );
};
export default Heading;
