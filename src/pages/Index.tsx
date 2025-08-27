import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-family-shabbat.jpg";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Doe um pouco e ajude muito
              </h1>
              <p className="text-xl text-muted-foreground mb-8">Apoio direto a famílias judaicas, de forma digna, possibilitando o consumo kasher e oferecendo suporte em várias necessidades essências do dia a dia.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/doe-agora">
                  <Button variant="donate" size="lg" className="w-full sm:w-auto">
                    Doe agora
                    <Heart size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-up lg:order-first">
              <img src={heroImage} alt="Família judaica celebrando Shabat com dignidade - mesa preparada com chalá, velas e tradições que o Keren Chai ajuda a manter" className="rounded-2xl subtle-shadow w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">250</h3>
              <p className="text-muted-foreground">Famílias apoiadas</p>
            </div>
            <div className="text-center animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10+</h3>
              <p className="text-muted-foreground">Parceiros </p>
            </div>
            <div className="text-center animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">365</h3>
              <p className="text-muted-foreground">Dias de apoio por ano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Como apoiamos as famílias
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Benefícios práticos que fazem a diferença no dia a dia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Heart className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Alimentação Kasher</h3>
              <p className="text-muted-foreground">Descontos especiais nas compras nos estabelecimentos Kasher.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Shield className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Saúde, bem-estar e necessidades do dia a dia.</h3>
              <p className="text-muted-foreground">Apoio em tratamentos odontológicos, nutricionista, psicologia, aparelhos auditivos, roupas para crianças, camisas sociais, sapatos</p>
            </div>
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth group">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Users className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Apoio nos Chaguim</h3>
              <p className="text-muted-foreground">Carnes, roupas para chaguim, arbaat haminim, joias e itens especiais para celebrar as festas judaicas</p>
            </div>
          </div>
          <Link to="/sobre-o-projeto">
            
          </Link>
        </div>
      </section>

    </Layout>;
};
export default Index;