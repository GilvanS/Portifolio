import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  stars: number;
}

const projects: Project[] = [
  {
    name: "qa-automation-payments",
    description: "Framework híbrido (Web/API) para validação de transações financeiras e gateways de pagamento.",
    tech: ["Java", "Selenium", "RestAssured", "TestNG"],
    url: "https://github.com/GilvanS/qa-automation-payments",
    stars: 12
  },
  {
    name: "cypress-e2e-retail",
    description: "Suíte de testes E2E completa para e-commerce (Carrinho, Checkout, Auth) com relatórios integrados.",
    tech: ["Cypress", "JavaScript", "GitHub Actions", "Mochawesome"],
    url: "https://github.com/GilvanS/cypress-e2e-retail",
    stars: 8
  },
  {
    name: "iso8583-message-parser",
    description: "Utilitário Python para parse, validação e injeção de mensagens ISO 8583 para testes de adquirência.",
    tech: ["Python", "ISO8583", "Pytest"],
    url: "https://github.com/GilvanS/iso8583-parser",
    stars: 15
  },
  {
    name: "mobile-banking-appium",
    description: "Testes automatizados mobile (Android/iOS) para funcionalidades bancárias essenciais.",
    tech: ["Appium", "Python", "Android SDK"],
    url: "https://github.com/GilvanS/mobile-banking-appium",
    stars: 10
  },
  {
    name: "vision-plus-rpa",
    description: "Scripts de automação RPA para validação de telas do Mainframe Vision Plus.",
    tech: ["Python", "RPA", "Mainframe"],
    url: "https://github.com/GilvanS/vision-plus-tools",
    stars: 5
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl animate-fade-in font-mono text-sm">
      <div className="text-gray-400 mb-6">
        <span className="text-comment">// Meus repositórios e projetos de destaque</span><br/>
        <span className="text-keyword">const</span> <span className="text-function">githubProfile</span> = <a href="https://github.com/GilvanS" target="_blank" rel="noreferrer" className="text-string hover:underline">"https://github.com/GilvanS"</a>;
      </div>

      <div className="text-keyword mb-4">
        export default <span className="text-white">[</span>
      </div>

      <div className="pl-4 grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group relative border border-[#333] bg-[#252526] p-4 rounded hover:border-primary/50 transition-colors">
            <div className="absolute top-4 right-4 flex items-center gap-1 text-gray-500">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="text-xs">{project.stars}</span>
            </div>
            
            <div className="text-white mb-1">
              <span className="text-keyword">{'{'}</span>
            </div>
            
            <div className="pl-4 space-y-1">
                <div>
                    <span className="text-string">name</span>: <a href={project.url} target="_blank" rel="noreferrer" className="text-function hover:underline font-bold">"{project.name}"</a>,
                </div>
                <div>
                    <span className="text-string">description</span>: <span className="text-string">"{project.description}"</span>,
                </div>
                <div>
                    <span className="text-string">technologies</span>: [
                    {project.tech.map((t, i) => (
                        <span key={t} className="text-number">
                            "{t}"{i < project.tech.length - 1 ? ", " : ""}
                        </span>
                    ))}
                    ],
                </div>
            </div>

            <div className="text-white mt-1">
              <span className="text-keyword">{'}'}</span>{index < projects.length - 1 ? "," : ""}
            </div>
          </div>
        ))}
      </div>

      <div className="text-white mt-4">];</div>
    </div>
  );
};