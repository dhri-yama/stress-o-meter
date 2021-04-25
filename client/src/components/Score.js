import React from 'react'

const Score = ({res}) => {
    let para=""
    if(res<=10){
        para="Great news! If you scored a 5-10 on this quiz you are not stressed out. Awesome!"
    }else if (res<=20) {
        para="If you scored between a 11-20, this could possibly indicate that you are stressed out some, but you are most likely dealing with it well. Make sure you keep an eye on how stressed you are. If you feel the stress increasing, you should consider talking with someone."
    }else if (res<=30) {
        para="If you scored between a 21-30, this could possibly indicate you're moderately stressed out. You're probably noticing this stress on a daily basis. Maybe family and/or friends have commented on how stressed you seem. It's time to get this stress under control, take action now. Find the perfect counselor to help you."
    }else{
        para="If you scored between a 31-40, this clearly indicates you're very stressed out. You must be noticing this stress on a daily basis. Your family and/or friends have most likely commented on how stressed you seem. It's time to get this stress under control, take action now. Contact someone to help you learn how to handle the stress in your life."
    }
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-lg font-light">Your Scored a <span className="font-normal">{res}</span></h1>
            <p className=" mt-4 text-xl font-light text-center">{para}</p>
        </div>
    )
}

export default Score;
