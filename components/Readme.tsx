import React from 'react';

export const Readme: React.FC = () => {
    return (
        <div className="p-8 max-w-4xl text-gray-300 font-sans prose prose-invert">
            <h1 className="text-3xl font-bold mb-4">Gilvan Sousa QA Portfolio</h1>
            <p className="mb-4">
                Bem-vindo ao meu portfólio interativo. Este site foi construído para simular um ambiente de desenvolvimento (IDE), 
                refletindo meu dia a dia trabalhando com código e automação.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">Sobre este projeto</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
                <li>Construído com React e TailwindCSS</li>
                <li>Design inspirado no VS Code</li>
                <li>Tema escuro para conforto visual</li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-2">Como navegar</h2>
            <p className="mb-4">
                Use a barra lateral (Explorer) à esquerda para abrir os arquivos. Cada arquivo representa uma seção do meu portfólio.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
                <li><code className="bg-[#2d2d2d] px-1 rounded">sobre.json</code>: Informações pessoais e resumo</li>
                <li><code className="bg-[#2d2d2d] px-1 rounded">projetos.js</code>: Lista de projetos e contribuições</li>
                <li><code className="bg-[#2d2d2d] px-1 rounded">habilidades.tsx</code>: Stack tecnológica</li>
                <li><code className="bg-[#2d2d2d] px-1 rounded">contato.py</code>: Canais de comunicação</li>
            </ul>
        </div>
    )
}