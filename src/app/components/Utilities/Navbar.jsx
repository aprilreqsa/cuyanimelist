import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                 <Link href={"/"} className="font-bold text-white text-2xl">Cuy AnimeList</Link>
                 <InputSearch />
                 <UserAction />
            </div>
        </header>
    )
}

export default Navbar;