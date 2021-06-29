import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import BooksScreen from './screens/BooksScreen'
import VideosScreen from './screens/VideosScreen'
import VideoClassScreen from './screens/VideoClassScreen'
import SolutionsScreen from './screens/SolutionsScreen'
import LiveClassScreen from './screens/LiveClassScreen';

const App = () => {
  return (
    <Router>
      <Header/>
      <main>
        {/* <Container> */}
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/books' component={BooksScreen} exact/>
        <Route path='/videos' component={VideosScreen} exact/>
        <Route path='/videos/class' component={VideoClassScreen}/>
        <Route path='/solutions' component={SolutionsScreen} exact/>
        <Route path='/liveclass' component={LiveClassScreen} exact/>
        {/* </Container> */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
