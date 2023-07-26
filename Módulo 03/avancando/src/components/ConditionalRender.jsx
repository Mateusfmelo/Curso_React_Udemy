import { useState } from "react";

const ConditionalRender = () => {
  
    const [x] = useState(true)

    const [name, setName] = useState('João')

    return (
        <>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            {name === 'João' ? (
                <div>O nome é João</div>
            ) : (
                <div>Nome não encontrado</div>
            )}
            <button onClick={() => setName('João')}>Clica aqui!</button>
        </>
    )
}

export default ConditionalRender