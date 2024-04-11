import nextAuth from "next-auth";

import { authOptions } from "@/app/auth";

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
