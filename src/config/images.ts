/**
 * Central image paths — all static assets live under public/images/
 *
 * Portfolio order matches the site sections:
 *   01 → Toxina Botulínica
 *   02 → Arquitetura Labial
 *   03 → Banco de Colágeno
 */
export const IMAGES = {
  portfolio: {
    toxinaBotulinica: {
      antes: '/images/portfolio/01-toxina-botulinica/antes.jpg',
      depois: '/images/portfolio/01-toxina-botulinica/depois.jpg',
    },
    arquiteturaLabial: {
      antes: '/images/portfolio/02-arquitetura-labial/antes.jpg',
      depois: '/images/portfolio/02-arquitetura-labial/depois.jpg',
    },
    bancoColageno: {
      antes: '/images/portfolio/03-banco-colageno/antes.jpg',
      depois: '/images/portfolio/03-banco-colageno/depois.jpg',
    },
  },
  hero: {
    background: {
      defaultJpg: '/images/hero/capa 00.jpg',
    },
  },
  especialista: {
    portrait: {
      defaultJpg: '/images/especialista/portrait.jpg',
    },
  },
} as const;
