export const SITE = {
  name: 'A Clínica',
  tagline: 'Engenharia estética e harmonização facial de alto padrão.',
  doctor: {
    name: 'Dra. Nome da Especialista',
    title: 'Especialista em Estética Avançada',
    crm: 'CRM/CRO 00000/SP',
    experienceYears: '10+',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
  },
  contact: {
    phone: '(11) 99999-9999',
    whatsAppNumber: '5511999999999',
    whatsAppMessage: 'Olá, gostaria de um atendimento exclusivo para avaliação.',
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
    backgroundImage:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop',
  },
  preloaderDurationMs: 1800,
} as const;

export function buildWhatsAppLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = buildWhatsAppLink(
  SITE.contact.whatsAppNumber,
  SITE.contact.whatsAppMessage,
);
