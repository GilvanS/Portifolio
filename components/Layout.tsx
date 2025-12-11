import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const CodeLayout: React.FC<LayoutProps> = ({ children }) => {
  // Generate random line numbers
  const lines = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="flex h-full overflow-hidden bg-editor-bg">
      {/* Line Numbers */}
      <div className="w-12 flex-shrink-0 flex flex-col items-end pr-3 pt-4 text-gray-600 bg-editor-bg text-xs font-mono select-none">
        {lines.map(line => (
          <div key={line} className="h-6 leading-6">{line}</div>
        ))}
      </div>
      
      {/* Content Area */}
      <div className="flex-1 h-full overflow-y-auto scrollbar-custom overflow-x-hidden">
        <div className="min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
};