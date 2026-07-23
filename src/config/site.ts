import { IMAGES } from './images';

export const SITE = {
  brand: {
    prefix: 'Dra.',
    fantasyName: 'Seu Nome Aqui',
  },
  name: 'Dra. Seu Nome Aqui',
  tagline: 'Engenharia estética facial sob direção exclusiva. Naturalidade, precisão e resultado que parece seu.',
  doctor: {
    name: 'Dra. Seu Nome Aqui',
    title: 'Especialista em Estética Avançada',
    crm: 'CRM/CRO 00000/SP',
    experienceYears: '10+',
    image: IMAGES.especialista.portrait,
  },
  contact: {
    phone: '(11) 96424-5000',
    whatsAppNumber: '5511964245000',
    whatsAppMessage: 'Olá, Dra.! Gostaria de agendar uma avaliação exclusiva.',
    address: {
      street: 'Avenida Brigadeiro Faria Lima, 3064',
      district: 'Itaim Bibi — São Paulo, SP',
      cep: 'CEP: 01451-000',
    },
    hours: 'Segunda à Sexta — 09h às 19h',
  },
  legal: {
    cnpj: '00.000.000/0001-00',
  },
  hero: {
    backgroundImage: IMAGES.hero.background,
  },
  preloaderDurationMs: 800,
} as const;

export function buildWhatsAppLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = buildWhatsAppLink(
  SITE.contact.whatsAppNumber,
  SITE.contact.whatsAppMessage,
);
