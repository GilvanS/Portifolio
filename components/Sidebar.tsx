import React, { useState } from 'react';
import { FileNode } from '../types';

interface SidebarProps {
  activeFile: string | null;
  onFileSelect: (fileId: string) => void;
}

const files: FileNode[] = [
  {
    id: 'pages',
    name: 'Pages',
    type: 'folder',
    children: [
      { id: 'sobre.json', name: 'sobre.json', type: 'file', language: 'json', icon: 'data_object' },
      { id: 'projetos.js', name: 'projetos.js', type: 'file', language: 'javascript', icon: 'javascript' },
      { id: 'habilidades.tsx', name: 'habilidades.tsx', type: 'file', language: 'typescript', icon: 'code' },
      { id: 'experiencias.js', name: 'experiencias.js', type: 'file', language: 'javascript', icon: 'history_edu' },
      { id: 'contato.py', name: 'contato.py', type: 'file', language: 'python', icon: 'alternate_email' },
    ]
  },
  {
    id: 'config',
    name: 'Config',
    type: 'folder',
    children: [
      { id: 'readme.md', name: 'README.md', type: 'file', language: 'markdown', icon: 'info' },
      { id: 'theme.css', name: 'theme.css', type: 'file', language: 'css', icon: 'palette' },
    ]
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeFile, onFileSelect }) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['pages', 'config']);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId) 
        : [...prev, folderId]
    );
  };

  const getFileIconColor = (name: string) => {
    if (name.endsWith('.json')) return 'text-yellow-400';
    if (name.endsWith('.js')) return 'text-yellow-300';
    if (name.endsWith('.tsx')) return 'text-blue-400';
    if (name.endsWith('.py')) return 'text-blue-500';
    if (name.endsWith('.md')) return 'text-purple-400';
    if (name.endsWith('.css')) return 'text-blue-300';
    return 'text-gray-400';
  };

  return (
    <aside className="w-64 bg-sidebar-bg flex flex-col border-r border-[#1e1e1e] select-none">
      {/* Title Area */}
      <div className="h-9 flex items-center px-4 text-xs font-bold text-gray-400 tracking-wider">
        EXPLORER
      </div>

      {/* Project Root */}
      <div className="flex flex-col">
        <div className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-gray-300 font-bold text-xs">
          <span className="material-symbols-outlined text-[16px] mr-1 rotate-90 transition-transform">expand_more</span>
          GILVAN SOUSA QA
        </div>
        
        {/* File Tree */}
        <div className="flex flex-col">
            {files.map(node => (
                <div key={node.id}>
                    {/* Folder */}
                    <div 
                        className="flex items-center px-4 py-1 cursor-pointer hover:bg-[#2a2d2e] text-gray-400 hover:text-white"
                        onClick={() => toggleFolder(node.id)}
                    >
                        <span className={`material-symbols-outlined text-[16px] mr-1 transition-transform ${expandedFolders.includes(node.id) ? 'rotate-90' : ''}`}>chevron_right</span>
                        <span className="text-sm font-medium">{node.name}</span>
                    </div>
                    
                    {/* Files in Folder */}
                    {expandedFolders.includes(node.id) && node.children?.map(file => (
                        <div 
                            key={file.id}
                            onClick={() => onFileSelect(file.id)}
                            className={`flex items-center pl-8 pr-2 py-1 cursor-pointer text-sm group ${
                                activeFile === file.id ? 'bg-[#37373d] text-white' : 'hover:bg-[#2a2d2e] text-gray-400 hover:text-white'
                            }`}
                        >
                            <span className={`material-symbols-outlined text-[16px] mr-2 ${getFileIconColor(file.name)}`}>
                                {file.icon}
                            </span>
                            <span>{file.name}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </aside>
  );
};