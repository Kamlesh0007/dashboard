import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Fixeddrawer from './components/Fixeddrawer';
import Box from '@mui/material/Box';
import Home from './components/Home';
import FormDialog from './components/FormDialog';
import { useState } from 'react';
function App() {
  const [openstate, setOpenstate] = useState(false)
  return (
    <Box sx={{display:"flex"}} bgcolor="primary">
      <Fixeddrawer/>
      <Box
 
        sx={{ flexGrow: 1, bgcolor: 'background.default', m: 3 }}
      >
        <FormDialog open={openstate}/>
       <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/form" element={<FormDialog/>} />

   
      </Routes>
    </Router>
    </Box>
    </Box>
  );
}

export default App;
