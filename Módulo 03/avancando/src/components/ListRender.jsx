import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Mateus', 'Pedro', 'Josias', 'Maria'])

    const [users, setUsers] = useState ([
        {id:1, name:'Mateus', age: 22},
        {id:2, name:'Marcos', age: 23},
        {id:3, name:'Igor', age: 24}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <>
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}: {user.age} anos</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
    </>
  )
}

export default ListRender