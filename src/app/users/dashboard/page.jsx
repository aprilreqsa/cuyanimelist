import { authUserSession } from "@/libs/auth-libs";
import { redirect } from "next/navigation";
import Image from "next/image";

const Page = async() => {
    const user = await authUserSession()
    {user ? null : redirect(`/`)}
    return (
        <div className="text-color-primary">
            <h3>Dashboard</h3>
            <h5>Welcome back, {user.name}</h5>
            <Image src={user.image} width={100} height={100} />
        </div>
    )
}

export default Page;