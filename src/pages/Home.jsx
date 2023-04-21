import Main from '../components/Main'
import Marcas from '../components/Marcas'
import CoverVideo from '../components/CoverVideo'
import Feature from '../components/Feature'
import Testemunho from '../components/Testemunho'
import TestemunhoDesk from '../components/TestemunhoDesk'



function Home() {
  return (
    <div>
      <Main/>
      <Marcas/>
      <CoverVideo/>
      <Feature/>
      <Testemunho/>
      <TestemunhoDesk/>
    </div>
  )
}

export default Home