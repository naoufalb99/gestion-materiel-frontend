import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './pages/login'
import Layout from './components/layout'

// TODO: 
export const Home = () => {
  return (
    <Layout>
      <h2>Home Page</h2>
      <Link to='/login'>go to login page (Link) </Link>
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
