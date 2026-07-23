import { SHOWROOM_NAV } from './showroomNav';

export const B2B_OWNER_GUIDE = {
  enabled: SHOWROOM_NAV.enabled,
  businessLabel: 'sua clínica',
  deliveryDays: '7 a 10 dias úteis',
  photoLimit: 15,
  founderName: 'Tiago Grabski',
  founderRole: 'gl.id',
  founderBio:
    'Entrego uma máquina de agendamento no WhatsApp para clínicas de estética facial — com contrato, prazo, exclusividade regional e arquivos no seu nome.',
  scopeIncluded: [
    'Site entregue com sua logo, cores e fotos reais do consultório e procedimentos.',
    'Textos focados em conversão para estética facial e harmonização.',
    'Botão de WhatsApp integrado e direcionado para a sua equipe.',
    'Propriedade total dos arquivos após a entrega.',
    'Exclusividade de licença para a sua região.',
  ],
  steps: [
    'Você envia sua logo e de 10 a 15 fotos do consultório e procedimentos',
    'Paga 50% de entrada para travar a exclusividade na sua região',
    'Em 7 a 10 dias úteis o site está no ar — você acerta os 50% finais',
  ],
  cards: [
    {
      num: '01',
      title: 'Site Ultra Rápido',
      body: 'A paciente não desiste de esperar a página carregar no celular.',
    },
    {
      num: '02',
      title: 'Agendamentos Organizados',
      body: 'O contato chega no seu WhatsApp estruturado, com procedimento de interesse e dados para retorno.',
    },
    {
      num: '03',
      title: 'Base Pronta',
      body: 'Estrutura entregue com código limpo e otimizado — pronta para operar e escalar quando você quiser.',
    },
  ],
  faq: [
    {
      question: 'Tem mensalidade?',
      answer:
        'Não. O pagamento é único. Você só paga a renovação anual do domínio (.com.br) no ano seguinte.',
    },
    {
      question: 'O site é meu?',
      answer: 'Sim. Após a entrega, os arquivos e o site são 100% da sua clínica.',
    },
    {
      question: 'Meu concorrente pode ter igual?',
      answer:
        'Não. Liberamos apenas uma licença exclusiva de operação por região — seu concorrente direto na mesma área não recebe a mesma estrutura.',
    },
  ],
} as const;
