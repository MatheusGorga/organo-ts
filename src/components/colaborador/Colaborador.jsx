import './colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Colaborador({ colaborador, cor, aoDeletar, aoFavoritar }) {
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
