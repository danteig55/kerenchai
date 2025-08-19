import { Link } from "react-router-dom";
import { Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 warm-gradient rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">KC</span>
              </div>
              <span className="font-semibold text-xl">Keren Chai</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Dar força para quem se esforça. Apoiamos famílias judaicas que mantêm 
              a chama do judaísmo acesa, oferecendo dignidade e apoio comunitário.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:projetokerenchai@gmail.com" 
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail size={16} />
                <span className="text-sm">projetokerenchai@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre-o-projeto" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Sobre o projeto
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Apoie</h3>
            <Link 
              to="/doe-agora" 
              className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:scale-105 transition-smooth"
            >
              <Heart size={16} />
              <span>Fazer uma doação</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Keren Chai. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidade" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Política de Privacidade
            </Link>
            <Link to="/lgpd" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;