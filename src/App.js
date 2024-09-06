import './App.css';
import AXlogo from '/Users/xxepicgamerxx/Desktop/CS/tnx-website/src/ax_tnx_logo.png';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import the page components
import Home from './Pages/Home';
import About from './Pages/About';
import OurChapter from './Pages/OurChapter';
import Philanthropy from './Pages/Philanthropy';
import Social from './Pages/Social';
import Events from './Pages/Events';

function App() {
  return (
    <Router>
      <Box className="App" bg="lavender" minHeight="100vh">
        <Box bg="white" w="100%" p={4} boxShadow="md">
          <Flex justifyContent="flex-start" alignItems="center">
            <img src={AXlogo} alt="logo" className="App-logo" />
          </Flex>
          <Flex justifyContent="flex-end">
            {/* Use Link from react-router-dom to link to each page */}
            <Link to="/home"><Text mx={4} cursor="pointer">HOME</Text></Link>
            <Link to="/about"><Text mx={4} cursor="pointer">ABOUT</Text></Link>
            <Link to="/our-chapter"><Text mx={4} cursor="pointer">OUR CHAPTER</Text></Link>
            <Link to="/philanthropy"><Text mx={4} cursor="pointer">PHILANTHROPY</Text></Link>
            <Link to="/social"><Text mx={4} cursor="pointer">SOCIAL</Text></Link>
            <Link to="/events"><Text mx={4} cursor="pointer">EVENTS</Text></Link>
          </Flex>
        </Box>

        {/* Define routes for each component */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-chapter" element={<OurChapter />} />
          <Route path="/philanthropy" element={<Philanthropy />} />
          <Route path="/social" element={<Social />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
