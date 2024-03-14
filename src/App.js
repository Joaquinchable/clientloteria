import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TableWrapper = styled.div`
  width: 25%;
  padding: 10px;
  border: 2px solid black;
  margin: 10px;
`;

const TableHeader = styled.h3`
  margin-bottom: 10px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const App = () => {
  const [numTablas, setNumTablas] = useState('');
  const [tablas, setTablas] = useState([]);

  const handleGenerarTablas = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/generar-tablas-loteria/${numTablas}`);
      setTablas(response.data);
    } catch (error) {
      console.error('Error al obtener las tablas de lotería:', error);
    }
  };

  return (
    <Container>
      <Title>Generador de Tablas de Lotería</Title>
      <Input
        type="number"
        placeholder="Número de Tablas"
        value={numTablas}
        onChange={(e) => setNumTablas(e.target.value)}
      />
      <Button onClick={handleGenerarTablas}>Generar Tablas</Button>
      <h2>Tablas de Lotería Generadas:</h2>
      <TableContainer>
        {tablas.map((tabla, index) => (
          <TableWrapper key={index}>
            <TableHeader>Tabla {index + 1}:</TableHeader>
            <CardGrid>
              {tabla.map((carta, cartaIndex) => (
                <div key={cartaIndex}>
                  <CardImage src={`/img/${carta.imagen}`} alt={carta.nombre} />
                </div>
              ))}
            </CardGrid>
          </TableWrapper>
        ))}
      </TableContainer>
    </Container>
  );
};

export default App;
