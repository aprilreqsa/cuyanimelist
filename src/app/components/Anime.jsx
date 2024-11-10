import Image from "next/image";
import Link from "next/link";

const Anime = ({title,images,key,id}) => {
    return (
        <Link href={`/anime/${id}`} className="shadow-lg cursor-pointer text-color-primary hover:text-color-accent transition-all" key={key}>
                <Image priority={false} src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"/>
                <h3 className="font-bold md:text-xl text-xs p-4  ">{title}</h3>
        </Link>
    )
}

export default Anime;