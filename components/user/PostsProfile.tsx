import { urlServer } from "@/lib/axios"
import { PostType } from "@/types"
import axios from "axios"
import { Session } from "next-auth"
import Post from "../Post"

export default async function PostsProfile({userId, session}: {userId: string, session: Session | null}) {
    const res = await axios.get(`${urlServer}/api/user/${userId}/posts`, {
        headers: {
            Authorization: session?.user.accessToken
        }
    }) as {data: {posts: PostType[]}}
  return (
    <div className="flex flex-col space-y-3">
        {res.data.posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
        {userId}
    </div>
  )
}
