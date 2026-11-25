import { Box, Button, Icon, Image } from '@chakra-ui/react';
import { FaArrowDown, FaCheck } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import checkoutImage from '../../assets/images/checkoutImage.png';
import './styles.css';

const packageItems = [
  '1 design de logotipo finalizado e totalmente personalizado',
  '1 design de cartão de visita',
  '1 papel timbrado',
  '1 envelope',
  '1 capa para Facebook',
  'Propriedade total dos direitos autorais',
  'Arquivos digitais para web e impressão (RGB, CMYK, PNG, JPG, PDF)',
  'O arquivo original, editável (ex. AI)',
  '100% garantia de satisfação ou o seu dinheiro de volta',
];

function Checkout() {
  return (
    <div>
      <Header />
      <main>
        <Box
          boxSize="100%"
          className="boxmain"
          alignItems="flex-start"
          justifyContent="flex-start"
          display="flex"
        >
          <div className="logoIdentidade">
            <Image
              src={checkoutImage}
              alt="Exemplo de identidade visual vencedora de um concurso"
              height="500px"
            />
            <div className="vencedorCheckout">
              <p>Concurso de design criado por The Hype Lab</p>
              <p>Design vencedor por leonelbalza</p>
            </div>
          </div>

          <div className="selecaoPacote">
            <h1 className="logoH1">Logo &amp; Identidade Visual</h1>
            <h2 className="logoH2">A partir de US$ 599</h2>

            <ul className="items">
              {packageItems.map((item) => (
                <li key={item}>
                  <Icon boxSize="13px" marginRight="5px">
                    <FaCheck />
                  </Icon>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              backgroundColor="black"
              color="white"
              width="100%"
              borderRadius="20px"
              height="40px"
              fontSize="15px"
            >
              Selecione um pacote
              <Icon boxSize="13px" marginLeft="5px">
                <FaArrowDown />
              </Icon>
            </Button>
          </div>
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
