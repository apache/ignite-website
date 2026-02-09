import React, {type ReactNode} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';

// Override default Navbar to ensure our custom NavbarLayout is used
export default function Navbar(): ReactNode {
  return <NavbarLayout children={null} />;
}
