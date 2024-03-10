import NextAuth from "next-auth"

export interface TypeUserData {
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  name: string,
}
declare module "next-auth" {
    interface User {
      accessToken: string
    }
    interface Session {
      user: TypeUserData 
      token: string
    }
}