import bcrypt from "bcrypt";
import prismaDB from "@/lib/prismadb";

module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    try {
        const { email, name, password } = req.body;

        const existingUser = await prismaDB.user.findUnique({
            where:{
                email,
            },
        });

        if(existingUser){
            return res.status("422").json({error: "Email taken"});
        }   

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismaDB.user.create({
            data:{
                email,
                name,
                hashedPassword,
                image: "",
                emailVerified: new Date(),
            }
        })

        return res.status(200).json(user)

    } catch (error) {
        console.log(error);
        res.status(400).end();
    }

};