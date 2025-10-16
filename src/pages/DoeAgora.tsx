import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, CreditCard, Copy, CheckCircle, MessageCircle, Shield, Users, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const DoeAgora = () => {
  const {
    toast
  } = useToast();
  const pixKey = "projetokerenchai@gmail.com";
  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para sua área de transferência."
    });
  };
  return <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seu apoio faz a diferença — hoje
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada contribuição fortalece famílias que seguem firmes em sua prática judaica. 
            Seja parte desta corrente de dignidade e propósito.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow">

            {/* Payment Options */}
            <div className="space-y-6">
              {/* PIX Payment */}
              <div className="bg-card rounded-2xl p-6 subtle-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center mr-3">
                    <Copy className="text-primary-foreground" size={16} />
                  </div>
                  Pagamento via PIX
                </h3>
                
                <div className="bg-secondary/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-3">Chave PIX</p>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <p className="font-mono text-sm break-all">{pixKey}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={copyPixKey} className="w-full">
                    <Copy size={16} className="mr-2" />
                    Copiar chave PIX
                  </Button>
                </div>
              </div>

              {/* Credit Card Payment */}
              <div className="bg-card rounded-2xl p-6 subtle-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center mr-3">
                    <CreditCard className="text-primary-foreground" size={16} />
                  </div>
                  Pagamento com Cartão
                </h3>
                
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Para realizar pagamento via cartão de crédito, entre em contato conosco.
                  </p>
                  <Button asChild variant="default" size="lg" className="bg-green-500 hover:bg-green-600 text-white border-0">
                    <a href="https://wa.me/5511992540709" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <MessageCircle size={20} />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Payment Security Info */}
              <div className="bg-secondary/20 rounded-2xl p-4 text-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      

      {/* WhatsApp Contact */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-8 subtle-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Precisa de ajuda?</h2>
            <p className="text-muted-foreground mb-6">
              Fale diretamente conosco pelo WhatsApp para esclarecer dúvidas sobre doações ou o projeto.
            </p>
            <Button asChild variant="default" size="lg" className="bg-green-500 hover:bg-green-600 text-white border-0">
              <a href="https://wa.me/5511992540709" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          

          {/* CNPJ Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Keren Chai</strong> • CNPJ: 00.000.000/0000-00
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default DoeAgora;