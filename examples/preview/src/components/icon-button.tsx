import classnames from 'classnames';
import * as React from 'react';

export type IconButtonProps = React.ComponentPropsWithoutRef<'button'>

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  Readonly<IconButtonProps>
>(({ children, className, ...props }, forwardedRef) => (
  <button
    {...props}
    ref={forwardedRef}
    // eslint-disable-next-line tailwindcss/no-custom-classname
    className={classnames(
      'focus:ring-gray-8 rounded text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 focus:text-slate-12 focus:outline-none focus:ring-2',
      className,
    )}
  >
    {children}
  </button>
));

IconButton.displayName = 'IconButton';
