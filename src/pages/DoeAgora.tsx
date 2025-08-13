import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, CreditCard, QrCode, FileText, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoeAgora = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const { toast } = useToast();

  const suggestedAmounts = [50, 100, 180, 360, 1000];
  const pixKey = "exemplo@kerenchai.org"; // Placeholder

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
      description: "A chave PIX foi copiada para sua área de transferência.",
    });
  };

  const handleCardPayment = () => {
    // Placeholder para integração com gateway de pagamento
    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para o checkout seguro.",
    });
  };

  const handleBoletoPayment = () => {
    // Placeholder para geração de boleto
    toast({
      title: "Gerando boleto...",
      description: "Seu boleto será gerado em instantes.",
    });
  };

  return (
    <Layout>
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
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg border-2 transition-smooth ${
                      selectedAmount === amount
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="text-lg font-semibold">R$ {amount}</div>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Outro valor (R$)
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Digite o valor"
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                />
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="w-4 h-4 text-accent focus:ring-accent border-border rounded"
                />
                <label htmlFor="recurring" className="text-foreground">
                  Quero doar todo mês (doação recorrente)
                </label>
              </div>

              {getCurrentAmount() > 0 && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">
                      Valor selecionado: 
                      <strong className="text-accent ml-2">R$ {getCurrentAmount()}</strong>
                    </span>
                    {isRecurring && (
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        Mensal
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Payment Options */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* PIX */}
              <div className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">PIX</h3>
                
                {/* QR Code Placeholder */}
                <div className="bg-muted rounded-lg p-6 mb-4">
                  <div className="w-32 h-32 bg-border rounded-lg mx-auto flex items-center justify-center">
                    <QrCode className="text-muted-foreground" size={48} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">QR Code PIX</p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Chave PIX:</p>
                  <div className="flex items-center justify-between bg-background rounded p-2">
                    <span className="text-sm font-mono text-foreground truncate">{pixKey}</span>
                    <button
                      onClick={copyPixKey}
                      className="ml-2 p-1 hover:bg-accent/20 rounded transition-smooth"
                    >
                      <Copy size={16} className="text-accent" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cartão de Crédito */}
              <div className="text-center">
                <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Cartão de Crédito</h3>
                <p className="text-muted-foreground mb-6">
                  Pagamento seguro com cartão de crédito ou débito
                </p>
                <Button 
                  onClick={handleCardPayment}
                  variant="donate" 
                  size="lg" 
                  className="w-full"
                  disabled={getCurrentAmount() === 0}
                >
                  Doar com cartão
                </Button>
              </div>

              {/* Boleto */}
              <div className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Boleto Bancário</h3>
                <p className="text-muted-foreground mb-6">
                  Pagamento via boleto bancário (aprovação em até 3 dias úteis)
                </p>
                <Button 
                  onClick={handleBoletoPayment}
                  variant="warm" 
                  size="lg" 
                  className="w-full"
                  disabled={getCurrentAmount() === 0}
                >
                  Gerar boleto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="usage" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Como os recursos são usados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Em benefícios diretos: alimentação kasher, festas, saúde e itens essenciais. 
                Cada doação é direcionada para o apoio concreto às famílias, incluindo descontos 
                em estabelecimentos parceiros, vales para produtos essenciais e apoio nas festas judaicas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="receipt" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Posso receber recibo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, enviamos por e-mail após a confirmação do pagamento. O recibo contém 
                todas as informações necessárias para seus registros pessoais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recurring" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Posso doar todo mês?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, ative "Doação recorrente" no momento do pagamento. Você pode cancelar 
                ou modificar sua doação recorrente a qualquer momento entrando em contato conosco.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-8 subtle-shadow">
            <div className="w-16 h-16 warm-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-foreground" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Transparência</h2>
            <p className="text-muted-foreground mb-6">
              Validação de critérios, registro das entregas e revisão periódica de parceiros. 
              Relatórios sob demanda para doadores que desejam acompanhar o impacto de suas contribuições.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">
                Auditoria regular
              </span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">
                Relatórios de impacto
              </span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">
                Prestação de contas
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoeAgora;