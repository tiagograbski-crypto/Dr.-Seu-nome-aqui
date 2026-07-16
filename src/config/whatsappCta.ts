import { SITE } from './site';

export type WhatsAppSectionId =
  | 'hero'
  | 'protocol'
  | 'portfolio'
  | 'especialista'
  | 'oferta-final'
  | 'reviews'
  | 'faq'
  | 'default';

export interface WhatsAppCtaConfig {
  label: string;
  message: string;
  ariaLabel: string;
}

const DEFAULT_MESSAGE = SITE.contact.whatsAppMessage;

export const WHATSAPP_SECTION_IDS: WhatsAppSectionId[] = [
  'hero',
  'protocol',
  'portfolio',
  'especialista',
  'oferta-final',
  'reviews',
  'faq',
];

export const WHATSAPP_CTA_BY_SECTION: Record<WhatsAppSectionId, WhatsAppCtaConfig> = {
  hero: {
    label: 'Agendar',
    message: 'Olá, gostaria de agendar uma avaliação exclusiva.',
    ariaLabel: 'Agendar avaliação exclusiva pelo WhatsApp',
  },
  protocol: {
    label: 'Saber mais',
    message: 'Olá, Dra.! Quero entender melhor a sua metodologia.',
    ariaLabel: 'Saber mais sobre a metodologia pelo WhatsApp',
  },
  portfolio: {
    label: 'Resultados',
    message: 'Olá, vi os resultados dos tratamentos e gostaria de uma avaliação.',
    ariaLabel: 'Agendar avaliação após ver os resultados pelo WhatsApp',
  },
  especialista: {
    label: 'Consulta',
    message: `Olá, gostaria de agendar uma consulta com a ${SITE.doctor.name}.`,
    ariaLabel: 'Agendar consulta com a especialista pelo WhatsApp',
  },
  'oferta-final': {
    label: 'Agendar agora',
    message: 'Olá, quero aproveitar a avaliação exclusiva.',
    ariaLabel: 'Agendar avaliação agora pelo WhatsApp',
  },
  reviews: {
    label: 'Agendar',
    message: 'Olá, li os depoimentos e gostaria de agendar uma avaliação.',
    ariaLabel: 'Agendar avaliação após ler depoimentos pelo WhatsApp',
  },
  faq: {
    label: 'Dúvidas',
    message: 'Olá, tenho algumas dúvidas e gostaria de conversar.',
    ariaLabel: 'Tirar dúvidas pelo WhatsApp',
  },
  default: {
    label: 'Agendar',
    message: DEFAULT_MESSAGE,
    ariaLabel: 'Fale conosco pelo WhatsApp',
  },
};

export function getWhatsAppCta(sectionId: string): WhatsAppCtaConfig {
  if (sectionId in WHATSAPP_CTA_BY_SECTION) {
    return WHATSAPP_CTA_BY_SECTION[sectionId as WhatsAppSectionId];
  }
  return WHATSAPP_CTA_BY_SECTION.default;
}
