import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Search, Shield, FileCheck, Gift, CreditCard, Percent, Calendar, Heart } from "lucide-react";
const SobreProjeto = () => {
  const steps = [{
    icon: Users,
    title: "Indicação",
    description: "Rabinos, estabelecimentos ou comunidade indicam famílias que precisam de apoio"
  }, {
    icon: FileCheck,
    title: "Solicitação",
    description: "A família realiza o cadastro através de nosso processo simplificado"
  }, {
    icon: Search,
    title: "Avaliação",
    description: "Nossa equipe analisa criteriosamente cada solicitação recebida"
  }, {
    icon: Shield,
    title: "Validação",
    description: "Verificamos se os critérios estabelecidos são atendidos"
  }, {
    icon: Gift,
    title: "Concessão",
    description: "Liberamos os benefícios via parceiros, cartão e ações sazonais"
  }];
  const benefits = [{
    icon: CreditCard,
    title: "Descontos em estabelecimentos Kasher",
    description: "Descontos em carnes, pães, laticínios e itens essenciais em 10+ parceiros kasher selecionados."
  }, {
    icon: Percent,
    title: "Descontos contínuos",
    description: "Roupas, sapatos, óculos e tratamento odontológico com condições especiais ao longo do ano."
  }, {
    icon: Calendar,
    title: "Apoio nas festas judaicas",
    description: "Arbaat Haminim em Sucot e descontos antes de Pessach e Rosh Hashaná."
  }, {
    icon: Gift,
    title: "Refeições de Shabat",
    description: "Sorteios e ações pontuais com refeições completas entregues em casa."
  }];
  const stats = [{
    icon: Users,
    number: "250+",
    label: "Famílias apoiadas"
  }, {
    icon: Shield,
    number: "10+",
    label: "Parceiros"
  }, {
    icon: Heart,
    number: "365",
    label: "Dias de apoio"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Fortalecemos famílias judaicas no Brasil
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Apoio prático e dignificante para quem se esforça para manter a tradição judaica viva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doe-agora">
              <Button size="lg" variant="donate" className="text-lg px-8 py-4">
                Doe Agora
              </Button>
            </Link>
            <Link to="/sobre-o-projeto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Saber Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção 1 - Apresentação do Projeto */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">O que é o Keren Chai</h2>
            <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Keren Chai existe para <strong className="text-foreground">dar força a quem se esforça para viver com dignidade judaica</strong>. 
                Apoiamos famílias judaicas que enfrentam pressões financeiras oferecendo descontos em alimentação kasher e 
                diversos benefícios que garantem acesso a necessidades do dia a dia com valores acessíveis. Nossa missão vai além 
                do apoio financeiro: promovemos dignidade, autonomia e fortalecem o pertencimento comunitário, permitindo que 
                famílias mantenham suas tradições sem comprometer suas necessidades básicas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Quem apoiamos</h3>
              <p className="text-lg text-muted-foreground mb-6">Famílias — inclusive Avrechim e Baalê Batim — que conciliam estudo, trabalho e vida familiar, mantendo prática judaica e valores éticos.</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1" size={20} />
                  <p className="text-muted-foreground">Famílias que dedicam tempo ao estudo da Torá</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1" size={20} />
                  <p className="text-muted-foreground">Membros ativos da comunidade judaica</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1" size={20} />
                  <p className="text-muted-foreground">Famílias que mantêm práticas kasher</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1" size={20} />
                  <p className="text-muted-foreground">Trabalhadores que enfrentam dificuldades financeiras</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Seção 2 - Impacto e Resultados */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Nosso impacto na comunidade
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Números que refletem nosso compromisso com a comunidade judaica brasileira
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return <div key={index} className="text-center">
                  <div className="w-20 h-20 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-foreground" size={40} />
                  </div>
                  <h3 className="text-5xl font-bold text-primary-foreground mb-2">{stat.number}</h3>
                  <p className="text-xl text-primary-foreground">{stat.label}</p>
                </div>;
          })}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">Como funcionamos</h3>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-12">
              Processo transparente, criterioso e focado em oferecer apoio digno e efetivo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            return <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-foreground" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{step.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Seção 3 - Benefícios de Apoiar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Por que apoiar o Keren Chai</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Seu apoio gera impacto real e fortalece toda a comunidade judaica
            </p>
            <div className="bg-card rounded-2xl p-6 subtle-shadow inline-block">
              <p className="text-lg font-semibold text-accent">
                Transparência, dignidade e foco em quem precisa da nossa ajuda.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <div key={index} className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Transparência e Responsabilidade</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Trabalhamos com controle rigoroso, validação de critérios e revisão periódica das parcerias. 
              Mantemos comunicação ativa com doadores e parceiros, garantindo que cada contribuição seja 
              utilizada de forma responsável e transparente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/doe-agora">
                <Button size="lg" variant="donate" className="text-lg px-8 py-4">
                  Fazer Doação
                </Button>
              </Link>
              <Link to="/sobre-o-projeto">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Saber Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default SobreProjeto;