import { Typography } from '@/components/mui';
import { Variant } from '@mui/material/styles/createTypography';

const Heading = ({
  component = 'h1',
  variant,
  children,
  ...props
}: {
  component: React.ElementType;
  variant: Variant;
  children: String;
}) => {
  return (
    <Typography component={component} variant={variant || component} {...props}>
      {children}
    </Typography>
  );
};
export default Heading;
