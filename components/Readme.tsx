import React from 'react';

export const Readme: React.FC = () => {
    return (
        <div className="p-8 max-w-5xl animate-fade-in font-sans overflow-hidden w-full box-border">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Olá 👋 Eu sou <span className="text-keyword">Gilvan João Sousa</span>!
                </h1>
                <div className="mb-6">
                    <a 
                        href="https://www.linkedin.com/in/gilvan-joão-sousa-4a9755a9/?trk=opento_sprofile_details" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005885] text-white rounded transition-colors text-sm"
                    >
                        <span>🔗</span>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            <div className="border-t border-[#333] pt-6 mb-8"></div>

            {/* Title Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                    🚀 <span className="text-keyword">Analista de Testes Sênior</span> | Especialista em QA de Meios de Pagamento | Automação Web/Mobile & Mainframe 🚀
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Com mais de <span className="text-number font-bold">7 anos</span> de experiência sólida, sou um profissional apaixonado por <strong className="text-white">Garantia da Qualidade (QA)</strong>, com foco profundo no dinâmico setor de <strong className="text-white">Meios de Pagamento Eletrônico</strong> e <strong className="text-white">Varejo</strong>. Minha expertise combina testes <strong className="text-white">manuais e funcionais</strong> com <strong className="text-white">automação avançada (Web, Mobile, API)</strong> e um conhecimento diferenciado em plataformas <strong className="text-white">Mainframe</strong>, especialmente <strong className="text-white">Vision Plus</strong>. Lidero tecnicamente, otimizo processos (Ágeis/Tradicionais) e garanto a entrega de software com <strong className="text-white">altíssima qualidade</strong>, sempre alinhado aos objetivos de negócio.
                </p>
            </div>

            <div className="border-t border-[#333] pt-6 mb-8"></div>

            {/* Foco Atual */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">🎯 Foco Atual & Aprendizado</h3>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">💼</span>
                        <span>Atualmente, aplico minhas habilidades em projetos de <strong className="text-white">garantia de qualidade</strong>, com forte ênfase na <strong className="text-white">automação de testes</strong> para aplicações web (Selenium, Cypress) e mobile (Appium + Java para Android/iOS).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">📚</span>
                        <span>Estou sempre evoluindo! No momento, exploro <strong className="text-white">Playwright</strong>, aprofundo conhecimentos em <strong className="text-white">JavaScript</strong> e <strong className="text-white">Python</strong>, e investigo estratégias avançadas de <strong className="text-white">automação mobile</strong> e <strong className="text-white">testes multiplataforma</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">🧠</span>
                        <span>Busco constantemente otimizar <strong className="text-white">processos de QA</strong> e transformar testes complexos em pipelines automatizadas eficientes.</span>
                    </li>
                </ul>
            </div>

            <div className="border-t border-[#333] pt-6 mb-8"></div>

            {/* Skills */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">🛠️ Skills & Expertise Detalhados</h3>
                
                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-function mb-3">Metodologias e Práticas de QA:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
                        <div>• Testes Funcionais, Manuais e Exploratórios</div>
                        <div>• Testes de Integração, Regressão e Sanidade</div>
                        <div>• Planejamento Estratégico de Testes e Estimativas</div>
                        <div>• Modelagem de Cenários e Casos de Teste</div>
                        <div>• Criação e Gerenciamento de Massa de Dados para Testes</div>
                        <div>• Análise de Requisitos, Riscos e Impacto</div>
                        <div>• Gestão de Ciclo de Vida de Defeitos</div>
                        <div>• Metodologias Ágeis (Scrum) e Tradicionais</div>
                        <div>• Documentação Técnica (Planos, Roteiros, Relatórios)</div>
                        <div>• Liderança Técnica de Equipes de QA e Mentoria</div>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-function mb-3">Automação de Testes & API:</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><strong className="text-white">Web:</strong> Selenium, Cypress <span className="text-comment">(aprendendo Playwright)</span></li>
                        <li><strong className="text-white">Mobile:</strong> Appium com Java (Android & iOS)</li>
                        <li><strong className="text-white">API:</strong> Testes REST com Postman</li>
                        <li><strong className="text-white">Scripts:</strong> Criação de scripts para injeção de transações (foco em ISO 8583)</li>
                        <li><strong className="text-white">RPA:</strong> Experiência aplicada a testes (especialmente Vision Plus)</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-string mb-3">💳 Domínio Profundo em Meios de Pagamento:</h4>
                    
                    <div className="mb-4">
                        <strong className="text-white">Plataforma Core - Vision Plus (Mainframe/Mocha):</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                            <li>Módulos Chave: <code className="bg-[#2d2d2d] px-1 rounded text-keyword">CDM</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">CMS</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">ASM</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">FAS</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">TRAMS</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">MBS</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">LTS</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">ITS</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">CTA</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">IFP Monetária</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">IFP Cadastral</code></li>
                            <li>Processos: Faturamento (Billing), Validação de CTPVI, Fluxos de Backoffice</li>
                            <li>Interface: Mocha</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong className="text-white">Ambiente Mainframe:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                            <li>TSO, Roscoe, Execução/Análise de JOBs (JCL, Control-M), Transferência de Arquivos (Connect:Direct)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong className="text-white">Ciclo de Vida da Transação:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                            <li>Autorização (Online/Offline, Stand-in)</li>
                            <li>Mensageria <strong className="text-white">ISO 8583</strong> (Análise, Validação, Injeção)</li>
                            <li>Captura (TEF, POS, E-commerce, etc.)</li>
                            <li>Compensação e Liquidação Financeira</li>
                            <li>Conciliação</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong className="text-white">Ecossistema e Ferramentas Adicionais:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                            <li>TEF/PDV/POS (Experiência com ATM Tecban)</li>
                            <li>Simuladores: Bandeira (Visa, Mastercard, Elo), X-25</li>
                            <li>Sistemas/Ferramentas Específicas: <code className="bg-[#2d2d2d] px-1 rounded text-keyword">BCPA</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">Ibiplus</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">Bradescard Online</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">Credportal</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">B2K</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">Tools SCC</code>, <code className="bg-[#2d2d2d] px-1 rounded text-keyword">Tools SCE</code></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong className="text-white">Canais e Tecnologias:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                            <li>Tarja Magnética, <strong className="text-white">EMV</strong> (Chip), E-commerce (Gateways, 3DS), <strong className="text-white">NFC</strong> (Contactless), Pagamentos em Transporte</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong className="text-white">Processos de Negócio:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                            <li>Disputas (Chargeback), Autenticação e Segurança, Desfazimento/Cancelamento, Integrações com Adquirentes e Bandeiras, Regras de Negócio Específicas.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-function mb-3">Ferramentas de Gestão e Colaboração:</h4>
                    <p className="text-gray-400">Jira, HP ALM / QC / Octane, Redmine, SVN <span className="text-comment">(Versionamento)</span></p>
                </div>
            </div>

            <div className="border-t border-[#333] pt-6 mb-8"></div>

            {/* Sobre Mim */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">🤔 Sobre Mim e Colaboração</h3>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">•</span>
                        <span>Sou analítico 🔍, detalhista, responsável e com grande capacidade de adaptação. Tenho forte comprometimento com a qualidade e adoro trabalhar em equipe 🤝, compartilhando conhecimento e buscando soluções eficazes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">✨</span>
                        <span>Curiosidade: adoro aprender novas ferramentas e transformar processos complexos de teste em pipelines automatizadas e eficientes!</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">🤝</span>
                        <span>Procuro colaborar em projetos open source relacionados à <strong className="text-white">automação de testes</strong> e <strong className="text-white">boas práticas de QA</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-function mt-1">💬</span>
                        <span>Me pergunte sobre <strong className="text-white">processos de QA</strong>, <strong className="text-white">Vision Plus</strong>, <strong className="text-white">testes de regressão automatizados</strong>, <strong className="text-white">automação mobile</strong> ou qualquer assunto relacionado a <strong className="text-white">meios de pagamento eletrônico</strong>!</span>
                    </li>
                </ul>
            </div>

            <div className="border-t border-[#333] pt-6 mb-8"></div>

            {/* Contato */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">📫 Como Falar Comigo:</h3>
                <ul className="space-y-2 text-gray-400">
                    <li>
                        <strong className="text-white">LinkedIn:</strong>{' '}
                        <a 
                            href="https://www.linkedin.com/in/gilvan-joão-sousa-4a9755a9/?trk=opento_sprofile_details" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-function hover:text-keyword hover:underline"
                        >
                            Gilvan João Sousa
                        </a>
                    </li>
                </ul>
                <p className="mt-4 text-gray-300 font-semibold">
                    📌 <strong>Vamos nos conectar, trocar ideias e construir softwares com mais qualidade!</strong>
                </p>
            </div>

            <div className="border-t border-[#333] pt-6 mb-8"></div>

            {/* GitHub Stats */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">📊 Minhas Estatísticas no GitHub</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <img 
                        src="https://github-readme-stats.vercel.app/api?username=GilvanS&show_icons=true&theme=dark&include_all_commits=true&count_private=true" 
                        alt="GitHub Stats" 
                        className="w-full rounded"
                    />
                    <img 
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=GilvanS&layout=compact&langs_count=8&card_width=320&theme=dark" 
                        alt="Top Languages" 
                        className="w-full rounded"
                    />
                </div>
            </div>

            {/* Tecnologias */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">💻 Tecnologias e Ferramentas que Utilizo/Estudo</h3>
                <div className="flex flex-wrap gap-3 items-center mb-6">
                    <img alt="Vision Plus" title="Vision Plus" height="50" src="https://img.shields.io/badge/-Vision_Plus-lightgrey?style=for-the-badge" />
                    <img alt="Mainframe" title="Mainframe (IBM)" height="50" src="https://img.shields.io/badge/-Mainframe-black?style=for-the-badge&logo=ibm&logoColor=white" />
                    <img alt="Meios de Pagamento" title="Meios de Pagamento" height="50" src="https://img.shields.io/badge/-Meios_de_Pagamento-007ACC?style=for-the-badge" />
                    <img alt="ISO 8583" title="ISO 8583" height="50" src="https://img.shields.io/badge/ISO_8583-grey?style=for-the-badge" />
                    <img alt="EMV" title="EMV" height="50" src="https://img.shields.io/badge/EMV-orange?style=for-the-badge" />
                    <img alt="Java" height="50" width="60" title="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                    <img alt="JavaScript" height="50" width="50" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img alt="Python" height="50" width="60" title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
                    <img alt="Cypress" height="50" width="60" title="Cypress" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg" />
                    <img alt="Selenium" height="50" width="50" title="Selenium" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
                    <img alt="Playwright" height="50" width="50" title="Playwright (Estudando)" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" />
                    <img alt="Appium" height="50" width="50" title="Appium" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Xp24SeoI4POuwMqrhXtzRQ.jpeg" />
                    <img alt="Postman" height="50" width="60" title="Postman" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg" />
                    <img alt="Jira" height="50" width="50" title="Jira" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
                    <img alt="ALM Octane" title="ALM Octane" height="50" src="https://img.shields.io/badge/-ALM_Octane-00739D?style=for-the-badge" />
                    <img alt="Jenkins" height="50" width="50" title="Jenkins" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
                    <img alt="Gilvan-QA" className="ml-auto" src="https://www.trilhadequalidade.com.br/content/images/2024/05/user-testing.gif" />
                </div>
            </div>

            {/* Contribution Snake */}
            <div className="mb-8">
                <picture>
                    <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/GilvanS/GilvanS/output/github-contribution-grid-snake-dark.svg" />
                    <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/GilvanS/GilvanS/output/github-contribution-grid-snake.svg" />
                    <img 
                        alt="github contribution grid snake animation" 
                        src="https://raw.githubusercontent.com/GilvanS/GilvanS/output/github-contribution-grid-snake.svg"
                        className="w-full"
                    />
                </picture>
            </div>
        </div>
    );
};
