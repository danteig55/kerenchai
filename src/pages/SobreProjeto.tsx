import Layout from "@/components/Layout";
import { CheckCircle, Users, Search, Shield, FileCheck, Gift } from "lucide-react";
const SobreProjeto = () => {
  const steps = [{
    icon: Users,
    title: "Indicação",
    description: "Rabbinos, estabelecimentos ou comunidade indicam famílias que precisam de apoio"
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
  return <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre o Projeto Keren Chai
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa missão, valores e como trabalhamos para fortalecer famílias judaicas no Brasil
          </p>
        </div>
      </section>

      {/* Missão */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nossa Missão</h2>
            <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Keren Chai existe para <strong className="text-foreground">dar força a quem se esforça</strong>. 
                Nosso compromisso é apoiar famílias judaicas que enfrentam pressões financeiras, mas não abrem 
                mão de viver o judaísmo no dia a dia. Ajudamos de forma prática e respeitosa, priorizando 
                dignidade, autonomia e pertencimento comunitário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Apoiamos */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Quem apoiamos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Atendemos mais de <strong className="text-accent">250 famílias</strong> — entre Avrechim e 
                Baalê Batim — que conciliam estudo, trabalho e vida familiar, mantendo prática judaica 
                e valores éticos.
              </p>
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
            <div className="bg-card rounded-2xl p-8 subtle-shadow">
              <div className="text-center">
                <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary-foreground" size={40} />
                </div>
                <h3 className="text-6xl font-bold text-foreground mb-2">250+</h3>
                <p className="text-xl text-muted-foreground mb-4">Famílias apoiadas</p>
                <p className="text-sm text-muted-foreground">
                  Entre Avrechim e Baalê Batim que mantêm a chama do judaísmo acesa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funcionamos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Como funcionamos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso processo é transparente, criterioso e focado em oferecer apoio digno e efetivo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            return <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 warm-shadow">
                      <IconComponent className="text-primary-foreground" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 warm-gradient rounded-full flex items-center justify-center text-sm font-bold text-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Transparência</h2>
            <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Trabalhamos com controle, validação de critérios e revisão periódica das parcerias. Mantemos comunicação ativa com doadores e parceiros, garantindo que cada contribuição seja utilizada de forma responsável e transparente.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Relatórios de impacto
                </span>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Comunicação transparente
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default SobreProjeto;