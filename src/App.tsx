import { RootState } from "./store/userStore.tsx"
import React, { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import userStore from "./store/userStore.tsx"
import userType from "./store/userType.tsx"
// import userSlice from './store/user';
// import { increment, incrementByAmount } from "./store/counter.tsx";
import { addUser, redactUser, removeUser } from "./store/user.tsx";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import { useParams } from "react-router";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<Redactor />}/>
          {/* <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
    </BrowserRouter>
  )
}

// const Counter: React.FC = () => {
//   const count = useSelector((state: RootState) => state.counter.value)
//   const dispatch = useDispatch();
//   const [value, setValue] = useState(0);

//   const onIncrement = () => {
//     dispatch(increment());
//   }

//   // const onIncreaseByAmount: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//   //   const { value } = e.target;

//   //   dispatch(increaseByAmount({amount: +value}));
//   // }

//   const onIncreaseByAmount = () => {
//     dispatch(incrementByAmount({amount: value}));
//   }

//   const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     setValue(+e.target.value);
//   }

//   return (
//     <div>
//     <button onClick={onIncrement}>+</button>
//     <span>{count}</span>
//     <input type="numbers" onChange={onInputChange}></input>
//     <button onClick={onIncreaseByAmount}>increase by amount</button>
//     </div>
//   )
// }

const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.value)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const newUser = {
    id: Date.now(),
    name: '',
    age: 0,
    gender: ''
  }

  const goToUser = (id: number) => {
    navigate(`/user/${id}`)
  }

  return (
    <div>
      <button onClick={() => dispatch(addUser(newUser))}> Add user</button>
      <>
        {users.map((user: userType) => (
          <ul key={user.name}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.gender}</li>
            <button onClick={() => dispatch(removeUser({id: user.id}))}>Delete</button>
            <button onClick={() => goToUser(user.id)}>Redactor</button>
          </ul>
        ))}
      </>
    </div>
  )
}

function Redactor() {
  const { id } = useParams()
  const userId : number = Number(id)

  const navigate = useNavigate()

  const goToList = () => {
    navigate(`/`)
  }

  const [user, setUser] = useState({
    id: userId,
    name: '',
    age: 0,
    gender: ''
  })
  return (
    <div>
      <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}></input>
      <input type="number" onChange={(e) => setUser({...user, age: +e.target.value})}></input>
      <input type="text" onChange={(e) => setUser({...user, gender: e.target.value})}></input>
      <button onClick={() => {userStore.dispatch(redactUser({user: user})); goToList()}}>Save</button>
    </div>
  )
}

export default App
