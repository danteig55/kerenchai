import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    lgpdConsent: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, lgpdConsent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.lgpdConsent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, autorize o tratamento dos seus dados para prosseguir.",
        variant: "destructive"
      });
      return;
    }

    // Mock envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderemos em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      lgpdConsent: false
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale com a gente
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Será um prazer responder suas dúvidas, receber sugestões ou conversar sobre como você pode apoiar o projeto
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 subtle-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth resize-vertical"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                {/* LGPD Consent */}
                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="lgpdConsent"
                      checked={formData.lgpdConsent}
                      onChange={handleCheckboxChange}
                      required
                      className="w-4 h-4 text-accent focus:ring-accent border-border rounded mt-1"
                    />
                    <label htmlFor="lgpdConsent" className="text-sm text-muted-foreground">
                      Autorizo o tratamento dos meus dados pessoais pelo Keren Chai exclusivamente 
                      para a tratativa desta mensagem, conforme nossa{" "}
                      <a href="/privacidade" className="text-accent hover:underline">
                        Política de Privacidade
                      </a>. *
                    </label>
                  </div>
                </div>

                <Button type="submit" variant="donate" size="lg" className="w-full">
                  Enviar mensagem
                  <Send size={20} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-card rounded-2xl p-8 subtle-shadow">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contato direto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <a 
                        href="mailto:contato@kerenchai.org"
                        className="text-accent hover:underline"
                      >
                        contato@kerenchai.org
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respondemos em até 24 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 warm-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        (11) 99999-9999
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Atendimento de segunda a quinta, 9h às 17h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                      <p className="text-muted-foreground">
                        São Paulo, SP<br />
                        Atendimento em toda a região metropolitana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick */}
              <div className="bg-card rounded-2xl p-8 subtle-shadow">
                <h2 className="text-xl font-bold text-foreground mb-4">Dúvidas frequentes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      Como posso indicar uma família?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Entre em contato conosco por WhatsApp ou e-mail com as informações da família
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      Posso visitar o projeto?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Agendamos reuniões para apresentar nosso trabalho. Entre em contato!
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      Como me tornar um parceiro?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Estabelecimentos kosher podem se tornar parceiros. Fale conosco!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;