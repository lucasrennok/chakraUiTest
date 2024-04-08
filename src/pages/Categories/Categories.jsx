import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button, Stack, IconButton, Icon } from '@chakra-ui/react';
import './styles.css';
import { FaSearch } from 'react-icons/fa';

const barMenu = [
  'Design de site e aplicativo',
  'Negócios e publicidade',
  'Vestuário e item promocional',
  'Arte e ilustração',
  'Embalagem e rótulo',
  'Livro e revista',
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
      </main>
      <Footer />
    </div>
  );
}

export default Categories;
