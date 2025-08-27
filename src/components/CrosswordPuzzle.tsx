'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface CrosswordPuzzleProps {
  title?: string;
}

export function CrosswordPuzzle({ title = "Spread the Cheer!" }: CrosswordPuzzleProps) {
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  const handleCellClick = (cellId: string) => {
    const newSelected = new Set(selectedCells);
    if (newSelected.has(cellId)) {
      newSelected.delete(cellId);
    } else {
      newSelected.add(cellId);
    }
    setSelectedCells(newSelected);
  };

  // Define the grid structure based on your image
  // Using a 5x5 grid with specific cells active
  const gridStructure = [
    [null, { type: 'plus', id: '0-1' }, { type: 'cell', id: '0-2' }, { type: 'cell', id: '0-3' }, { type: 'plus', id: '0-4' }],
    [null, { type: 'cell', id: '1-1' }, { type: 'cell', id: '1-2' }, { type: 'cell', id: '1-3' }, { type: 'cell', id: '1-4' }],
    [{ type: 'hockey-sticks', id: '2-0' }, { type: 'cell', id: '2-1' }, null, null, null],
    [{ type: 'cell', id: '3-0' }, { type: 'cell', id: '3-1' }, null, null, null],
    [{ type: 'plus', id: '4-0' }, { type: 'cell', id: '4-1' }, { type: 'cell', id: '4-2' }, { type: 'cell', id: '4-3' }, { type: 'hockey-sticks', id: '4-4' }],
    [{ type: 'avatar', id: '5-0' }, { type: 'cell', id: '5-1' }, null, null, null],
    [{ type: 'cell', id: '6-0' }, { type: 'cell', id: '6-1' }, null, null, null],
    [{ type: 'plus', id: '7-0' }, { type: 'cell', id: '7-1' }, { type: 'cell', id: '7-2' }, { type: 'cell', id: '7-3' }, null]
  ];

  const renderCell = (cell: any, rowIndex: number, colIndex: number) => {
    if (!cell) return <div key={`${rowIndex}-${colIndex}`} className="w-12 h-12" />;

    const { type, id } = cell;
    const isSelected = selectedCells.has(id);

    switch (type) {
      case 'cell':
        return (
          <motion.div
            key={id}
            onClick={() => handleCellClick(id)}
            className={`w-12 h-12 border-2 cursor-pointer transition-all duration-200 ${
              isSelected 
                ? 'bg-blue-200 border-blue-400' 
                : 'bg-cyan-400 border-cyan-500 hover:bg-cyan-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        );

      case 'plus':
        return (
          <motion.div
            key={id}
            onClick={() => handleCellClick(id)}
            className={`w-12 h-12 rounded-full cursor-pointer flex items-center justify-center text-2xl font-bold transition-all duration-200 ${
              isSelected
                ? 'bg-blue-500 text-white'
                : 'bg-cyan-400 text-white hover:bg-cyan-500'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            +
          </motion.div>
        );

      case 'hockey-sticks':
        return (
          <div key={id} className="w-12 h-12 flex items-center justify-center">
            <div className="relative">
              {/* Simple hockey sticks representation */}
              <div className="text-amber-700 text-2xl transform rotate-45">🏒</div>
              <div className="text-amber-700 text-2xl transform -rotate-45 absolute top-0 left-0">🏒</div>
            </div>
          </div>
        );

      case 'avatar':
        return (
          <motion.div
            key={id}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => handleCellClick(id)}
          >
            <Image
              src="/pims/a-bull.webp"
              alt="Hockey Player"
              width={48}
              height={48}
              className="object-cover"
            />
          </motion.div>
        );

      default:
        return <div key={id} className="w-12 h-12" />;
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-200 rounded-2xl max-w-md mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-6 text-center"
      >
        {title}
      </motion.h2>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-5 gap-1 bg-gray-300 p-2 rounded-lg"
      >
        {gridStructure.map((row, rowIndex) =>
          row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex))
        )}
      </motion.div>

      {/* Instructions */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-600 mt-4 text-center max-w-xs"
      >
        Click the cells and plus symbols to interact with the crossword puzzle!
      </motion.p>
    </div>
  );
}
