import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
      signIn: '/auth/signin'
  },

  callbacks: {
    async session({session, token, user}){
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase()
      session.user.uid = token.sub
      return session;
    }
  },

})