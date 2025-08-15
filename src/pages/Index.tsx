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
                Dar força para quem se esforça
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Apoio a famílias que mantêm a chama do judaísmo acesa — mesmo diante do alto custo de vida.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">O Keren Chai ajuda famílias judaicas que estudam, trabalham e constroem nossa comunidade a viver com dignidade: alimentação kasher, itens para os chaguim, saúde, bem estar e mais.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/doe-agora">
                  <Button variant="donate" size="lg" className="w-full sm:w-auto">
                    Doe agora
                    <Heart size={20} />
                  </Button>
                </Link>
                <Link to="/sobre-o-projeto">
                  <Button variant="warm" size="lg" className="w-full sm:w-auto">
                    Conheça o projeto
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-up lg:order-first">
              <img src={heroImage} alt="Família judaica reunida ao redor da mesa de Shabat com velas acesas, chalá e vinho, representando tradição, união e dignidade familiar" className="rounded-2xl subtle-shadow w-full h-auto" />
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
              <h3 className="text-3xl font-bold text-foreground mb-2">Parceiros</h3>
              <p className="text-muted-foreground">Famílias apoiadas</p>
            </div>
            <div className="text-center animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10+</h3>
              <p className="text-muted-foreground">Parceiros kasher</p>
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

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nossos valores
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Orientamos nosso trabalho pelos princípios fundamentais que sustentam nossa comunidade
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth">
              <h3 className="text-xl font-semibold text-foreground mb-4">Respeito</h3>
              <p className="text-muted-foreground">
                Tratamos cada família com dignidade, preservando sua autonomia e privacidade
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth">
              <h3 className="text-xl font-semibold text-foreground mb-4">Dignidade</h3>
              <p className="text-muted-foreground">
                Oferecemos apoio que fortalece, sem criar dependência, promovendo o crescimento
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth">
              <h3 className="text-xl font-semibold text-foreground mb-4">Comunidade</h3>
              <p className="text-muted-foreground">
                Fortalecemos os laços que nos unem, cuidando de quem sustenta o mundo com a Torá
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Junte-se a nós nesta missão
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Sua contribuição faz a diferença na vida de famílias que dedicam suas vidas aos valores judaicos
          </p>
          <Link to="/doe-agora">
            <Button variant="warm" size="lg" className="warm-shadow">
              Fazer uma doação
              <Heart size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Index;