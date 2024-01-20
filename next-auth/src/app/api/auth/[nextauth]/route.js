import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
const  nextAuthOptions = {
    providers: [
        CredentialsProvider (
            {
                name: "creds",
                credentials: {
                    email:{label:"email"},
                    password:{label:"password"},
                },
                async authorize(credentials, req){
                    if(!credentials || !credentials.email || !credentials.password){
                        return null
                    }
                    const user = users.find((item)=> item.email === credentials.email);
                    if (user?.password === credentials.password){
                        return user;
                    }
                    return null;
                }
            }
        )
    ]
};

const handler = NextAuth(nextAuthOptions);

export {handler as GET, handler as POST};