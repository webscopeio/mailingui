import { Html } from '@react-email/html';
import { Email } from './Sample';

export default function Preview() {
  return (
    <Html lang="en" dir="ltr">
      <Email />
    </Html>
  );
};
