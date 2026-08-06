type PerfilProps = {
    nome: string
    profissao: string
    curso: string
}

function Perfil({nome, profissao, curso}: PerfilProps) {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <p>Profissão: {profissao}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default Perfil