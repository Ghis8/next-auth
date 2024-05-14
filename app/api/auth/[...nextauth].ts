import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
  ]
}

export default NextAuth(authOptions)