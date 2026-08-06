import { useState } from "react"

type CriarUsuarioProps = {
    onCriar: () => void
}

function CriarUsuario({ onCriar }: CriarUsuarioProps) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)

    const handleSubmit = async () => {
        await fetch("http://localhost:8000/usuarios", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, idade })
        })
        onCriar()
    }

    return (
        <div>
            <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                value={idade}
                onChange={(e) => setIdade(Number(e.target.value))}
                placeholder="Idade"
                type="number"
            />
            <button onClick={handleSubmit}>Criar usuário</button>
        </div>
    )
}

export default CriarUsuario