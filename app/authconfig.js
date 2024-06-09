export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isDashboard) {
        if (isLoggedIn) return true;
        return true;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashbaord", request.nextUrl));
      }
      return true;
    },
  },
};
