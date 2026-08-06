type UsuariosProps = {
    users: any[]
    onDeletar: () => void
}

function Buscar({ users, onDeletar }: UsuariosProps) {
    const deletar = async (id: number) => {
        await fetch(`http://localhost:8000/usuarios/${id}`, {
            method: 'DELETE'
        })
    onDeletar()
}
    return (
        <div>
            {users.map(users => (
                <p key={users.id}>{users.nome}  <button onClick={() => deletar(users.id)}>Deletar</button></p>
            ))}
        </div>
    )
}

export default Buscar