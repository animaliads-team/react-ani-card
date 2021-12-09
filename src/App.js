import React from 'react';
import '@animaliads/css-tokens/global-tokens.css';
import '@animaliads/animalia-brand/theme.css';
import '@animaliads/ani-card';
import './style.css';

export default function App() {
  return (
    <div>
      <ani-card>Card read-only</ani-card>
      <ani-card type="link" href="https://www.google.com/">
        Card link
      </ani-card>
      <ani-card type="selectable" selected="true">
        Card selectable
      </ani-card>
    </div>
  );
}
