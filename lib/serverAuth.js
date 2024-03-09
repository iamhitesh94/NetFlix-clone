import { getSession } from "next-auth/react";
import prismaDB from "@/lib/prismaDB";

const serverAuth = async (req) => {
    const session = await getSession({ req });

    if(!session?.user?.email){
        throw new Error("Session error, Not signed in");
    }

    const currentUser = await prismaDB.user.findUnique({
        where:{
            email: session.user.email,
        }
    })
    
    if(!currentUser){
        throw new Error("User not found, Not signed in");
    }
    
    return currentUser;
}

export default serverAuth;
