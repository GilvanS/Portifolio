import React from 'react';

interface TopBarProps {
  activeFile: string | null;
  openFiles: string[];
  onTabClick: (fileId: string) => void;
  onTabClose: (fileId: string, e: React.MouseEvent) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ activeFile, openFiles, onTabClick, onTabClose }) => {
  const getFileIcon = (fileId: string) => {
    if (fileId.includes('json')) return 'data_object';
    if (fileId.includes('js')) return 'javascript';
    if (fileId.includes('tsx')) return 'code';
    if (fileId.includes('py')) return 'alternate_email';
    if (fileId.includes('md')) return 'info';
    if (fileId.includes('css')) return 'palette';
    return 'description';
  };

  const getFileColor = (fileId: string) => {
    if (fileId.includes('json')) return 'text-yellow-400';
    if (fileId.includes('js')) return 'text-yellow-300';
    if (fileId.includes('tsx')) return 'text-blue-400';
    if (fileId.includes('py')) return 'text-blue-500';
     if (fileId.includes('md')) return 'text-purple-400';
    return 'text-gray-400';
  };

  if (openFiles.length === 0) return <div className="h-9 bg-editor-bg border-b border-[#252526]"></div>;

  return (
    <div className="flex h-9 bg-[#252526] overflow-x-auto scrollbar-hide">
      {openFiles.map(fileId => (
        <div
          key={fileId}
          onClick={() => onTabClick(fileId)}
          className={`flex items-center min-w-fit px-3 py-2 text-xs border-r border-[#1e1e1e] cursor-pointer group select-none ${
            activeFile === fileId 
              ? 'bg-editor-bg text-white border-t-2 border-t-primary' 
              : 'bg-[#2d2d2d] text-gray-400 hover:bg-[#2d2d2d]/80'
          }`}
        >
          <span className={`material-symbols-outlined text-[14px] mr-2 ${getFileColor(fileId)}`}>
            {getFileIcon(fileId)}
          </span>
          <span className="mr-2 italic">{fileId}</span>
          <span 
            onClick={(e) => onTabClose(fileId, e)}
            className={`material-symbols-outlined text-[14px] p-0.5 rounded hover:bg-gray-600/50 transition-all opacity-60 group-hover:opacity-100 ${activeFile === fileId ? 'opacity-80' : ''}`}
            title="Fechar aba"
          >
            close
          </span>
        </div>
      ))}
    </div>
  );
};