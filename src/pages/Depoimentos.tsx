import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote, Heart } from "lucide-react";

const Depoimentos = () => {
  const testimonials = [
    {
      name: "Família Posva",
      content: "Agradecemos imensamente pelo maravilhoso trabalho no projeto. Seu apoio é essencial para nossa família, oferecendo descontos em produtos kosher e possibilitando uma alimentação que, sem sua ajuda, não seria viável. Além dos descontos, fomos contemplados com uma deliciosa refeição de Shabat entregue em casa e um vale compras para um forno de leite. Obrigado e parabéns!",
      highlight: "Descontos kosher e refeições de Shabat"
    },
    {
      name: "Maysa Vainer",
      content: "O Keren Chai tem sido uma grande ajuda em momentos difíceis. Durante a pandemia, recebemos o Emet, o que foi crucial naqueles tempos. BH o projeto seguiu com muitas brachot. Desde então, o projeto continuou a nos apoiar com dentista, sapatos e presentes durante as festas, além de muitas outras pequenas ajudas. Sou muito grata a todos que fazem parte do projeto. O Keren Chai também me faz sentir o verdadeiro Ahavat Israel.",
      highlight: "Apoio completo e Ahavat Israel"
    },
    {
      name: "Daniele Cordoba / Moriah Lyor",
      content: "Há anos, minha família e eu somos beneficiados pelo projeto Keren Chai. A cada mês, aguardamos ansiosos pelo momento de usar o cartão e fazer nossas compras. Os descontos são essenciais para nossa família com renda limitada, permitindo-nos manter aluguel, escola e outras contas em dia. Além dos alimentos, as parcerias do projeto, como o desconto na Peraltas, são extremamente úteis, especialmente para sapatos de crianças, que desgastam rapidamente. Desejo sucesso, saúde e muitas bênçãos aos idealizadores, patrocinadores e voluntários.",
      highlight: "Apoio mensal essencial há anos"
    },
    {
      name: "Gabriel Senderovicz Moita",
      content: "Sou assistido pelo Keren Chai desde 2020 e tenho recebido um acolhimento excepcional. Graças ao projeto, consigo manter minha casa kasher e desfrutar de benefícios como descontos em lojas. Comprei sapatos para Rosh Hashaná e, duas vezes, minha família e eu fomos escolhidos para receber um jantar completo de Shabat em casa, o que foi maravilhoso! Parabéns a todos do Projeto Keren Chai!",
      highlight: "Assistido desde 2020 com casa kasher"
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
            <Button asChild variant="donate" className="px-8 py-3 rounded-lg font-semibold warm-shadow">
              <Link to="/doe-agora">
                Fazer uma doação
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-8 py-3 rounded-lg font-semibold">
              <Link to="/sobre-o-projeto">
                Conhecer mais o projeto
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Depoimentos;