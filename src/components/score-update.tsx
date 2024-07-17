import { updateScore } from '@/actions/action'
import React from 'react'
import { BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs'

export default function ScoreUpdate({ id, score }: {
  id: string,
  score: number,
}) {
  return (
    <div className='flex gap-x-2 text-2xl'>
      <button onClick={() => updateScore(id, score + 1)} className="hover:scale-110 transition"><BsHandThumbsUp className='text-green-600'/></button>
      <button onClick={() => updateScore(id, score - 1)} className="hover:scale-110 transition"><BsHandThumbsDown className='text-red-600'/></button>
    </div>
  )
}
