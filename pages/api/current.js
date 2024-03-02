import serverAuth from "@/lib/serverAuth";
export default async function handler(req, res){
    if(req.method !== "GET"){
        return res.status(405).end;
    }
    
    try{
        const currentUser = await serverAuth(req);
        return res.status(200).json(currentUser);
    }catch(error){
        console.log(error);
        res.status(500).end();
    }

}