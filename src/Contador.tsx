import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState<number>(0)

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
            <button onClick={() => setContador(contador - 1)}>
                Decrementar
            </button>
            <button onClick={() => setContador(0)}>
                Resetar
            </button>
        </div>
    )
}

export default Contador