"use client"

import { useRouter } from "next/navigation"
const { ArrowSquareLeft } = require("@phosphor-icons/react")


const Header = ({title}) => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.back()
    }
    return (
        <div className="flex justify-between mb-4 ">
            <button onClick={handleClick} className="text-color-primary "><ArrowSquareLeft size={32} /></button>
            <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
        </div>
    )
}

export default Header;