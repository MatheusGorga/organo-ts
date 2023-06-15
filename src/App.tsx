import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import { v4 as uuidv4 } from 'uuid'
import './index.css'
import { IColaborador } from './shared/interfaces/IColaborador';
import { ITime } from './shared/interfaces/ITime';
import Rodape from './components/Rodape/Rodape';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',

    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',

    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',

    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',

    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',

    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',

    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',

    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome,
      favorito: false
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial)


  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  const cadastrarTime = (novoTime: ITime) => {
    setTimes([...times, {
      ...novoTime,
      id: uuidv4()
    }])
  }


  const deletarColaborador = (id: string) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorTime = (cor: string, id: string) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }


  const resolverFavorito = (id: string) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  const [viewForm, setViewForm] = useState(false)

  return (
    <div >
      <Banner  endereco='/assets/banner.png' textoAlternativo='Banner do organo'/>
      {viewForm && <>
        <Formulario
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
          cadastrarTime={cadastrarTime}
        />
      </>}

      <section className='section-org'>

        <span />

        <h3
          style={{
            borderBottom: '4px solid #6278F7',
          }}
        >
          Minha Organização
        </h3>

        <span onClick={() => setViewForm(!viewForm)} >
          <img src='/assets/button-png.png' alt='botao' />
        </span>

      </section>

      {times.map((time, indice) =>
        <Time
          key={indice}
          time={time}
          colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
          aoFavoritar={resolverFavorito}
        />)}

      <Rodape />


    </div>
  );
}

export default App;
