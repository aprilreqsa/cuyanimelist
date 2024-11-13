import prisma from '@/libs/prisma'
import React from 'react'

const CommentBox = async({anime_mal_id}) => {
    const comments = await prisma.comment.findMany({
        where: {anime_mal_id: anime_mal_id}
    })
  return (
    <div className='grid grid-cols-4 gap-4 mt-4'>
        {comments.map(comment => {
            return (
            <div key={comment.id} className='text-color-dark bg-color-primary '>
                <p>{comment.user_name}</p>
                <p>{comment.comment}</p>
            </div>
            )
        })}
        
    </div>
  )
}

export default CommentBox