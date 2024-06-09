import NextAuth from "next-auth";
import { authConfig } from "./authconfig";

export const config = {
  matcher: [`/((?!api|_next/static|_next/image|.png).*`],
};
