// Lets inline styles carry the template's custom properties, e.g. style={{ "--len": "8" }}.
import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
