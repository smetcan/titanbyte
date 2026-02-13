"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
