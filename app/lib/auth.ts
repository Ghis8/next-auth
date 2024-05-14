import { NextAuthOptions } from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const authOptions:NextAuthOptions = {
    providers: [
      Twitter({
          clientId:process.env.TWITTER_CONSUMER_KEY as string,
          clientSecret:process.env.TWITTER_CONSUMER_SECRET as string,
          version: "2.0",
      })
    ],
    
  }