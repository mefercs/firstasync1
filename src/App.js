import {useSelector, useDispatch} from 'react-redux'
import { decrementDelayedThunk, incrementDelayedThunk } from './features/counter/countSlice'


export default function App (){ 
  const dispatch = useDispatch()
  const value = useSelector(state => state.counter.count)
  const  status = useSelector(state => state.counter.status)
  const delayedIncrement = ()=>{
    dispatch( incrementDelayedThunk() )
  }
  const delayedDecrement = ()=>{ 
    dispatch( decrementDelayedThunk() )
  }
  return ( <div>
    <p>The count is: {value}</p>
    { status==='loading' && <p>loading...</p> }
    <hr/>
    <button onClick={delayedIncrement}>increment</button>
    <button onClick={delayedDecrement}>decrement</button>
  </div> )
}
