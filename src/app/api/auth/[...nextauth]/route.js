import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

callbacks: {
  signIn: async (user, account, profile, email, credentials) => {
    console("signIn", user, account, profile, email, credentials);
    return true;
  };
}

export { handler as GET, handler as POST };
