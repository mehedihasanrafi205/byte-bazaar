import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Mock user data
        const user = { id: "1", name: "Test User", email: "test@example.com", image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?w=360" }
        
        // Simple verification
        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login", 
    error: "/login",  
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
