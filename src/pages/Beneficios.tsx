import Layout from "@/components/Layout";
import { CreditCard, Percent, Calendar, Gift, Heart, Users, Shield } from "lucide-react";
const Beneficios = () => {
  const benefits = [{
    icon: CreditCard,
    title: "Cartão de desconto em estabelecimentos kasher",
    description: "Descontos em carnes, pães, laticínios e itens essenciais em 10 parceiros kasher selecionados.",
    highlight: "10+ parceiros"
  }, {
    icon: Percent,
    title: "Descontos contínuos",
    description: "Roupas, sapatos, óculos e tratamento odontológico com condições especiais ao longo do ano.",
    highlight: "Ano todo"
  }, {
    icon: Calendar,
    title: "Apoio nas festas judaicas",
    description: "Arbaat Haminim em Sucot e descontos antes de Pessach e Rosh Hashaná (incluindo roupas femininas).",
    highlight: "Sazonal"
  }, {
    icon: Gift,
    title: "Refeições de Shabat e vales especiais",
    description: "Sorteios e ações pontuais com refeições completas de Shabat entregues em casa e vales para itens úteis.",
    highlight: "Sorteios"
  }];
  const stats = [{
    icon: Users,
    number: "250+",
    label: "Famílias apoiadas",
    description: "Atendemos mais de 250 famílias em todo o Brasil"
  }, {
    icon: Shield,
    number: "10+",
    label: "Parceiros kasher",
    description: "Rede crescente de estabelecimentos parceiros"
  }, {
    icon: Heart,
    number: "365",
    label: "Dias de apoio",
    description: "Suporte contínuo durante todo o ano e em datas festivas"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Benefícios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Apoio prático e dignificante para famílias que mantêm a tradição judaica viva
          </p>
          <div className="bg-card rounded-2xl p-6 subtle-shadow inline-block">
            <p className="text-lg font-semibold text-accent">
              Valor que guia tudo: Respeito, dignidade e foco em quem sustenta o mundo com o estudo da Torá
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <div key={index} className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                        <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Números em destaque
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Nosso impacto na comunidade judaica brasileira
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return <div key={index} className="text-center">
                  <div className="w-20 h-20 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-foreground" size={40} />
                  </div>
                  <h3 className="text-5xl font-bold text-primary-foreground mb-2">{stat.number}</h3>
                  <p className="text-xl text-primary-foreground mb-2">{stat.label}</p>
                  <p className="text-sm text-primary-foreground/70 max-w-xs mx-auto">{stat.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Como funciona cada benefício
            </h2>
            
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 subtle-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <CreditCard className="mr-3 text-accent" size={24} />
                  Cartão de Desconto Kasher
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nosso cartão de desconto oferece reduções significativas em estabelecimentos kasher 
                  selecionados, incluindo açougues, padarias, laticínios e mercearias especializadas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Descontos de 20% a 40% em produtos essenciais</li>
                  <li>• Válido em 10+ estabelecimentos parceiros</li>
                  <li>• Renovação automática para famílias aprovadas</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 subtle-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Calendar className="mr-3 text-accent" size={24} />
                  Apoio Sazonal para Festas
                </h3>
                <p className="text-muted-foreground mb-4">
                  Entendemos que as festas judaicas trazem custos adicionais. Por isso, oferecemos 
                  apoio específico antes das principais celebrações do calendário judaico.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Arbaat Haminim subsidiado para Sucot</li>
                  <li>• Descontos especiais antes de Pessach</li>
                  <li>• Apoio para roupas novas em Rosh Hashaná</li>
                  <li>• Iniciativas especiais para Chaguim.</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 subtle-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Gift className="mr-3 text-accent" size={24} />
                  Refeições e Vales Especiais
                </h3>
                <p className="text-muted-foreground mb-4">Através de sorteios e ações específicas, oferecemos refeições completas de Shabat e suporte para férias.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Refeições de Shabat entregues em casa</li>
                  <li>• Apoio para férias </li>
                  <li>• Sorteios mensais para famílias cadastradas</li>
                  <li>• Distribuição equitativa e transparente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Beneficios;