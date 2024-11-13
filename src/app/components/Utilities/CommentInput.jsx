"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({anime_mal_id,user_email,user_name,anime_title}) => {
    const [comment,setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const router = useRouter()
    const handleInput = (e) => {
        setComment(e.target.value)
    }
    const handleClick = async(e) =>{
        e.preventDefault()
        const data = {anime_mal_id,user_email,comment,user_name,anime_title}
        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if(postComment.isCreated){
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        
    }
    return (
        <div className=" flex flex-col gap-2">
            {isCreated && <p className="text-color-primary">Postingan terkirim</p>}
            <textarea value={comment} onChange={handleInput} className="w-full h-32 text-xl p-4"/>
            <button onClick={handleClick} className="py-2 px-3 bg-color-accent w-52">Posting Komentar</button>
        </div>
    )
}

export default CommentInput;