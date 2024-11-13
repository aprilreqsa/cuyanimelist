
import Header from "@/app/components/dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({
        where: {
            user_email: user.email
        }
    }) 
    return (
        <div className="mt-4 px-4 w-full"> 
        <Header title="My Comment"/>
        <div className="grid grid-cols-1 px-4 py-8 gap-4">
        {comments.map(comment => {
            return (
            <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className=" grid bg-color-primary text-color-dark p-4">
                <p>{comment.anime_title}</p> 
                <p>{comment.comment}</p> 
            </Link>
            )
        })}
        </div>
        </div>
    )
}
export default Page;