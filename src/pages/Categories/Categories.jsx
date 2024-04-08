import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button, Stack, IconButton, Icon } from '@chakra-ui/react';
import './styles.css';
import { FaSearch, FaArrowUp, FaCheck, FaStar } from 'react-icons/fa';
import { FaBookAtlas } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const barMenu = [
  'Design de site e aplicativo',
  'Negócios e publicidade',
  'Vestuário e item promocional',
  'Arte e ilustração',
  'Embalagem e rótulo',
  'Livro e revista',
];

function Categories() {
  function scrollDiv(event) {
    // let div = event.currentTarget;
    // let mouseX = event.clientX;
  }

  // function handleClick() {
  //   window.location.href = '/checkout';
  // }

  return (
    <div>
      <Header />
      <h3>
        Página inicial / <strong>Categorias</strong>
      </h3>
      <main>
        <h2>Para o quê você precisa de design?</h2>
        <div
          className="div-com-scroll-horizontal"
          onmousemove={(event) => scrollDiv(event)}
        >
          <Stack spacing={4} direction="row" align="center" flexShrink="0">
            <Button
              size="lg"
              key="search"
              color="#4b4f56"
              height="80px"
              fontSize="16px"
              width="100px"
            >
              <IconButton
                aria-label="Search database"
                color="#4b4f56"
                icon={<Icon as={FaSearch} />}
              />
            </Button>
            <Button
              size="lg"
              key={'Logotipo e identidade'}
              colorScheme="blue"
              height="80px"
              fontSize="16px"
            >
              Logotipo e identidade
            </Button>
            {barMenu.map((info) => (
              <Button
                size="lg"
                key={info}
                color="#4b4f56"
                height="80px"
                fontSize="16px"
              >
                {info}
              </Button>
            ))}
          </Stack>
        </div>

        <Link to="/checkout" class="info-container">
          <div class="popular">
            <Icon as={FaStar} height="18px" marginLeft="5px" />
            <p>Mais Popular</p>
          </div>
          <div class="details">
            <div class="titlePriceIcon">
              <Icon
                as={FaBookAtlas}
                height="50px"
                width="40px"
                marginRight="5px"
              />
              <div class="comecotitle">
                <div class="title">
                  <p>Logotipo e identidade visual</p>
                </div>
                <div class="price">
                  a partir de US$ 599
                  <span class="discount">Economize 39%+</span>
                </div>
              </div>
            </div>
            <div class="description">
              Logotipo e principais itens digitais e impressos dos quais você
              precisa para começar sua marca com o pé direito:
            </div>
            <ul class="items">
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                logotipo
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                Cartão de visita
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                Papel Timbrado e Envelope
              </li>
              <li>
                <Icon as={FaCheck} height="15px" marginRight="5px" />
                Capa para Facebook
              </li>
            </ul>
          </div>
        </Link>

        <div className="botao_nao_encontrou">
          <a href="">
            <h1>
              Ainda não encontrou o que está procurando? Pesquise para então
              encontrar <Icon as={FaArrowUp} height="18px" marginLeft="5px" />
            </h1>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Categories;
