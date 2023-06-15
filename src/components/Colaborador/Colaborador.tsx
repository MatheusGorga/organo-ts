import { IColaborador } from '../../shared/interfaces/IColaborador';
import './colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface ColaboradorProps {
  colaborador: IColaborador,
  cor: string,
  aoDeletar: (valor: string) => void,
  aoFavoritar: (valor: string) => void
}


function Colaborador({ colaborador, cor, aoDeletar, aoFavoritar } : ColaboradorProps) {
  const corFundocard = cor;

  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  return (
    <div className='card-colaborador' key={colaborador.id}>
      <AiFillCloseCircle
        size={24}
        className='deletar'
        onClick={() => aoDeletar(colaborador.id)}
      />

      <div
        className='cabecalho'
        style={{
          backgroundColor: corFundocard,
        }}
      >
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className='colaborador-rodape'>
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>

        <div className='favoritar'>
          {colaborador.favorito ? (
            <AiFillHeart size={24} onClick={favoritar} />
          ) : (
            <AiOutlineHeart size={24} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Colaborador;
