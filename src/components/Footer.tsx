import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            <span className="font-semibold">Keren Chai</span> • CNPJ 00.000.000/0000-00 • São Paulo – SP • 
            <a href="mailto:projetokerenchai@gmail.com" className="hover:text-primary-foreground transition-smooth">
              projetokerenchai@gmail.com
            </a> • 
            <Link to="/privacidade" className="hover:text-primary-foreground transition-smooth">
              Política de Privacidade
            </Link> • 
            <Link to="/lgpd" className="hover:text-primary-foreground transition-smooth">
              LGPD
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;