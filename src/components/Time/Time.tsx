import hexToRgba from 'hex-to-rgba';
import './Time.css';
import { IColaborador } from '../../shared/interfaces/IColaborador';
import Colaborador from '../Colaborador/Colaborador';


interface TimeProps{
  colaboradores : IColaborador[] ,
  mudarCor : (valor: string, valor2: string) => void,
  aoDeletar : (valor: string) => void,
  aoFavoritar: (valor: string) => void
  time: {
    id: string
    nome: string
    cor: string
  }
}


function Time({ time, mudarCor, aoDeletar, colaboradores, aoFavoritar } : TimeProps) {

  return (
    colaboradores.length > 0 && (
      <section
        className='time'
        style={{
          backgroundImage: 'url(/assets/fundo.png)',
          backgroundColor: hexToRgba(`${time.cor}`, '0.6'),
        }}
      >
        <input
          type='color'
          value={time.cor}
          onChange={(e) => mudarCor(e.target.value, time.id)}
          className='input-color'
        />
        <h3
          style={{
            borderBottom: '4px solid' + time.cor,
          }}
        >
          {time.nome}
        </h3>

        <div className='colaboradores'>
          {colaboradores.map((colaborador :any, indice :any ) => {
            return (
              <Colaborador
                aoFavoritar={aoFavoritar}
                key={indice}
                colaborador={colaborador}
                cor={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
}

export default Time;
