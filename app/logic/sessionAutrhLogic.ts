import { commitSession, getSession } from "~/sessions";
import { createCustormToken, createSessionCookieAuth } from "~/utils/auth.server"

export const createAndSaveSession = async (id:string,request:Request) => {
   
    let tokencreated = await createCustormToken(id)
   await console.log(tokencreated,"Token Created");
   
//    let sessionToken = await createSessionCookieAuth(tokencreated.toString())
//    await console.log(sessionToken,"Session Token Created");
   

   const session  = await getSession(
       request.headers.get("Cookie")
   )

   await session.set("userSession",tokencreated.toString())
   
   await commitSession(session)
   console.log("SESSION CREATED AND COMMITED");
   
}