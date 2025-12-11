import React from 'react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    period: 'Atual',
    role: 'Senior QA Analyst (Payments & Retail)',
    company: 'Fintech / Varejo',
    description: 'Liderança técnica e QA Estratégico. Gestão do ciclo completo de testes em ecossistema de Meios de Pagamento. Otimização de processos Agile, modelagem de cenários complexos (Mainframe/Distribuído) e automação de testes.',
    tags: ['Liderança', 'Vision Plus', 'Agile', 'Jira'],
    colorClass: 'bg-keyword'
  },
  {
    period: 'Experiência Anterior',
    role: 'QA Automation Engineer',
    company: 'Tech Solutions',
    description: 'Foco em criação e manutenção de scripts de automação Web (Cypress/Selenium) e Mobile (Appium). Desenvolvimento de scripts para injeção de transações ISO 8583 e testes de API.',
    tags: ['Cypress', 'Appium', 'ISO 8583', 'Postman'],
    colorClass: 'bg-function'
  },
  {
    period: 'Início de Carreira',
    role: 'QA Analyst (Mainframe)',
    company: 'Instituição Financeira',
    description: 'Execução de testes manuais e batch em ambiente Mainframe. Validação de módulos Vision Plus, jobs Control-M e processamento de faturas/clearing.',
    tags: ['Mainframe', 'TSO/Roscoe', 'SQL', 'Manual Testing'],
    colorClass: 'bg-string'
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-keyword">const</span> <span className="text-function">careerPath</span> = <span className="text-white">[</span>
      </h2>
      <p className="text-gray-500 font-mono text-sm mb-8 ml-4">// 8 anos de experiência em QA</p>
      
      <div className="relative border-l border-gray-700 ml-3 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            <div className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${exp.colorClass} shadow-glow`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
               <span className="text-string font-mono text-sm min-w-[120px]">{exp.period}</span>
               <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            </div>
            
            <div className="text-gray-400 font-mono text-sm mb-3">@ {exp.company}</div>
            
            <p className="text-gray-500 leading-relaxed mb-4 max-w-2xl">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-keyword bg-[#2d2d2d] px-2 py-1 rounded border border-transparent hover:border-keyword transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-2xl font-bold text-white">];</div>
    </div>
  );
};