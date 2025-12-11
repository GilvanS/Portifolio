import React, { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
  visibility: 'public' | 'private';
  fork: boolean;
  full_name?: string;
}

export const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRepos, setTotalRepos] = useState(0);
  const reposPerPage = 10;
  const username = 'GilvanS';

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Primeiro, buscar o total de repositórios públicos
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Erro ao buscar usuário');
        const userData = await userResponse.json();
        
        // Buscar repositórios com paginação
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${reposPerPage}&page=${currentPage}`
        );
        
        if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');
        
        const reposData = await reposResponse.json();
        setRepos(reposData);
        setTotalRepos(userData.public_repos || reposData.length);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [currentPage, username]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    }
    const years = Math.floor(diffDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  };

  const getLanguageColor = (language: string | null) => {
    if (!language) return '#ccc';
    
    const colors: Record<string, string> = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Java': '#b07219',
      'Python': '#3572A5',
      'HTML': '#e34c26',
      'C': '#555555',
      'Jupyter Notebook': '#DA5B0B',
      'CSS': '#563d7c',
    };
    
    return colors[language] || '#ccc';
  };

  const totalPages = Math.ceil(totalRepos / reposPerPage);

  if (loading) {
    return (
      <div className="p-8 max-w-5xl animate-fade-in font-sans">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-400 text-lg">Carregando repositórios...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-5xl animate-fade-in font-sans">
        <div className="bg-red-900/20 border border-red-500/50 rounded p-4 text-red-400">
          Erro ao carregar repositórios: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl animate-fade-in font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Repositories</h2>
        <p className="text-gray-400 text-sm">
          {totalRepos} {totalRepos === 1 ? 'repository' : 'repositories'}
        </p>
      </div>

      <div className="space-y-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="border border-[#30363d] rounded-lg p-4 hover:border-[#484f58] transition-colors bg-[#161b22]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline font-semibold text-lg truncate"
                  >
                    {repo.name}
                  </a>
                  {repo.visibility === 'private' && (
                    <span className="px-2 py-0.5 text-xs border border-[#30363d] rounded-full text-gray-400">
                      Private
                    </span>
                  )}
                  {repo.fork && (
                    <span className="text-gray-500 text-xs">Forked</span>
                  )}
                </div>
                
                {repo.description && (
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                )}
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  
                  {repo.stargazers_count > 0 && (
                    <a
                      href={`${repo.html_url}/stargazers`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-blue-400"
                    >
                      <span className="material-symbols-outlined text-sm">star</span>
                      <span>{repo.stargazers_count}</span>
                    </a>
                  )}
                  
                  <span className="text-gray-600">
                    Updated {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>
              
              <button className="flex items-center gap-1 px-3 py-1 border border-[#30363d] rounded-md text-sm text-gray-400 hover:border-[#484f58] hover:bg-[#1c2128] transition-colors flex-shrink-0">
                <span className="material-symbols-outlined text-sm">star</span>
                <span>Star</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-[#30363d] rounded-md text-sm text-gray-400 hover:bg-[#1c2128] hover:border-[#484f58] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-[#1c2128] border border-[#30363d] hover:border-[#484f58]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-[#30363d] rounded-md text-sm text-gray-400 hover:bg-[#1c2128] hover:border-[#484f58] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
