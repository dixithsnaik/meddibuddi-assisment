import React from 'react';
import { LocationDisplay } from './LocationDisplay';
import { ActionIcons } from './ActionIcons';

export function Header() {
  return (
    <header className="headerContainer">
      <LocationDisplay />
      <ActionIcons />
    </header>
  );
}