import NextAuth from "next-auth"
import type{GetServerSidePropsContext,NextApiRequest,NextApiResponse} from 'next'
import Twitter from "next-auth/providers/twitter"
import type { NextAuthOptions } from "next-auth"

export const authOptions:NextAuthOptions = {
  providers: [
    Twitter({
        clientId:String(process.env.TWITTER_CONSUMER_KEY),
        clientSecret:String(process.env.TWITTER_CONSUMER_SECRET),
        version: "2.0",
    })
  ]
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

