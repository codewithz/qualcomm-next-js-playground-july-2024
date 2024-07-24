import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import middleware from 'next-auth/middleware';

export default middleware;

// export function middleware(request:NextApiRequest){
//     return NextResponse.redirect(new URL("/new-page",request.url))
// }


export const config={
    // * : zero or mores
    // + : one or more
    // ? : zero or one
    matcher: ['/users/:id*']
}