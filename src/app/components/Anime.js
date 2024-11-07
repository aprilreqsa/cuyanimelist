import Image from "next/image";
import Link from "next/link";

const Anime = ({title,images,key}) => {
    return (
        <Link href={`/${key}`} className="shadow-lg cursor-pointer" key={key}>
                <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"/>
                <h3 className="font-bold md:text-xl text-xs p-4">{title}</h3>
        </Link>
    )
}

export default Anime;