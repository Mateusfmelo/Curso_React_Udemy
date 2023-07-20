import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Mateus', 'Pedro', 'Josias', 'Maria'])

    const [users] = useState ([
        {id:1, name:'Mateus', age: 22},
        {id:2, name:'Marcos', age: 23},
        {id:3, name:'Igor', age: 24},
        {id:4, name:'Fábio', age: 25}
    ])

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
    </div>
    </>
  )
}

export default ListRender