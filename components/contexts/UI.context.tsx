import { Props } from '@/ts/interfaces/props.interfaces';
import React, { createContext, useState, useCallback } from 'react';
import { ReactElement } from 'react';

export const UIContext = createContext({
  isOpen: true,
  hideDuration: 6000,
  onClose: () => {},
  message: 'success',
  showMessage: (type: string, string: string) => {},
  severity: 'info',
});

export const UIProvider = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  const onClose = () => {
    setOpen(false);
    setMessage('');
    setSeverity('');
  };

  const showMessage = (type: string, string: string) => {
    console.log('type', type, 'string', string);
    setOpen(true);
    setMessage(string);
    setSeverity(type);
  };

  return (
    <UIContext.Provider
      value={{
        isOpen: true,
        hideDuration: 6000,
        onClose,
        message,
        showMessage,
        severity,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

/*
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Note archived"
  action={action}
/>
*/
