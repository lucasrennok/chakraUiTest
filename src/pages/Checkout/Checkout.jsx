// import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Image, Box, Button } from '@chakra-ui/react';
import './styles.css';
import { FaArrowDown, FaCheck } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

import checkoutImage from '../../assets/images/checkoutImage.png';

function Checkout() {
  return (
    <div>
      <Header />
      <main>
        <Box
          boxSize="100%"
          className="boxmain"
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          display="flex"
        >
          <div className="logoIdentidade">
            <Image src={checkoutImage} alt="checkoutImg" height="500px" />
            <div className="vencedorCheckout">
              <p>Concurso de design criado por The Hype Lab</p>
              <p> Design vencedor por leonelbalza</p>
            </div>
          </div>

          <div className="selecaoPacote">
            <h1 className="logoH1">Logo & Identidade Visual</h1>
            <h2 className="logoH2">A partir de US$ 599</h2>

            <ul class="items">
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />1 design de
                logotipo finalizado e totalmente personalizado
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />1 design de
                cartão de visita
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />1 papel
                timbrado
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />1 envelope
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />1 capa para
                Facebook
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                Propriedade total dos direitos autorais
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                Arquivos digitais para web e impressão (RGB, CMYK, PNG, JPG,
                PDF)
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />O arquivo
                original, editável (ex. AI)
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                100% garantia de satisfação ou o seu dinheiro de volta
              </li>
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
              <Icon as={FaArrowDown} height="15px" marginLeft="5px" />
            </Button>
          </div>
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
