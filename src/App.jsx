import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Card from './components/Card/Card'
import Soma from './components/Soma/Soma'
import Fromulario from './components/Formulario/Formulario'
import AlertMessage from './components/AletMenssage/AlertMessage'
import { TemaProvider } from './contexts/tema'




function App() {

  const user = {
    nome: "fulano",
    email: "fulano@fulano"
  }

  const listaDeViagens = [
    {
      id: 123,
      img: "https://fastly.picsum.photos/id/803/200/300.jpg?hmac=v-3AsAcUOG4kCDsLMlWF9_3Xa2DTODGyKLggZNvReno",
      alt: "card1",
      tituloDaViagem: "viagem para portugal",
      descricaoDaViagem: "viagem de 11 dias ",
      linkDaViagem: "https://www.google.com.br"
    },

    {
      id: 456,
      img: "https://fastly.picsum.photos/id/803/200/300.jpg?hmac=v-3AsAcUOG4kCDsLMlWF9_3Xa2DTODGyKLggZNvReno",
      alt: "card2",
      tituloDaViagem: "viagem para China",
      descricaoDaViagem: "viagem de 20 dias ",
      linkDaViagem: "https://www.google.com.br"
    },

    {
      id: 789,
      img: "https://fastly.picsum.photos/id/803/200/300.jpg?hmac=v-3AsAcUOG4kCDsLMlWF9_3Xa2DTODGyKLggZNvReno",
      alt: "card3",
      tituloDaViagem: "viagem para Italia",
      descricaoDaViagem: "viagem de 10 dias ",
      linkDaViagem: "https://www.youtube.com/"
    },


  ]



  return (
    <div>
      <TemaProvider>

        <AlertMessage user={user.nome} />
        <AlertMessage user={user.email} />

        <Header user={user.nome} />

        <Soma num1={10} num2={20} />

        <Fromulario />
        <div>

          <ul>
            {
              listaDeViagens.map(
                item => <Card trip={item} key={item.id} user={user} />
              )
            }
          </ul>
        </div>

        <Footer />

      </TemaProvider>
    </div>
  )
}

export default App
