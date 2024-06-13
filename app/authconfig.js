import { redirect } from "next/navigation";
import { signOut } from "./auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashbaord", request.nextUrl));
      }
      return true;
    },
  },
};
