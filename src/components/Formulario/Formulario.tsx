import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';
import { IColaborador } from '../../shared/interfaces/IColaborador';
import { ITime } from '../../shared/interfaces/ITime';

interface  FormularioProps {
  times: string[]
  aoColaboradorCadastrado: (colaborador : IColaborador) => void
  cadastrarTime: (time: ITime) => void
}


function Formulario(props:FormularioProps) {

  const OPTIONS = props.times;
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  const aoSalvarNovoTime = (e: any) => {
    e.preventDefault();
    props.cadastrarTime({
      nome: nomeTime,
      cor: corTime,
    });

    setNomeTime('');
    setCorTime('');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          label='Nome'
          placeholder='Digite seu Nome'
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Input
          label='Cargo'
          placeholder='Digite seu Cargo'
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Input
          label='Imagem'
          placeholder='Informe o endereço da Imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label='Time'
          lista={OPTIONS}
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button><span>Criar Card</span></Button>
      </form>

      <form onSubmit={aoSalvarNovoTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Input
          label='Nome'
          placeholder='Digite o nome do time'
          obrigatorio
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Input
          label='Cor'
          type='color'
          placeholder='Digite a cor do time'
          obrigatorio
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Button><span>Criar Time</span></Button>
      </form>
    </section>
  );
}

export default Formulario;
