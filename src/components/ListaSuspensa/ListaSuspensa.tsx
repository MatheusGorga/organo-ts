import './ListaSuspensa.css';

interface ListaSuspensaProps {
  label: string
  lista: string[]
  obrigatorio: boolean
  valor: string
  aoAlterado: (valor:string) => void
}



function ListaSuspensa(props: ListaSuspensaProps) {
 
  return (
    <div className='ListaSuspensa'>
      <label>{props.label}</label>
      <select
        value={props.valor}
        onChange={(e) => props.aoAlterado(e.target.value)}
        required={props.obrigatorio}
      >
        {props.lista.map((i) => (
          <option key={i}> {i} </option>
        ))}
      </select>
    </div>
  );
}

export default ListaSuspensa;
