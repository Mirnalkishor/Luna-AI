import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            if (session?.user) {
                session.user.id = token.id;
            }
            return session;
        },

        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();
                const existingUser = await User.findOne({ email: user.email });

                if (!existingUser) {
                    await User.create({ name: user.name, email: user.email });
                }
                return true;
            } catch (error) {
                console.error("Error signing in:", error);
                return false;
            }
        }
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error'
    }
});

export { handler as GET, handler as POST };
