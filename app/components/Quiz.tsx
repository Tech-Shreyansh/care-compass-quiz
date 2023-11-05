'use client'

import { useEffect, useState } from "react"
import QuestionHead from "./QuestionHead"
import axios from 'axios';

export default function Quiz () {
    const [age, setAge] = useState('18')
    const [gender, setGender] = useState(0)
    const [stress, setStress] = useState(0)
    const [sleepDuration, setSleepDuration] = useState(0)
    const [sleep, setSleep] = useState(1)
    const [sleepEnergy, setSleepEnergy] = useState(3)
    const [mood,setMood] = useState(4)
    const [support, setSupport] = useState(1)
    const [isolated, setIsolated] = useState(0)
    const [selfHarmThought, setSelfHarmThought] = useState(0)
    const [eatingHabits, setEatingHabits] = useState(0)
    const [workSchoolPerformance, setWorkSchoolPerformance] = useState(0)
    const [result,setResult] = useState("")

    const response = {
        'age' : Number(age),
        'gender' : gender,
        'stress_life_changes' : stress,
        'sleep_energy' : sleepEnergy,
        'mood_emotions' : mood, 
        'social_support' : support,
        'isolation' : isolated,
        'self_harm_thoughts' : selfHarmThought,
        'eating_habits' : eatingHabits,
        'work_school_performance' : workSchoolPerformance
    }
    
    function handleSubmit () {
        axios.post("http://127.0.0.1:8000/predict/",{'response': response})
        .then((res)=>{
            console.log(res.data)
            const status = res.data
            if(status == 0)
            setResult("Poor")
            else if(status == 1)
            setResult("Fair")
            else if(status == 2)
            setResult("Neutral")
            else if(status == 3)
            setResult("Good")
            else
            setResult("Excellent")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect (()=> {
        if(sleepDuration==0 || (sleepDuration==1 && sleep==0))
        setSleepEnergy(1)
        else if((sleepDuration==1 && sleep==1) || (sleepDuration==2 && sleep==0))
        setSleepEnergy(0)
        else if((sleepDuration==2 && sleep==1) || (sleepDuration==2 && sleep==1))
        setSleepEnergy(2)
        else
        setSleepEnergy(3)
    },[sleep,sleepDuration])

    return (<div className="space-y-4">
        {!result && <div className="space-y-4">
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
            <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
                <QuestionHead number={3} />
                <div className="pl-8">
                    <p className="text-black">Have you faced any major stress or life change recently?</p>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="stress" value={"yes"} onClick={()=>setStress(1)}/><label>Yes</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="stress" value={"no"} onClick={()=>setStress(0)}/><label>No</label>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
                <QuestionHead number={4} />
                <div className="pl-8">
                    <p className="text-black">What is your average per day sleep duration?</p>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="sleepDuration" value={"no"} onClick={()=>setSleepDuration(0)}/><label>No Sleep</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="sleepDuration" value={"2"} onClick={()=>setSleepDuration(1)}/><label>2-4hrs/day</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="sleepDuration" value={"4"} onClick={()=>setSleepDuration(2)}/><label>4-6hrs/day</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="sleepDuration" value={"8"} onClick={()=>setSleepDuration(3)}/><label>6-8hrs/day</label>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
                <QuestionHead number={5} />
                <div className="pl-8">
                    <p className="text-black">Do you experience sound sleep?</p>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="sleep" value={"yes"} onClick={()=>setSleep(1)}/><label>Yes</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="sleep" value={"no"} onClick={()=>setSleep(0)}/><label>No</label>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
                <QuestionHead number={6} />
                <div className="pl-8">
                    <p className="text-black">How are you feeling Now ?</p>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="currentMood" value={"no"} onClick={()=>setMood(0)}/><label>Anxious</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="currentMood" value={"2"} onClick={()=>setMood(1)}/><label>Depressed</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="currentMood" value={"4"} onClick={()=>setMood(2)}/><label>Sad</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="currentMood" value={"8"} onClick={()=>setMood(3)}/><label>Neutral</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="currentMood" value={"8"} onClick={()=>setMood(3)}/><label>Happy</label>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
                <QuestionHead number={7} />
                <div className="pl-8">
                    <p className="text-black">Do you have Family support?</p>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="support" value={"yes"} onClick={()=>setSupport(1)}/><label>Yes</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="support" value={"no"} onClick={()=>setSupport(0)}/><label>No</label>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
                <QuestionHead number={8} />
                <div className="pl-8">
                    <p className="text-black">Do you feel Isolated ?</p>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="stress" value={"yes"} onClick={()=>setIsolated(1)}/><label>Yes</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" className="cursor-pointer" name="stress" value={"no"} onClick={()=>setIsolated(0)}/><label>No</label>
                    </div>
                </div>
            </div>
        </div>}
        {/* <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
            <QuestionHead number={9} />
            <div className="pl-8">
                <p className="text-black">Have you faced any major stress or life change recently?</p>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="stress" value={"yes"} onClick={()=>setStress(1)}/><label>Yes</label>
                </div>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="stress" value={"no"} onClick={()=>setStress(0)}/><label>No</label>
                </div>
            </div>
        </div>
        <div className="w-4/5 mx-auto border border-2 border-gray px-8 py-4">
            <QuestionHead number={10} />
            <div className="pl-8">
                <p className="text-black">Have you faced any major stress or life change recently?</p>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="stress" value={"yes"} onClick={()=>setStress(1)}/><label>Yes</label>
                </div>
                <div className="space-x-2">
                    <input type="radio" className="cursor-pointer" name="stress" value={"no"} onClick={()=>setStress(0)}/><label>No</label>
                </div>
            </div>
        </div> */}
        {result && <div className="text-[#199388] text-lg text-center">
            You Mental Health Status is {`${result}`}
        </div>}
       {!result && <div className="w-3/5 mx-auto">
            <button className="rounded-md bg-[#199388] p-4 text-center text-white w-full text-lg" onClick={handleSubmit}>Submit</button>
        </div> }
    </div>)
}