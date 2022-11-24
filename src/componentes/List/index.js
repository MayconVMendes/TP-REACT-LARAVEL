
function Lista( {dados} ){
    return (
        <ul>
            { dados.map( (x) => {return <li key={x.id}>{x.nome}</li>} ) }
        </ul>
    )
}
export default Lista
