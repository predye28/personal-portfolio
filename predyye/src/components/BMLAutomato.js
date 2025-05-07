import React, { useEffect, useRef, useState } from 'react';

const BMLAutomaton = () => {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [iteration, setIteration] = useState(0);
  const animationRef = useRef(null);
  const gridRef = useRef(null);

  const ROWS = 80;
  const COLS = 280;
  const EMPTY_PERCENTAGE = 60;
  const MAX_ITERATIONS = 1800;
  const CELL_SIZE = 1.5;
  const FRAME_RATE = 60; 
   
  const backgroundColor = '#001F3F';
  const RED_COLOR = '#000000';  // Color para las celdas rojas
  const BLUE_COLOR = '#EAD8B1';

  const EMPTY = 0;
  const RED = 1;  
  const BLUE = 2; 

  // Inicializar la cuadrícula
  const initializeGrid = () => {
    const grid = Array(ROWS).fill().map(() => Array(COLS).fill(EMPTY));
    const totalCells = ROWS * COLS;
    const emptyCells = Math.floor(totalCells * EMPTY_PERCENTAGE / 100);
    const filledCells = totalCells - emptyCells;
    const redCells = Math.floor(filledCells / 2);
    const blueCells = filledCells - redCells;
    
    // Colocar celdas al azar
    let cellsToFill = filledCells;
    
    while (cellsToFill > 0) {
      const row = Math.floor(Math.random() * ROWS);
      const col = Math.floor(Math.random() * COLS);
      
      if (grid[row][col] === EMPTY) {
        if (cellsToFill > blueCells) {
          grid[row][col] = RED;
        } else {
          grid[row][col] = BLUE;
        }
        cellsToFill--;
      }
    }
    
    return grid;
  };

  // Actualizar la cuadrícula según las reglas del BML
  const updateGrid = (currentGrid) => {
    const newGrid = currentGrid.map(row => [...row]);
    
    // Mover celdas rojas (primero hacia abajo)
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (currentGrid[row][col] === RED) {
          const nextRow = (row + 1) % ROWS;
          if (currentGrid[nextRow][col] === EMPTY) {
            newGrid[row][col] = EMPTY;
            newGrid[nextRow][col] = RED;
          }
        }
      }
    }
    
    const tempGrid = newGrid.map(row => [...row]);
    
    // Mover celdas azules (después hacia la derecha)
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (tempGrid[row][col] === BLUE) {
          const nextCol = (col + 1) % COLS;
          if (tempGrid[row][nextCol] === EMPTY) {
            newGrid[row][col] = EMPTY;
            newGrid[row][nextCol] = BLUE;
          }
        }
      }
    }
    
    return newGrid;
  };

  // Dibujar la cuadrícula en el canvas
  const drawGrid = (grid, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const cellValue = grid[row][col];
        
        if (cellValue !== EMPTY) {
            ctx.fillStyle = cellValue === RED ? RED_COLOR : BLUE_COLOR;
            ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }
  };

  // Función de animación
  const animate = () => {
    if (iteration >= MAX_ITERATIONS) {
      setIsRunning(false);
      return;
    }
    
    gridRef.current = updateGrid(gridRef.current);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      drawGrid(gridRef.current, ctx);
    }
    
    setIteration(prev => prev + 1);
    animationRef.current = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000 / FRAME_RATE);
  };

  // Inicializar al montar el componente
  useEffect(() => {
    // Verificamos que estamos en el navegador (client-side)
    if (typeof window !== 'undefined') {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = COLS * CELL_SIZE;
        canvas.height = ROWS * CELL_SIZE;
        const ctx = canvas.getContext('2d');
        
        gridRef.current = initializeGrid();
        drawGrid(gridRef.current, ctx);
      }
    }
    
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  // Controlar la ejecución de la animación
  useEffect(() => {
    if (isRunning) {
      animate();
    } else if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  }, [isRunning]);

  const toggleSimulation = () => {
    setIsRunning(prev => !prev);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    setIteration(0);
    
    if (typeof window !== 'undefined') {
      gridRef.current = initializeGrid();
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        drawGrid(gridRef.current, ctx);
      }
    }
  };

  return (
    <div className="bml-automaton">
      
      <div className="bml-canvas-container" >
        <canvas 
          ref={canvasRef} 
          style={{ 
            border: '1px solid #333',
            maxWidth: '100%',
            height: 'auto',
            background: backgroundColor
          }}
        />
      </div>
      
      
    </div>
  );
};

/**
 * <div className="bml-info">
        <h3>Autómata Biham-Middleton-Levine</h3>
        <p>Tamaño: {ROWS} filas × {COLS} columnas</p>
        <p>Espacio libre: {EMPTY_PERCENTAGE}%</p>
        <p>Iteración: {iteration} / {MAX_ITERATIONS}</p>
      </div>

    <div className="bml-controls">
        <button onClick={toggleSimulation}>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={resetSimulation}>Reiniciar</button>
      </div>
 */

export default BMLAutomaton;