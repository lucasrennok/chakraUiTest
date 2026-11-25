import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { AppRoutes } from './routes';

function renderAt(path) {
  return render(
    <ChakraProvider value={defaultSystem}>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </ChakraProvider>
  );
}

describe('rotas', () => {
  it('mostra a página de categorias na raiz', () => {
    renderAt('/');
    expect(
      screen.getByRole('heading', {
        name: /para o quê você precisa de design/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /pesquisar/i })
    ).toBeInTheDocument();
  });

  it('navega do card mais popular para o checkout', async () => {
    renderAt('/');
    await userEvent.click(
      screen.getByRole('link', { name: /logotipo e identidade visual/i })
    );
    expect(
      screen.getByRole('heading', { name: /logo & identidade visual/i })
    ).toBeInTheDocument();
  });

  it('volta para categorias em rota desconhecida', () => {
    renderAt('/nao-existe');
    expect(
      screen.getByRole('heading', {
        name: /para o quê você precisa de design/i,
      })
    ).toBeInTheDocument();
  });
});
