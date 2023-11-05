'use client'

import { useState } from "react"
import QuestionHead from "./QuestionHead"
import axios from 'axios';

export default function Quiz () {
    const [age, setAge] = useState('18')
    const [gender, setGender] = useState(0)

    function handleSubmit () {
        axios.post("http://127.0.0.1:8000/predict/",{response:[age,gender]})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return <div className="space-y-4">
        <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
            <QuestionHead number={1} />
            <div className="pl-8">
                <p className="text-black">What is your Age?</p>
                <div className="space-x-2">
                    <input type="number" className="cursor-pointer border border-2 px-2 w-1/2" name="Age" onChange={(e)=>setAge(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
            <QuestionHead number={2} />
            <div className="pl-8">
                <p className="text-black">What is your Gender?</p>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="gender" value={"male"} onClick={()=>setGender(0)}/><label>Male</label>
                </div>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="gender" value={"female"} onClick={()=>setGender(1)}/><label>Female</label>
                </div>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="gender" value={"non-binary"} onClick={()=>setGender(2)}/><label>Non-Binary</label>
                </div>
            </div>
        </div>
        <div className="w-3/5 mx-auto">
            <button className="rounded-md bg-[#199388] p-4 text-center text-white w-full text-lg" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
}