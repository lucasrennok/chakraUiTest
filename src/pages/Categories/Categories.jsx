import { Button, Icon, IconButton, Stack } from '@chakra-ui/react';
import { FaArrowUp, FaCheck, FaSearch, FaStar } from 'react-icons/fa';
import { FaBookAtlas } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const barMenu = [
  'Design de site e aplicativo',
  'Negócios e publicidade',
  'Vestuário e item promocional',
  'Arte e ilustração',
  'Embalagem e rótulo',
  'Livro e revista',
];

const popularItems = [
  'Logotipo',
  'Cartão de visita',
  'Papel timbrado e envelope',
  'Capa para Facebook',
];

function Categories() {
  return (
    <div>
      <Header />
      <h3>
        Página inicial / <strong>Categorias</strong>
      </h3>
      <main>
        <h2>Para o quê você precisa de design?</h2>
        <div className="div-com-scroll-horizontal">
          <Stack gap={4} direction="row" align="center" flexShrink="0">
            <IconButton
              aria-label="Pesquisar categorias"
              variant="subtle"
              color="#4b4f56"
              height="80px"
              width="100px"
            >
              <FaSearch />
            </IconButton>
            <Button size="lg" colorPalette="blue" height="80px" fontSize="16px">
              Logotipo e identidade
            </Button>
            {barMenu.map((info) => (
              <Button
                size="lg"
                key={info}
                variant="subtle"
                color="#4b4f56"
                height="80px"
                fontSize="16px"
              >
                {info}
              </Button>
            ))}
          </Stack>
        </div>

        <Link to="/checkout" className="info-container">
          <div className="popular">
            <Icon boxSize="18px" marginLeft="5px">
              <FaStar />
            </Icon>
            <p>Mais Popular</p>
          </div>
          <div className="details">
            <div className="titlePriceIcon">
              <Icon boxSize="40px" marginRight="5px">
                <FaBookAtlas />
              </Icon>
              <div className="comecotitle">
                <div className="title">
                  <p>Logotipo e identidade visual</p>
                </div>
                <div className="price">
                  a partir de US$ 599
                  <span className="discount">Economize 39%+</span>
                </div>
              </div>
            </div>
            <div className="description">
              Logotipo e principais itens digitais e impressos dos quais você
              precisa para começar sua marca com o pé direito:
            </div>
            <ul className="items">
              {popularItems.map((item) => (
                <li key={item}>
                  <Icon boxSize="13px" marginRight="5px">
                    <FaCheck />
                  </Icon>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Link>

        <div className="botao_nao_encontrou">
          <a href="#topo">
            <span className="nao-encontrou-texto">
              Ainda não encontrou o que está procurando? Pesquise para então
              encontrar{' '}
              <Icon boxSize="18px" marginLeft="5px">
                <FaArrowUp />
              </Icon>
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Categories;
