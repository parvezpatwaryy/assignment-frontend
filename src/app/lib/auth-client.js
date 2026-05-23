import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
    baseURL: "https://assignment-backend-parvez.vercel.app",
});
export const { signIn, signUp, useSession } = authClient;