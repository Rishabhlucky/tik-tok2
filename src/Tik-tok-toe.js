import React ,{ useState} from 'react'
import Squre from './Squre';


const Tiktiktoe = () => {
    const[state ,setState] = useState(Array(9).fill(null));
    const [isxTurn, setIsxTurn] =useState(true);
     
    const checkwinner =()=>{
   const winnerloggic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
   ];

   for (let logic of winnerloggic){
    const [a,b,c]=logic
    if(state[a] !==null && state[a]===state[b] && state[a]===state[c]){
      return state[a]
    }
   }  return false;
 } 
 const isWinner =checkwinner()
    const hendleclick = (index)=>{
      if(state[index] !==null){
        return;
      }
       const copyState = [...state];
        copyState[index]= isxTurn ? "x" :"O";
        setState(copyState);
        setIsxTurn(!isxTurn);
       }
       const playAgain =()=>{
        setState(Array(9).fill(null))
       }
  return (
    <div className='tik-tok-game'>
      {isWinner ? <><span>{isWinner} has won </span>
      <p>Made By Rishabh</p>
      </> :
      <>
      <h2> Player ={'>'} "<span>[ {isxTurn ? "X" : "O"} ]</span>" Turn </h2>
      <div className='tiktok-div'>
        <Squre clicked={() => hendleclick(0)} value={state[0]}/>
        <Squre clicked={() => hendleclick(1)} value={state[1]}/>
        <Squre clicked={() => hendleclick(2)} value={state[2]}/>
      </div>
      <div className='tiktok-div'>
        <Squre clicked={() => hendleclick(3)} value={state[3]}/>
        <Squre clicked={() => hendleclick(4)} value={state[4]}/>
        <Squre clicked={() => hendleclick(5)} value={state[5]}/>
      </div>
      <div className='tiktok-div'>
        <Squre clicked={() => hendleclick(6)} value={state[6]}/>
        <Squre clicked={() => hendleclick(7)} value={state[7]}/>
        <Squre clicked={() => hendleclick(8)} value={state[8]}/>
      </div>
      </>}
      <button onClick={playAgain}>Play again</button>
    </div>
  )
}

export default Tiktiktoe;