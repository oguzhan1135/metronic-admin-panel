import { LayoutProvider } from './context/layoutContet'
import Layout from './layouts/layout'
import Router from './routes/index'
import "../src/globals.css"

function App() {

  return (
    <>
      <LayoutProvider>
        <Layout>
           <Router />
        </Layout>
      </LayoutProvider>

    </>
  )
}

export default App
