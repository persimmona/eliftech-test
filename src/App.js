import { Container } from '@mui/material';
import React from 'react';
import AppRouter from './components/AppRouter';
import './styles/index.css';

function App() {
  return (
    <Container maxWidth="lg">
        <AppRouter />
    </Container>
  );
}

export default App;
