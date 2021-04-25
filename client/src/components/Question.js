import React from 'react'
import {useState} from 'react'
import check from './../assets/images/check.png'

const Question = ({content,currentques, responses, changeResponse,changeques}) => {
    const [history, setHistory] = useState([[false,false,false,false,false]])
    const change= (point)=>{
        let temp=responses
        temp[currentques-1]=point
        let his=[false,false,false,false,false]
        his[point-1]=true
        let prev=history.slice(0,currentques-1)
        prev.push(his)
        setHistory([...prev,[false,false,false,false,false]])
        changeResponse(temp)
        changeques(currentques+1)
    }
    return (
        <form className="text-lg">
            <h2 className="text-xl text-center text-gray-600 mb-4 lg:text-2xl xl:text-3xl">{content}</h2>
            

            <div style={{backgroundColor:"#e4dddd"}}  onClick={()=>{change(1)}} className="cursor-pointer rounded-lg h-12 flex items-center px-2 mb-2">
                <div className="bg-white h-8 w-8 rounded">{history[currentques-1][0]? <p className="flex justify-center items-center"><img src={check} alt=""/></p>:""}</div>
                <p className="mx-4">Never</p>
            </div>
            <div style={{backgroundColor:"#e4dddd"}}  onClick={()=>{change(2)}} className="cursor-pointer rounded-lg h-12 flex items-center px-2 mb-2">
                <div className="bg-white h-8 w-8 rounded">{history[currentques-1][1]? <p className="flex justify-center items-center"><img src={check} alt=""/></p>:""}</div>
                <p className="mx-4">Almost Never</p>
            </div>
            <div style={{backgroundColor:"#e4dddd"}}  onClick={()=>{change(3)}} className="cursor-pointer rounded-lg h-12 flex items-center px-2 mb-2">
                <div className="bg-white h-8 w-8 rounded">{history[currentques-1][2]? <p className="flex justify-center items-center"><img src={check} alt=""/></p>:""}</div>
                <p className="mx-4">Sometime</p>
            </div>
            <div style={{backgroundColor:"#e4dddd"}}  onClick={()=>{change(4)}} className="cursor-pointer rounded-lg h-12 flex items-center px-2 mb-2">
                <div className="bg-white h-8 w-8 rounded">{history[currentques-1][3]? <p className="flex justify-center items-center"><img src={check} alt=""/></p>:""}</div>
                <p className="mx-4">Fairly Often</p>
            </div>
            <div style={{backgroundColor:"#e4dddd"}}  onClick={()=>{change(5)}} className="cursor-pointer rounded-lg h-12 flex items-center px-2 mb-2">
                <div className="bg-white h-8 w-8 rounded">{history[currentques-1][4]? <p className="flex justify-center items-center"><img src={check} alt=""/></p>:""}</div>
                <p className="mx-4">Very Often</p>
            </div>
        </form>
    )
}

export default Question;
