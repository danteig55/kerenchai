import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Search, Shield, FileCheck, Gift, Calendar, Heart, ChefHat, Shirt, BookOpen, Stethoscope, Sparkles, Utensils, Plane, Leaf } from "lucide-react";
const SobreProjeto = () => {
  const projectBenefits = [
    {
      icon: ChefHat,
      title: "Alimentação Kasher",
      description: "Acesso a alimentos certificados com descontos especiais"
    },
    {
      icon: Shirt,
      title: "Roupas e Vestimentas",
      description: "Masculinas, femininas e infantis com preços acessíveis"
    },
    {
      icon: BookOpen,
      title: "Itens Religiosos (Tefilin, Mezuza, Tzitzit)",
      description: "Acesso a objetos sagrados essenciais para a prática judaica"
    },
    {
      icon: Stethoscope,
      title: "Saúde e Bem-Estar",
      description: "Odontologia, nutricionista, psicólogo e aparelhos auditivos"
    },
    {
      icon: Calendar,
      title: "Apoio nos Chaguim (carnes e roupas)",
      description: "Apoio especial durante as festas judaicas"
    },
    {
      icon: Sparkles,
      title: "Joias nos Chaguim",
      description: "Presentes especiais para celebrar as tradições"
    },
    {
      icon: Utensils,
      title: "Refeições de Shabat",
      description: "Jantares completos entregues em casa"
    },
    {
      icon: Plane,
      title: "Férias em Família",
      description: "Momentos de descanso e união familiar"
    },
    {
      icon: Leaf,
      title: "Arbaat Haminim (Sucot)",
      description: "As quatro espécies para celebrar a festa"
    }
  ];

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
            Sobre o Projeto Keren Chai
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Keren Chai apoia famílias judaicas com benefícios práticos e dignos: alimentação kasher, itens para os chaguim, saúde e bem-estar — fortalecendo quem se esforça para viver a tradição no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funcionamos */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">Como funcionamos</h2>
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

      {/* Seção dos Benefícios do Projeto - Arte Visual */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Benefícios do Projeto Keren Chai
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apoio completo para fortalecer a vida judaica das famílias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projectBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 subtle-shadow hover:warm-shadow transition-smooth text-center group">
                  <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                    <IconComponent className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow inline-block max-w-4xl">
              <p className="text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
                "Unindo a comunidade com benefícios que apoiam o dia a dia e fortalecem o estudo da Torá"
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default SobreProjeto;