import { useState } from "react"

const message=[

]


function MyComponet(){
  const [count,setcount]=useState(0);
   const [step,setStep]=useState(1);
  const date=new Date(" june 21 2027")
  date.setDate(date.getDate() + count)
  return(
    <div>
      <div>
        <button onClick={()=>setcount((c)=> c-1)}>-</button>
        <span>count:{count}</span>
              <button onClick={()=>setcount((c)=> c+1)}>+</button>
      </div>
      <div>
        <button onClick={()=>setStep((c)=> c- step)}>-</button>
        <span>step:{step}</span>
              <button onClick={()=>setStep((c)=> c+ step)}>+</button>
      </div>
       <span><p>{count===0 ? "Today is" : count>0 ? `${count} days from tody is `:`${count} days ago was`}</p></span>
        <span><p>{date.toDateString()}</p></span>
    </div>
  )
}

export default MyComponet;

