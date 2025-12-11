import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl animate-fade-in font-sans">
       <div className="flex flex-col md:flex-row gap-8 items-start mb-10 border-b border-[#333] pb-8">
        <div className="shrink-0 relative group">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full h-40 w-40 border-4 border-[#333] shadow-xl" 
            style={{ backgroundImage: 'url("https://ui-avatars.com/api/?name=Gilvan+Sousa&background=0D8ABC&color=fff&size=256")' }}
          ></div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Olá, sou <span className="text-keyword">Gilvan Sousa</span></h1>
          <h2 className="text-xl text-function mb-4">Analista de Testes Sênior (QA) | Especialista em Meios de Pagamento</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            Atuo há <span className="text-number">8 anos</span> como QA, com foco em Qualidade, Agilidade (Scrum) e valor ao negócio. 
            Tenho expertise técnica robusta em automação (Web/Mobile), Mainframe (Vision Plus/Mocha) e APIs.
            Lidero tecnicamente equipes com foco na entrega de software livre de falhas em ambientes complexos de Varejo e Pagamentos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QA Estratégico */}
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">strategy</span>
                QA Estratégico & Execução
            </h3>
            <div className="bg-[#252526] p-4 rounded border-l-2 border-primary text-sm text-gray-400 leading-relaxed">
                <p className="mb-2">Responsável pelo ciclo completo de testes:</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Planejamento, análise de requisitos e modelagem de cenários.</li>
                    <li>Criação de massa de dados e gestão eficaz de bugs.</li>
                    <li>Liderança de equipes e otimização de processos (Agile/Tradicional).</li>
                    <li>Gestão do ciclo de vida de defeitos (Jira, HP ALM/QC, Octane).</li>
                </ul>
            </div>
        </div>

        {/* Automação */}
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-keyword">smart_toy</span>
                Automação & Testes Técnicos
            </h3>
            <div className="bg-[#252526] p-4 rounded border-l-2 border-keyword text-sm text-gray-400 leading-relaxed">
                <ul className="list-disc pl-4 space-y-1">
                    <li><strong className="text-white">Web:</strong> Cypress, Selenium.</li>
                    <li><strong className="text-white">Mobile:</strong> Appium (Android/iOS).</li>
                    <li><strong className="text-white">Backend:</strong> API REST (Postman), SQL, Logs.</li>
                    <li><strong className="text-white">Nicho:</strong> Scripts de injeção ISO 8583 e RPA para Vision Plus.</li>
                </ul>
            </div>
        </div>

        {/* Mainframe & Pagamentos */}
        <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-string">credit_card</span>
                Domínio em Meios de Pagamento
            </h3>
            <div className="bg-[#252526] p-5 rounded border-l-2 border-string text-sm text-gray-400 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-white font-bold mb-2">Ciclo Transacional & Ecossistema</h4>
                    <p className="mb-2">Domínio de autorização (ISO 8583), captura, compensação, liquidação e chargeback.</p>
                    <p>Experiência com TEF, POS, ATM, E-commerce e conciliação.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-2">Mainframe & Vision Plus</h4>
                    <p className="mb-2">Experiência prática nos módulos Vision Plus (CMS, ASM, FAS, TRAMS, etc.) e validação de faturas.</p>
                    <p>Ferramentas: TSO, Roscoe, Control-M, Connect Direct.</p>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#333] flex justify-between items-center flex-wrap gap-4">
        <p className="text-gray-500 italic text-sm">
            "Sou analítico, detalhista e comprometido com a qualidade e colaboração eficaz."
        </p>
        <div className="flex gap-2">
             <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040]">Scrum</span>
             <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040]">Liderança Técnica</span>
             <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040]">Inglês Técnico</span>
        </div>
      </div>
    </div>
  );
};