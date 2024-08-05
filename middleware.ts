export {default} from "next-auth/middleware"

export const config = { matcher:['/profile/:path*','/signout','/favorite','/login/plan/select']}