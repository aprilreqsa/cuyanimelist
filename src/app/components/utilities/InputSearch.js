"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (e) => {
        e.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }
    const handleEnterSearch = (e) => {
        e.preventDefault()
        if( e.key === "Enter"){
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    }
    return (
        <div className="relative">
            <input 
            placeholder="cari anime..." 
            className="w-full p-2 rounded"
            ref={searchRef}
            onKeyUp={handleEnterSearch}
            />
            <button className="absolute top-2 end-2"  onClick={handleSearch}><MagnifyingGlass size={24} /></button>
        </div>
        
    )
}
export default InputSearch;