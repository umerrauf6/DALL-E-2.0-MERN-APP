import React from 'react'
import { surpriseMePrompts } from '../Constant/random'

const generateRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]
    if (randomPrompt === prompt)
        return GenerateRandomPrompt(prompt)
    return randomPrompt
 
}

export default generateRandomPrompt
