
import'./App.css'
import Search from './Components/Search/Search';
import DetailsCard from './Components/DetailsCard/DetailsCard';
import UserCard from './Components/UserCard/UserCard';
import {Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Followers from './Components/Followers/Followers';



function App() {

  const [user, setUser] = useState({})

  const [username, setUsername] = useState('')

  return (
  
    <Container className='mt-5'>
      <h1> Data Fetching from Git-Hub </h1>
      <Search setUsername={setUsername}/>
      <h1> Statistics of User</h1>
      <DetailsCard setUser={setUser} user={user}/>
      <Row>
       <h1> Details of User</h1>
        <Col md={6}><UserCard username={username} setUser={setUser} user={user}/> </Col>
         <Col md={6}> <Followers user={user} /></Col>
      </Row>
     </Container>
  );
}

export default App;


