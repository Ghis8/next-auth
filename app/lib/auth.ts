import { NextAuthOptions } from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const authOptions:NextAuthOptions = {
    providers: [
      Twitter({
          clientId:String(process.env.TWITTER_CONSUMER_KEY),
          clientSecret:String(process.env.TWITTER_CONSUMER_SECRET),
          version: "2.0",
      })
    ]
  }