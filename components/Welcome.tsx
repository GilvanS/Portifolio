import React from 'react';

export const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-editor-bg text-gray-400 select-none animate-fade-in">
      <div className="mb-8 opacity-80">
        <span className="material-symbols-outlined text-9xl text-gray-600">terminal</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-200 mb-4 tracking-tight">GILVAN SOUSA <span className="text-primary">QA</span></h1>
      <p className="text-lg text-gray-500 mb-8 font-mono">Bem-vindo ao meu Portfólio!</p>
      
      <div className="flex flex-col gap-2 text-sm max-w-md">
        <p className="flex items-center gap-3">
          <span className="text-gray-600 w-24 text-right">Começar</span>
          <span className="text-gray-300">Selecione um arquivo no Explorer</span>
        </p>
        <p className="flex items-center gap-3">
          <span className="text-gray-600 w-24 text-right">Comandos</span>
          <span className="text-gray-300">Ctrl + Shift + P</span>
        </p>
        <p className="flex items-center gap-3">
          <span className="text-gray-600 w-24 text-right">Pesquisar</span>
          <span className="text-gray-300">Ctrl + Shift + F</span>
        </p>
      </div>
    </div>
  );
};