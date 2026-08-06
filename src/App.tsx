import { useState, useEffect } from 'react'
import CriarUsuario from './CriarUsuario'
import Buscar from './Usuarios'

function App() {
    const [users, setUsers] = useState([])

    const buscar = async () => {
        const response = await fetch('http://localhost:8000/usuarios')
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        buscar()
    }, [])

    return (
        <div>
            <CriarUsuario onCriar={buscar} />
            <Buscar users={users} onDeletar={buscar} />
        </div>
    )
}

export default App