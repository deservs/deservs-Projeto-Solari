import { Share2, Earth } from "lucide-react";

import LogoSolari from "../../../assets/Logo_Solari.svg";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <img src={LogoSolari} alt="Logo Solari" />
            <h1>Solari</h1>
          </div>
          <h6>
            Plataforma de streaming premium que entrega entretenimento de alta
            fidelidade para entusiastas em todo o mundo. Alta definição, sem
            concessões.
          </h6>
        </div>
        <div>
          <h1>Plataforma</h1>
          <h6>Filmes</h6>
          <h6>Séries</h6>
          <h6>Originais</h6>
          <h6>Animes</h6>
        </div>
        <div>
          <h1>Suporte</h1>
          <h6>Centro de Ajuda</h6>
          <h6>Minha Conta</h6>
          <h6>Fale Conosco</h6>
          <h6>Dispositivos</h6>
        </div>
        <div>
          <h1>Empresa</h1>
          <h6>Sobre Nós</h6>
          <h6>Imprensa</h6>
          <h6>Carreiras</h6>
          <h6>Jurídico</h6>
        </div>
        <div>
          <h1>Social</h1>
          <div>
            <button>
              <Share2 size={25} />
            </button>
            <button>
              <Earth size={25} />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h6>© 2024 Solari Streaming Inc. Todos os direitos reservados.</h6>
        <div>
          <h6>Política de Privacidade</h6>
          <h6>Termos de Uso</h6>
          <h6>Preferências de Cookies</h6>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
