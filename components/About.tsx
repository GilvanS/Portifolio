import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl animate-fade-in font-sans">
       <div className="flex flex-col md:flex-row gap-8 items-start mb-10 border-b border-[#333] pb-8">
        <div className="shrink-0 relative group">
          <img 
            src="/Portifolio/images/profile.jpg"
            alt="Gilvan João Sousa"
            className="rounded-full h-40 w-40 border-4 border-[#333] shadow-xl object-cover"
            onError={(e) => {
              // Fallback para avatar gerado se a imagem não carregar
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.avatar-fallback')) {
                const fallback = document.createElement('div');
                fallback.className = 'avatar-fallback bg-center bg-no-repeat bg-cover rounded-full h-40 w-40 border-4 border-[#333] shadow-xl flex items-center justify-center text-white text-2xl font-bold';
                fallback.style.background = '#0D8ABC';
                fallback.textContent = 'GS';
                parent.appendChild(fallback);
              }
            }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-2">
            Olá 👋 Eu sou <span className="text-keyword">Gilvan João Sousa</span>!
          </h1>
          <h2 className="text-xl text-function mb-4">
            🚀 Analista de Testes Sênior | Especialista em QA de Meios de Pagamento | Automação Web/Mobile & Mainframe 🚀
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
            Com mais de <span className="text-number">7 anos</span> de experiência sólida, sou um profissional apaixonado por <strong className="text-white">Garantia da Qualidade (QA)</strong>, com foco profundo no dinâmico setor de <strong className="text-white">Meios de Pagamento Eletrônico</strong> e <strong className="text-white">Varejo</strong>. Minha expertise combina testes <strong className="text-white">manuais e funcionais</strong> com <strong className="text-white">automação avançada (Web, Mobile, API)</strong> e um conhecimento diferenciado em plataformas <strong className="text-white">Mainframe</strong>, especialmente <strong className="text-white">Vision Plus</strong>. Lidero tecnicamente, otimizo processos (Ágeis/Tradicionais) e garanto a entrega de software com <strong className="text-white">altíssima qualidade</strong>, sempre alinhado aos objetivos de negócio.
          </p>
          <div className="flex gap-3 items-center">
            <a 
              href="https://www.linkedin.com/in/gilvan-joão-sousa-4a9755a9/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005885] text-white rounded transition-colors text-sm"
            >
              <span className="text-base">🔗</span>
              LinkedIn
            </a>
            <a 
              href="https://github.com/GilvanS" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#333] hover:bg-[#555] text-white rounded transition-colors text-sm"
            >
              <span className="text-base">💻</span>
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Foco Atual & Aprendizado */}
      <div className="mb-10 border-b border-[#333] pb-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-keyword">🎯</span> Foco Atual & Aprendizado
        </h3>
        <div className="space-y-3 text-gray-400">
          <p>
            💼 Atualmente, aplico minhas habilidades em projetos de <strong className="text-white">garantia de qualidade</strong>, com forte ênfase na <strong className="text-white">automação de testes</strong> para aplicações web (Selenium, Cypress) e mobile (Appium + Java para Android/iOS).
          </p>
          <p>
            📚 Estou sempre evoluindo! No momento, exploro <strong className="text-white">Playwright</strong>, aprofundo conhecimentos em <strong className="text-white">JavaScript</strong> e <strong className="text-white">Python</strong>, e investigo estratégias avançadas de <strong className="text-white">automação mobile</strong> e <strong className="text-white">testes multiplataforma</strong>.
          </p>
          <p>
            🧠 Busco constantemente otimizar <strong className="text-white">processos de QA</strong> e transformar testes complexos em pipelines automatizadas eficientes.
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
                    <li><strong className="text-white">Playwright:</strong> Em aprendizado ativo.</li>
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
                    <p className="mb-2">Experiência prática nos módulos Vision Plus: <code className="text-keyword bg-[#1e1e1e] px-1 rounded">CDM</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">CMS</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">ASM</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">FAS</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">TRAMS</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">MBS</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">LTS</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">ITS</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">CTA</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">IFP Monetária</code>, <code className="text-keyword bg-[#1e1e1e] px-1 rounded">IFP Cadastral</code>.</p>
                    <p className="mb-2">Processos: Faturamento (Billing), Validação de CTPVI, Fluxos de Backoffice. Interface: Mocha.</p>
                    <p>Ferramentas: TSO, Roscoe, Control-M, Connect Direct.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Sobre Mim e Colaboração */}
      <div className="mt-8 pt-6 border-t border-[#333]">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-keyword">🤔</span> Sobre Mim e Colaboração
        </h3>
        <div className="space-y-3 text-gray-400 mb-6">
          <p>
            Sou analítico 🔍, detalhista, responsável e com grande capacidade de adaptação. Tenho forte comprometimento com a qualidade e adoro trabalhar em equipe 🤝, compartilhando conhecimento e buscando soluções eficazes.
          </p>
          <p>
            ✨ Curiosidade: adoro aprender novas ferramentas e transformar processos complexos de teste em pipelines automatizadas e eficientes!
          </p>
          <p>
            🤝 Procuro colaborar em projetos open source relacionados à <strong className="text-white">automação de testes</strong> e <strong className="text-white">boas práticas de QA</strong>.
          </p>
          <p>
            💬 Me pergunte sobre <strong className="text-white">processos de QA</strong>, <strong className="text-white">Vision Plus</strong>, <strong className="text-white">testes de regressão automatizados</strong>, <strong className="text-white">automação mobile</strong> ou qualquer assunto relacionado a <strong className="text-white">meios de pagamento eletrônico</strong>!
          </p>
        </div>

        <div className="bg-[#252526] p-4 rounded border-l-4 border-primary">
          <p className="text-gray-300 font-medium mb-2">📌 Vamos nos conectar, trocar ideias e construir softwares com mais qualidade!</p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040] whitespace-nowrap">Scrum</span>
            <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040] whitespace-nowrap">Liderança Técnica</span>
            <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040] whitespace-nowrap">Open Source</span>
            <span className="px-3 py-1 bg-[#2d2d2d] text-xs rounded text-gray-300 border border-[#404040] whitespace-nowrap">Colaboração</span>
          </div>
        </div>
      </div>
    </div>
  );
};