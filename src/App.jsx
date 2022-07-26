import Footer from './componentes/Footer/Footer'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
import Repositorios from './componentes/Repositorios/Repositorios'
import Texto from './componentes/Textos/Textos'
import Titulo from './componentes/Titulo/Titulo'
import Imagem from './componentes/Imagem/Imagem'
import Projetos from './componentes/Projetos/Projetos'
import './App.css'
import Navbar from './componentes/Titulo/Titulo'
import Header from './componentes/Header/Header'
import Separador from './componentes/Separador/Separador'

function App() {

    return (
        <>
            <nav>
                <Titulo 
                    title="Meu Portifólio Reprograma"
                />
            </nav>

            <header>
                <Header
                    title="Prazer, Silvana"
                    description="Aluna Front-End {Reprograma}"
                />
                <Separador />
            </header>

            <section>
                <Apresentacao 
                    children="4 projetos feitos na Reprograma"
                />
                <Projetos />
            </section>

            <article>
                < Repositorios/>
            </article>

            <footer>
                <Footer> Página desenvolvida por Silvana Oliveira | Reprograma | 2022</Footer>
            </footer>
        </>
    )
}
  export default App