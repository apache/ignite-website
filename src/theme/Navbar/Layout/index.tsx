import React, {type ReactNode} from 'react';
import NavbarContent from '@theme/Navbar/Content';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type {Props} from '@theme/Navbar/Layout';

// Use custom navbar that doesn't rely on Docusaurus's default structure
// The custom navbar handles its own layout, styling, and mobile behavior
// We render NavbarContent directly instead of relying on children prop
export default function NavbarLayout({children}: Props): ReactNode {
  return (
    <>
      <NavbarContent />
      <NavbarMobileSidebar />
    </>
  );
}
