
import Header from "@/app/components/dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import { getAnimeResponse } from "@/libs/libs-api";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession()
    const topAnime = await getAnimeResponse("top/anime")
    const collection = await prisma.collection.findMany({where: {user_email: user.email}})
    
    return (
        <section className="mt-4 px-4 w-full">
            <Header title="My Collection"/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> 
                {collection.map((collect,index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
                        <Image src={collect.anime_image} alt="" width={350} height={350} className="w-full"/>
                        <div className="absolute flex justify-center items-center bg-color-accent bottom-0 w-full">
                        <h5 className="text-xl text-center">{collect.anime_title}</h5>
                        </div>
                </Link>
                    )
                })}  
            </div>
        </section>
    )
}
export default Page;