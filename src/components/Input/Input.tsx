import './Input.css';

interface InputProps {
  type: string,
  label: string,
  obrigatorio : boolean,
  placeholder : string,
  aoAlterado : (valor: string) => void,
  valor: string,
}


const Input = ({
  type = 'text',
  label,
  obrigatorio = false,
  placeholder,
  aoAlterado,
  valor,
} : InputProps) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        required={obrigatorio}
        placeholder={placeholder}
        onChange={(e) => aoAlterado(e.target.value)}
        value={valor}
      />
    </div>
  );
};

export default Input;
