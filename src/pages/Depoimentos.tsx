import Layout from "@/components/Layout";
import { Quote, Play, Heart } from "lucide-react";

const Depoimentos = () => {
  const testimonials = [
    {
      name: "Família Posva",
      content: "Agradecemos imensamente pelo trabalho do Keren Chai. Os descontos em produtos kasher viabilizam nossa alimentação. Recebemos refeição de Shabat em casa e um vale para um forno de leite. Obrigado!",
      highlight: "Produtos kasher e vale para forno"
    },
    {
      name: "Maysa Vainer",
      content: "Durante a pandemia, recebemos o Emet, essencial naqueles tempos. Depois vieram dentista, sapatos e presentes de festas. O Keren Chai nos faz sentir o verdadeiro Ahavat Israel.",
      highlight: "Apoio completo durante a pandemia"
    },
    {
      name: "Daniele Cordoba / Moriah Lyor",
      content: "A cada mês, o cartão ajuda a manter aluguel, escola e contas em dia. Os descontos — inclusive em parceiros como lojas de sapatos infantis — são essenciais para nossa família.",
      highlight: "Cartão de desconto mensal"
    },
    {
      name: "Gabriel Senderowicz Moita",
      content: "Com o Keren Chai, mantemos a casa kasher e já recebemos duas vezes um jantar de Shabat completo em casa. Projeto maravilhoso!",
      highlight: "Casa kasher e jantares de Shabat"
    }
  ];

  const videoTestimonials = [
    {
      title: "Rabino Chaim explica o projeto",
      description: "Entenda a importância do Keren Chai na comunidade",
      thumbnail: "https://img.youtube.com/vi/placeholder1/maxresdefault.jpg"
    },
    {
      title: "Depoimento da Família Cohen",
      description: "Como o projeto transformou nossa vida",
      thumbnail: "https://img.youtube.com/vi/placeholder2/maxresdefault.jpg"
    },
    {
      title: "Rabino David endossa o projeto",
      description: "A importância do apoio comunitário",
      thumbnail: "https://img.youtube.com/vi/placeholder3/maxresdefault.jpg"
    },
    {
      title: "Família Levy compartilha gratidão",
      description: "Testemunho de apoio recebido",
      thumbnail: "https://img.youtube.com/vi/placeholder4/maxresdefault.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem se esforça agradece a força
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os relatos de famílias que receberam apoio do Keren Chai e como isso 
            transformou suas vidas, mantendo a dignidade e a tradição judaica
          </p>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 subtle-shadow hover:warm-shadow transition-smooth">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Quote className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{testimonial.name}</h3>
                    <span className="text-sm text-accent font-medium">{testimonial.highlight}</span>
                  </div>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Depoimentos em vídeo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Assista aos testemunhos de rabinos e famílias que fazem parte desta corrente de apoio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden subtle-shadow hover:warm-shadow transition-smooth group cursor-pointer">
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/80 group-hover:bg-primary/90 transition-smooth">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">Clique para assistir</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Em breve, mais depoimentos e vídeos explicativos sobre nosso trabalho
            </p>
            <div className="bg-card rounded-xl p-6 inline-block subtle-shadow">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Nota:</strong> Os vídeos serão incorporados 
                quando estiverem disponíveis no YouTube ou Vimeo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 warm-gradient rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="text-foreground" size={32} />
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-8 leading-relaxed">
              "O Keren Chai nos faz sentir o verdadeiro Ahavat Israel - 
              o amor ao próximo que une nossa comunidade"
            </blockquote>
            <p className="text-primary-foreground/80 text-lg">
              — Reflexão de uma família apoiada pelo projeto
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Faça parte desta corrente de apoio
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sua contribuição pode ser o próximo testemunho de gratidão que receberemos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/doe-agora" className="inline-block">
              <button className="bg-accent text-accent-foreground hover:scale-105 transition-smooth px-8 py-3 rounded-lg font-semibold warm-shadow">
                Fazer uma doação
              </button>
            </a>
            <a href="/sobre-o-projeto" className="inline-block">
              <button className="border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth px-8 py-3 rounded-lg font-semibold">
                Conhecer mais o projeto
              </button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Depoimentos;