import { getAnimeResponse } from "@/libs/libs-api";
import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/app/components/Utilities/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/app/components/Utilities/CommentInput";
import CommentBox from "@/app/components/Utilities/CommentBox";

const Page = async ({params: {id}}) => {
    const data = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: {user_email: user?.email, anime_mal_id: id }
    })
    console.log(collection);
    
    const anime = data.data
    return (
        <div>
            <div className="p-4">
                <h3 className="text-color-primary text-2xl">{anime.title} - {anime.year}</h3>
                {!collection && user && <CollectionButton anime_image={anime.images.webp.image_url} anime_title={anime.title} user_email={user?.email} anime_mal_id={id} />}
                
            </div>
            <div>
                <div className="p-4 flex gap-2 text-color-primary overflow-x-auto">
                    <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                        <h3>PERINGKAT</h3>
                        <p>{anime.rank}</p>
                    </div>
                    <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                        <h3>SCORE</h3>
                        <p>{anime.score}</p>
                    </div>
                    <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                        <h3>ANGGOTA</h3>
                        <p>{anime.members}</p>
                    </div>
                    <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                        <h3>EPISODE</h3>
                        <p>{anime.episodes}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 flex gap-2 text-color-primary sm:flex-nowrap flex-wrap">
                <Image 
                src={anime.images.webp.image_url} 
                width={250} 
                height={250}
                alt={anime.images.jpg.image_url}
                className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.synopsis}</p>
            </div>
            <div className="p-4">
                {user && 
                <CommentInput anime_mal_id={id} user_name={user?.name} user_email={user?.email} anime_title={anime.title}/>
                }
            </div>
            <div>
                <h3 className="text-color-primary text-2xl mb-2">Komentar Penonton</h3>
                <CommentBox anime_mal_id={id} />
            </div>
            <div>
                <VideoPlayer youtubeId={anime.trailer.youtube_id} />
            </div>
        </div>
        
    )
    
}
export default Page;