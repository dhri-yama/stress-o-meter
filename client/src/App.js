import {useState} from 'react'
import Questions from './components/Questions'
import startingImage from './assets/images/startingImage.png'


function App() {
  const [start, setStart] = useState(0)
  return (
    <div className="App">
      <div className="bg-purple-600 h-56 mb-4 flex justify-center items-center">
        <h1 className="text-white text-4xl md:text-5xl">Stress-o-Meter</h1>
      </div>
      <div className="flex rounded-lg shadow-xl justify-center pb-12 bg-white pt-24 px-12 min-h-full md:mx-8 md:transform md:-translate-y-16">
        {start?
          <Questions/>:
          <div className="max-w-md lg:max-w-lg xl:max-w-2xl">
            <h2 className="text-center text-2xl text-gray-600">How Stressed Out Are You?</h2>
            <img src={startingImage} className="mt-4" alt=""/>
            <p className="text-center font-light text-lg mt-4">Take this quiz to see how stressed out you really are.</p>
            <button onClick={()=>{setStart(1)}}
              className=" bg-blue-400 hover:bg-blue-500 mt-4 text-white p-3 rounded-md w-full text-lg focus:outline-none"
            >Click Here To Start</button>
          </div>}
      </div>
    </div>
  );
}

export default App;
