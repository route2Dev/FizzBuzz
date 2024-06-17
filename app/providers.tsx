'use client';

import React, { ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return <JotaiProvider>{children}</JotaiProvider>;
}

export default Providers;
