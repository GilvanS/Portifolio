import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="p-8 max-w-3xl animate-fade-in font-mono text-sm">
      <div className="text-gray-400 mb-4">
        <span className="text-keyword">class</span> <span className="text-function">Contact</span>:
      </div>
      
      <div className="pl-8 space-y-4">
        <div>
            <span className="text-keyword">def</span> <span className="text-function">__init__</span>(self):
            <div className="pl-8 text-gray-300">
                self.email = <span className="text-string">"gilvan.qa@email.com"</span><br/>
                self.linkedin = <span className="text-string">"linkedin.com/in/gilvansousa"</span><br/>
                self.github = <span className="text-string">"github.com/gilvanqa"</span><br/>
                self.location = <span className="text-string">"São Paulo, Brazil"</span>
            </div>
        </div>

        <div>
            <span className="text-keyword">def</span> <span className="text-function">send_message</span>(self, subject, body):
            <div className="pl-8 text-gray-300 mb-4">
                <span className="text-comment"># Envie um email para entrar em contato</span><br/>
                <span className="text-keyword">if</span> subject <span className="text-keyword">is not</span> None:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-function">print</span>(f<span className="text-string">"Enviando para {'{self.email}'}..."</span>)
            </div>
            
            <form className="pl-8 max-w-md flex flex-col gap-3 font-sans" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Subject" className="bg-[#2d2d2d] border border-[#404040] text-gray-200 p-2 rounded focus:outline-none focus:border-primary" />
                <textarea placeholder="Message body..." rows={4} className="bg-[#2d2d2d] border border-[#404040] text-gray-200 p-2 rounded focus:outline-none focus:border-primary"></textarea>
                <button className="bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded self-start">
                    Executar
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};