import { Clock, Shield, Sparkles } from 'lucide-react';
import { IMAGES } from '../config/images';
import type { FaqItem, NavItem, Partner, Procedure, ProtocolPillar, Review } from '../types/content';

export const NAV_ITEMS: NavItem[] = [
  { id: 'protocol', label: 'Metodologia' },
  { id: 'portfolio', label: 'Tratamentos' },
  { id: 'especialista', label: 'Especialista' },
  { id: 'faq', label: 'FAQ' },
];

export const PARTNERS: Partner[] = [
  { label: 'Partner', name: 'Galderma' },
  { label: 'Tecnologia', name: 'Merz Aesthetics' },
  { label: 'Insumos', name: 'Allergan', hiddenOnMobile: true },
];

export const PROTOCOL_PILLARS: ProtocolPillar[] = [
  {
    icon: Sparkles,
    title: 'Precisão Anatômica',
    text: 'Análise meticulosa da sua estrutura facial e corporal antes de qualquer intervenção, garantindo 100% de naturalidade.',
  },
  {
    icon: Clock,
    title: 'Durabilidade',
    text: 'Desenvolvido para resistir à rotina diária. A manutenção é espaçada, devolvendo o seu tempo.',
  },
  {
    icon: Shield,
    title: 'Exclusividade',
    text: 'Atendimento fechado na Clínica. Uma experiência silenciosa, focada inteiramente no seu resultado.',
  },
];

export const PROCEDURES: Procedure[] = [
  {
    title: 'Toxina Botulínica',
    desc: 'Suavização elegante das linhas de expressão. O objetivo é preservar a sua mímica facial, entregando um aspecto de descanso profundo.',
    before: IMAGES.portfolio.toxinaBotulinica.antes,
    after: IMAGES.portfolio.toxinaBotulinica.depois,
  },
  {
    title: 'Arquitetura Labial',
    desc: 'Hidratação profunda e contorno sutil. Respeitamos as proporções áureas do seu rosto para um preenchimento indetectável.',
    before: IMAGES.portfolio.arquiteturaLabial.antes,
    after: IMAGES.portfolio.arquiteturaLabial.depois,
    objectPosition: 'center 42%',
    beforeObjectPosition: 'center 42%',
    afterObjectPosition: 'center 38%',
    afterScale: 0.82,
  },
  {
    title: 'Banco de Colágeno',
    desc: 'Tratamento de base contra a flacidez. Os bioestimuladores devolvem a firmeza e a densidade da pele de dentro para fora.',
    before: IMAGES.portfolio.bancoColageno.antes,
    after: IMAGES.portfolio.bancoColageno.depois,
  },
];

export const REVIEWS: Review[] = [
  {
    name: 'Amanda Silva',
    text: 'O resultado ficou tão natural que ninguém perguntou se eu tinha feito algo — só disseram que eu estava com o rosto mais descansado.',
    time: 'há 2 semanas',
  },
  {
    name: 'Letícia Costa',
    text: 'Meu lábio ficou exatamente no ponto que eu queria: mais definido, mas ainda com a minha cara. Nada artificial.',
    time: 'há 1 mês',
  },
  {
    name: 'Roberta M.',
    text: 'Voltei a me reconhecer no espelho. A harmonização devolveu leveza ao meu rosto, com muita elegância.',
    time: 'há 3 meses',
  },
  {
    name: 'Juliana P.',
    text: 'Explicou cada etapa com calma e segurança. O bioestimulador trouxe firmeza sem mudar quem eu sou.',
    time: 'há 1 semana',
  },
  {
    name: 'Camila V.',
    text: 'Atendimento impecável do início ao fim. O resultado é sutil, duradouro e parece que sempre foi meu.',
    time: 'há 2 meses',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'O procedimento é compatível com outros procedimentos injetáveis?',
    a: 'Sim. Realizamos uma análise profunda da sua anatomia e histórico para garantir que a técnica seja aplicada com total segurança e naturalidade.',
  },
  {
    q: 'Qual a durabilidade média do resultado?',
    a: 'A engenharia do PROTOCOL foi desenvolvida para durar. O tempo exato varia de acordo com a sua rotina de cuidados em casa, o que será instruído no dia.',
  },
  {
    q: 'Onde a clínica está localizada?',
    a: 'Os atendimentos exclusivos ocorrem em nossa Clínica, na Avenida Faria Lima, São Paulo - SP. Ambiente preparado para uma experiência premium, com valet no local.',
  },
];
