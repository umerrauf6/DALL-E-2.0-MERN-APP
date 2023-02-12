import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { FormFields, Loader } from "../components/index.js"
import generateRandomPrompt from "../Utitlis/generateRandomPrompt"
import { preview } from "../assets"
import axios from "axios"
const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    pic: "",
    prompt: ""
  })
  const [generateImage, setGenerateImage] = useState(false)
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  
  }
  const handleSurpriseMe = () => {
    const oldprompt = form.prompt
    const freshPrompt = generateRandomPrompt(oldprompt)
    
    setForm({ ...form, prompt: freshPrompt })
    
  }
  const onSubmit = () => {
    
  }
   const generateImg = async () => {
    if (form.prompt) {
      try {
        setGenerateImage(true);
        const response = await fetch('http://localhost:3000/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
          Authorization: `Bearer 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`
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGenerateImage(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold'>Create</h1>
      <p className='text-xs text-neutral-500 py-2'>Create visual and beautifull images Through DALL-E 2.0 AI </p>
      <form className="mt-16" onSubmit={onSubmit}>
        <FormFields
          label="Name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          handleChange={handleChange}
        />
        <FormFields
          label="Prompt"
          name="prompt"
          type="text"
          placeholder="A plush toy robot sitting against a yellow wall"
          value={form.prompt}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          handleChange={handleChange}
        />
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">

        {
          form.pic ? (
            <img src={form.pic} alt="pic" />
          ) : (
            <img src={preview} alt="preview" />
          )
          }
          <div className="absolute">
            {
              generateImage&&(<Loader/>)
            }
          </div>
        </div>
      </form>
      <div>
        <button className="bg-green-900 w-full rounded mt-2 p-2 text-white" type="button" onClick={generateImg}>
          {generateImage ? "Generating..." : "Generate"}
        </button>
      </div>
      <div className="mt-2">
        <div className="text-gray-400">Once you have created share it with comunity</div>
        <button className="bg-blue-400 w-full mt-2 rounded p-2 text-white" type="button" onClick={generateImg}>
         Share it with comunity
        </button>
</div>
  
    </div>

  )
}
export default CreatePost
