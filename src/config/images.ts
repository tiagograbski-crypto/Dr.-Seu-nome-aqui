/**
 * Central image paths — all static assets live under public/images/
 *
 * Portfolio order matches the site sections:
 *   01 → Toxina Botulínica
 *   02 → Arquitetura Labial
 *   03 → Banco de Colágeno
 */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const IMAGES = {
  portfolio: {
    toxinaBotulinica: {
      antes: asset('images/portfolio/01-toxina-botulinica/antes.jpg'),
      depois: asset('images/portfolio/01-toxina-botulinica/depois.jpg'),
    },
    arquiteturaLabial: {
      antes: asset('images/portfolio/02-arquitetura-labial/antes.jpg'),
      depois: asset('images/portfolio/02-arquitetura-labial/depois.jpg'),
    },
    bancoColageno: {
      antes: asset('images/portfolio/03-banco-colageno/antes.jpg'),
      depois: asset('images/portfolio/03-banco-colageno/depois.jpg'),
    },
  },
  hero: {
    background: {
      defaultJpg: asset('images/hero/hero-cover.jpg'),
    },
  },
  especialista: {
    portrait: {
      defaultJpg: asset('images/especialista/portrait.jpg'),
    },
  },
} as const;
