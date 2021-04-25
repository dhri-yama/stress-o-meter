import React from 'react'
import data from './../questions.json'
import {useState} from 'react'
import Question from './Question'
import Score from './Score'
import Axios from 'axios'


const Questions = () => {
    const [currentques, setCurrentques] = useState(1)
    const [responses, setResponses] = useState([0,0,0,0,0,0,0,0,0,0])
    const [result, setResult] = useState(0)
    const [email, setEmail] = useState("")
    const evaluteScore=(e)=>{
        e.preventDefault();
        if (currentques===11) {
            let res=eval(responses.join('+'))   
            console.log(res)
            setResult(res)
            Axios.post("http://localhost:3001/api/insert",{
                email:email, 
                score:res,
            }).then(()=>{
                console.log("Insert Successfull")
        })
        }
    }
    return (
        <div className="mb-24 max-w-md lg:max-w-lg xl:max-w-2xl">{result===0?
            <div>
                {currentques<=10?<div>

                    <div className="relative pt-1 mb-6">
                        <div className="overflow-hidden h-1 mb-4 text-xs flex rounded">
                            <div style={{ width: `${currentques*10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
                        </div>
                    </div>

                    <Question content={data[currentques-1].content} changeques={setCurrentques} responses={responses} currentques={currentques} changeResponse={setResponses}/>
         
                    <div className="flex mt-4">
                        {currentques>1?<div style={{clipPath:"circle()"}} className="bg-gray-300  h-12 w-12 flex justify-center cursor-pointer">
                            <p className="text-5xl font-bold text-white transform -translate-y-1 -translate-x-1" 
                            onClick={()=>{setCurrentques(currentques-1)}}>&#60;</p>
                        </div>:""
                        }
                        <h4 className="m-auto">{currentques}/10</h4>
                    </div>
                </div>:
                <form onSubmit={evaluteScore}>
                    <input className="h-10 px-4 pl-6 bg-blue-50 mx-2 rounded-lg focus:outline-none" 
                        type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your Email"/>
                    <button className="bg-blue-400 px-4 h-10 rounded-lg focus:outline-none"
                        type="submit">Submit</button>
                </form>
                }
            </div>:<Score res={result}/>
            }
        </div>
    )
}

export default Questions
