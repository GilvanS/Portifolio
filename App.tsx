import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Welcome } from './components/Welcome';
import { CodeLayout } from './components/Layout';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Readme } from './components/Readme';

// Generic placeholder for projects/theme
const Placeholder = ({ title }: { title: string }) => (
    <div className="p-8 text-gray-400 font-mono">
        <h1 className="text-xl text-keyword">const <span className="text-function">Page</span> = <span className="text-string">"{title}"</span>;</h1>
        <p className="mt-4 text-comment">// Conteúdo em desenvolvimento...</p>
    </div>
);

function App() {
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [openFiles, setOpenFiles] = useState<string[]>([]);

  const handleFileSelect = (fileId: string) => {
    if (!openFiles.includes(fileId)) {
      setOpenFiles([...openFiles, fileId]);
    }
    setActiveFile(fileId);
  };

  const handleTabClose = (fileId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter(id => id !== fileId);
    setOpenFiles(newOpenFiles);
    
    if (activeFile === fileId) {
      if (newOpenFiles.length > 0) {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFile(null);
      }
    }
  };

  const renderContent = () => {
    switch (activeFile) {
      case 'sobre.json': return <About />;
      case 'experiencias.js': return <Experience />;
      case 'habilidades.tsx': return <Skills />;
      case 'contato.py': return <Contact />;
      case 'readme.md': return <Readme />;
      case 'projetos.js': return <Placeholder title="Projetos" />;
      case 'theme.css': return <Placeholder title="Theme Config" />;
      default: return <Welcome />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-editor-bg text-gray-300 overflow-hidden font-sans">
      {/* Activity Bar (Leftmost strip) */}
      <div className="w-12 bg-activity-bg flex flex-col items-center py-4 justify-between border-r border-[#1e1e1e] z-10">
        <div className="flex flex-col gap-6">
            <div className="cursor-pointer border-l-2 border-white w-full flex justify-center py-1">
                <span className="material-symbols-outlined text-white text-[24px]">files</span>
            </div>
            <div className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">search</span>
            </div>
            <div className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">source_control</span>
            </div>
            <div className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">bug_report</span>
            </div>
            <div className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">extension</span>
            </div>
        </div>
        <div className="flex flex-col gap-6 mb-2">
            <div className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">account_circle</span>
            </div>
            <div className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">settings</span>
            </div>
        </div>
      </div>

      {/* Sidebar Explorer */}
      <Sidebar activeFile={activeFile} onFileSelect={handleFileSelect} />

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-editor-bg">
        <TopBar 
            activeFile={activeFile} 
            openFiles={openFiles} 
            onTabClick={setActiveFile} 
            onTabClose={handleTabClose} 
        />
        
        {/* Editor Content */}
        <div className="flex-1 relative">
            {activeFile ? (
                <CodeLayout>
                    {renderContent()}
                </CodeLayout>
            ) : (
                <Welcome />
            )}
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-status-bg text-white text-xs flex items-center px-4 justify-between select-none">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 h-full cursor-pointer">
                    <span className="material-symbols-outlined text-[12px]">source_control</span>
                    <span>main*</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 h-full cursor-pointer">
                    <span className="material-symbols-outlined text-[12px]">sync</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 h-full cursor-pointer">
                   <span className="material-symbols-outlined text-[12px]">error</span>
                   <span>0</span>
                   <span className="material-symbols-outlined text-[12px] ml-1">warning</span>
                   <span>0</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">Ln 12, Col 45</span>
                <span className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">UTF-8</span>
                <span className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">TypeScript React</span>
                <span className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">Prettier</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;