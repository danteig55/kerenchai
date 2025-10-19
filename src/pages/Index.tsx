import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, ChefHat, Stethoscope, Calendar, Glasses, Shirt, Book, Gem, Utensils, Plane, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-family-shabbat.jpg";
const Index = () => {
  const scrollToBenefits = () => {
    const element = document.getElementById('beneficios');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Dignidade para viver o judaísmo no dia a dia
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Apoio direto e discreto para manter o kasher, a saúde e a vida judaica com dignidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/doe-agora">
                  <Button variant="donate" size="lg" className="w-full sm:w-auto">
                    Doe agora
                    <Heart size={20} />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToBenefits}>
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="animate-slide-up lg:order-first">
              <img src={heroImage} alt="Família judaica celebrando Shabat com dignidade - mesa preparada com chalá, velas e tradições que o Keren Chai ajuda a manter" className="rounded-2xl subtle-shadow w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Como apoiamos as famílias
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Benefícios práticos que fazem a diferença no dia a dia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <ChefHat className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Alimentação Kasher</h3>
              <p className="text-muted-foreground">Descontos e apoio para manter o kasher</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Shirt className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Roupas e Vestimentas</h3>
              <p className="text-muted-foreground">Apoio para vestuário e roupas de festa</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Book className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Itens Religiosos</h3>
              <p className="text-muted-foreground">Tefilin, Mezuza, Tzitzit e outros itens sagrados</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Stethoscope className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Saúde e Bem-Estar</h3>
              <p className="text-muted-foreground">Odontologia, psicologia, nutrição e aparelhos auditivos</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Calendar className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Apoio nos Chaguim</h3>
              <p className="text-muted-foreground">Carnes e roupas para as festas judaicas</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Gem className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Joias nos Chaguim</h3>
              <p className="text-muted-foreground">Apoio para joias nas festas judaicas</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Utensils className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Refeições de Shabat</h3>
              <p className="text-muted-foreground">Apoio para manter as refeições de Shabat</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Plane className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Férias em Família</h3>
              <p className="text-muted-foreground">Apoio para férias e momentos em família</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Leaf className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Arbaat Haminim</h3>
              <p className="text-muted-foreground">As quatro espécies para Sucot</p>
            </div>

            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group text-center">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Glasses className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Óculos</h3>
              <p className="text-muted-foreground">Descontos na compra de óculos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão/Propósito Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 subtle-shadow">
              <p className="text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
                Nosso objetivo é dar dignidade às famílias judaicas, com apoio prático e direto em todas as áreas essenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas/Impacto Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground">Pessoas impactadas</p>
            </div>
            <div className="text-center animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10+</h3>
              <p className="text-muted-foreground">Parceiros ativos</p>
            </div>
            <div className="text-center animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">365</h3>
              <p className="text-muted-foreground">Dias de apoio</p>
            </div>
          </div>
          
          <div className="text-center">
            
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Toda ajuda vira dignidade
          </h2>
          <Link to="/doe-agora">
            <Button variant="warm" size="lg" className="shadow-lg hover:shadow-xl">
              Doe agora
              <Heart size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Index;