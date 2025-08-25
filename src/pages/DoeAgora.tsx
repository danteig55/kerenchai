import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, CreditCard, QrCode, Copy, CheckCircle, MessageCircle, Shield, Users, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const DoeAgora = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const {
    toast
  } = useToast();
  const suggestedAmounts = [50, 100, 180, 360, 1000];
  const pixKey = "projetokerenchai@gmail.com";
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };
  const getCurrentAmount = () => {
    return selectedAmount || (customAmount ? parseInt(customAmount) : 0);
  };
  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para sua área de transferência."
    });
  };
  const handleCardPayment = () => {
    // Placeholder para integração com gateway de pagamento
    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para o checkout seguro."
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
            {/* Amount Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Escolha o valor da sua doação</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {suggestedAmounts.map(amount => <Button key={amount} onClick={() => handleAmountSelect(amount)} variant={selectedAmount === amount ? "donate" : "outline"} size="lg" className="p-4 h-auto flex-col">
                    <div className="text-lg font-semibold">R$ {amount}</div>
                  </Button>)}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Outro valor (R$)
                </label>
                <input type="number" value={customAmount} onChange={handleCustomAmountChange} placeholder="Digite o valor" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth" />
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input type="checkbox" id="recurring" checked={isRecurring} onChange={e => setIsRecurring(e.target.checked)} className="w-4 h-4 text-accent focus:ring-accent border-border rounded" />
                <label htmlFor="recurring" className="text-foreground">
                  Quero doar todo mês (doação recorrente)
                </label>
              </div>

              {getCurrentAmount() > 0 && <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">
                      Valor selecionado: 
                      <strong className="text-accent ml-2">R$ {getCurrentAmount()}</strong>
                    </span>
                    {isRecurring && <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        Mensal
                      </span>}
                  </div>
                </div>}
            </div>

            {/* Payment Options */}
            <div className="space-y-6">
              {/* PIX Payment */}
              <div className="bg-card rounded-2xl p-6 subtle-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center mr-3">
                    <QrCode className="text-primary-foreground" size={16} />
                  </div>
                  Pagamento via PIX
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">QR Code</p>
                    <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                      <QrCode className="text-muted-foreground" size={48} />
                    </div>
                    <p className="text-xs text-muted-foreground">Escaneie com seu app do banco</p>
                  </div>
                  
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
                    Pagamento seguro com cartão de crédito ou débito
                  </p>
                  <Button variant="donate" size="lg" onClick={handleCardPayment} className="w-full sm:w-auto" disabled={getCurrentAmount() === 0}>
                    <CreditCard size={20} className="mr-2" />
                    Doar com cartão - R$ {getCurrentAmount()}
                  </Button>
                </div>
              </div>

              {/* Payment Security Info */}
              <div className="bg-secondary/20 rounded-2xl p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Pagamentos processados por <strong>processador seguro</strong>. Você receberá um recibo por e-mail.
                </p>
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