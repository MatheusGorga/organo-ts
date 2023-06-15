import './rodape.css';

function Rodape() {
  return (
    <div className='rodape'>
      <div className='rodape-itens'>
        <section>
          <img src='/assets/fb.png' alt='' />
          <img src='/assets/tw.png' alt='' />
          <img src='/assets/ig.png' alt='' />
        </section>
        <section>
          <img src='/assets/logo.png' alt='' />
        </section>
        <section>
          <h5> Desenvolvido por Alura.</h5>
        </section>
      </div>
    </div>
  );
}

export default Rodape;
