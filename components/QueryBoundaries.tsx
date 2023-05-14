import { Suspense, ReactNode } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Alert, Button, CircularProgress } from '@/components/mui';
import Paragraph from '@/components/Paragraph';
import { ProductListType } from '@/ts/interfaces/props.interfaces';

// Spinner
export const LoadingView = () => <CircularProgress />;

// Error + retry
export const ErrorView = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Alert severity="error">
      <Paragraph>{error.message}</Paragraph>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Retry
      </Button>
    </Alert>
  );
};

// Combine and render children if all OK.
const QueryBoundaries = ({ children }: { children: ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={ErrorView}
      onError={(...args) => console.log(args)}
    >
      <Suspense fallback={<LoadingView />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default QueryBoundaries;
