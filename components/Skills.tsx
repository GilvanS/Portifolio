import React from 'react';
import { SkillItem } from '../types';

const skills: SkillItem[] = [
  { name: 'Cypress', icon: 'bug_report', color: 'text-green-400' },
  { name: 'Appium', icon: 'smartphone', color: 'text-purple-400' },
  { name: 'Selenium', icon: 'check_circle', color: 'text-yellow-400' },
  { name: 'Vision Plus', icon: 'credit_card', color: 'text-blue-300' },
  { name: 'Mainframe', icon: 'terminal', color: 'text-gray-200' },
  { name: 'ISO 8583', icon: 'data_exchange', color: 'text-orange-400' },
  { name: 'Postman', icon: 'send', color: 'text-orange-500' },
  { name: 'SQL', icon: 'database', color: 'text-blue-400' },
  { name: 'Jira / ALM', icon: 'task', color: 'text-blue-500' },
  { name: 'Scrum', icon: 'groups', color: 'text-green-300' },
];

export const Skills: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl animate-fade-in">
       <h2 className="text-2xl font-bold text-white mb-2">
        <span className="text-keyword">import</span> {'{ Toolset }'} <span className="text-keyword">from</span> <span className="text-string">'./qa-inventory'</span>;
      </h2>
      <p className="text-gray-500 font-mono text-sm mb-8">// Ferramentas e tecnologias que domino</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-[#2d2d2d] p-4 rounded border border-[#404040] hover:border-keyword transition-colors group cursor-pointer flex flex-col items-center justify-center gap-3 min-h-[100px]">
             <span className={`material-symbols-outlined text-4xl ${skill.color} group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </span>
              <span className="text-xs font-mono text-center text-gray-300 group-hover:text-white">{skill.name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#252526] p-4 rounded border border-[#333]">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">dns</span> Ambiente Mainframe
            </h3>
            <div className="flex flex-wrap gap-2">
                {['TSO', 'Roscoe', 'Control-M', 'Connect Direct', 'Mocha'].map(item => (
                    <span key={item} className="text-xs bg-[#1e1e1e] px-2 py-1 rounded text-gray-400 border border-[#333] whitespace-nowrap">{item}</span>
                ))}
            </div>
        </div>
        <div className="bg-[#252526] p-4 rounded border border-[#333]">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">payments</span> Ecossistema Pagamentos
            </h3>
             <div className="flex flex-wrap gap-2">
                {['TEF', 'POS', 'ATM', 'Adquirência', 'Emissão', 'Clearing'].map(item => (
                    <span key={item} className="text-xs bg-[#1e1e1e] px-2 py-1 rounded text-gray-400 border border-[#333] whitespace-nowrap">{item}</span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};