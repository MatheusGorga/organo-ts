import './ListaSuspensa.css';

function ListaSuspensa(props) {
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
