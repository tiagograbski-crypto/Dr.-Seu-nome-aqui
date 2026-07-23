import { B2B_OWNER_GUIDE } from '../../config/b2bOwnerGuide';
import { SHOWROOM_NAV } from '../../config/showroomNav';
import { resolveWhatsAppNumber, sanitizeWhatsAppMessage } from '../../utils/contactUtils';

const founderImage = `${import.meta.env.BASE_URL}images/thiago-grabski.webp`;

function buildAcquireWhatsAppUrl(): string {
  const rawMessage = SHOWROOM_NAV.acquireMessage
    .replace(/\{contact\}/g, SHOWROOM_NAV.acquireContactName)
    .replace(/\{priceValue\}/g, SHOWROOM_NAV.priceValue);
  const message = sanitizeWhatsAppMessage(rawMessage);
  const number = resolveWhatsAppNumber(SHOWROOM_NAV.acquireWhatsApp);

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function trackAcquireClick(): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'showroom_acquire_click',
    acquire_source: 'b2b_owner_guide',
    model_label: SHOWROOM_NAV.modelLabel,
    anchor_price_value: SHOWROOM_NAV.anchorPriceValue,
    price_value: SHOWROOM_NAV.priceValue,
    contact_name: SHOWROOM_NAV.acquireContactName,
  });
}

export function B2bOwnerGuideSection() {
  if (!B2B_OWNER_GUIDE.enabled) {
    return null;
  }

  const acquireUrl = buildAcquireWhatsAppUrl();

  return (
    <section id="b2b-owner-guide" aria-label="Guia de aquisição para donos de negócio">
      <div className="b2b-demarcation b2b-demarcation--alert">
        <div className="b2b-demarcation-inner">
          <p className="b2b-demarcation-text">
            <strong className="b2b-demarcation-kicker">⚠️ ÁREA EXCLUSIVA DO PROPRIETÁRIO:</strong>
            A linha abaixo divide a vitrine do seu cliente dos bastidores da operação. O conteúdo a seguir é o
            seu guia de aquisição e <strong>não ficará visível no site final</strong>.
          </p>
        </div>
      </div>

      <div className="b2b-wrap">
        <header className="b2b-header">
          <p className="b2b-eyebrow">gl.id · Licenciamento de estrutura</p>
          <h2 className="b2b-h2">O site que você acabou de testar — com a sua marca</h2>
          <p className="b2b-header-meta">
            Entrega em {B2B_OWNER_GUIDE.deliveryDays} · Exclusividade por região
          </p>
          <p className="b2b-lead" style={{ margin: '0 auto' }}>
            Licencie a mesma estrutura que suas pacientes vão usar no celular — com seu logo, suas fotos e
            agendamentos organizados no WhatsApp.
          </p>
        </header>

        <div className="b2b-trust">
          <div className="b2b-trust-item">
            <strong>Contrato</strong>
            <span>Escopo assinado antes da entrada</span>
          </div>
          <div className="b2b-trust-item">
            <strong>Pagamento</strong>
            <span>50% na entrada · 50% com site no ar</span>
          </div>
          <div className="b2b-trust-item">
            <strong>Propriedade</strong>
            <span>Arquivos 100% seus após a entrega</span>
          </div>
          <div className="b2b-trust-item">
            <strong>Exclusividade</strong>
            <span>Licença exclusiva na sua região</span>
          </div>
        </div>

        <h3 className="b2b-section-title">O que você ganha</h3>

        <div className="b2b-grid-3">
          {B2B_OWNER_GUIDE.cards.map((card) => (
            <article key={card.num} className="b2b-card">
              <p className="b2b-card-num">{card.num}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>

        <div className="b2b-breakdown-header">
          <h3 className="b2b-section-title" style={{ marginBottom: '0.5rem' }}>
            Escopo blindado
          </h3>
          <p className="b2b-section-lead">O que entra e o que não entra — sem surpresa na entrega.</p>
        </div>

        <div className="b2b-scope">
          <div className="b2b-scope-box b2b-scope-box--yes">
            <span className="b2b-scope-label b2b-scope-label--yes">O que você leva</span>
            <h3>
              Por <span id="b2b-guide-price-inline">{SHOWROOM_NAV.priceValue}</span>
            </h3>
            <ul>
              {B2B_OWNER_GUIDE.scopeIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="b2b-footnote">Tudo acima consta no contrato de licenciamento.</p>
          </div>
          <div className="b2b-scope-box b2b-scope-box--no b2b-scope--no">
            <span className="b2b-scope-label b2b-scope-label--no">O que não está incluso</span>
            <h3>Fora do escopo GLID</h3>
            <ul>
              <li>
                A GLID <strong>não</strong> faz gestão de redes sociais.
              </li>
              <li>
                A GLID <strong>não</strong> cria nem gerencia anúncios (Meta / Google Ads).
              </li>
              <li>
                A GLID <strong>não</strong> configura ferramentas de rastreamento de terceiros (pixels ou
                analytics).
              </li>
            </ul>
            <p className="b2b-footnote">
              Entregamos a estrutura com as pontes prontas no código — o tráfego e a gestão ficam com você ou
              com o profissional que você contratar.
            </p>
          </div>
        </div>

        <div className="b2b-note">
          <h3>Tratamento das suas fotos</h3>
          <p>
            As fotos que você enviar passam por um processo rigoroso de engenharia de performance — otimização e
            compactação profissional — para garantir carregamento instantâneo sem perda de qualidade visual. O
            setup inicial inclui <strong>até {B2B_OWNER_GUIDE.photoLimit} fotos tratadas</strong>.
          </p>
        </div>

        <div className="b2b-support">
          <h3>Como mexer no site depois da entrega</h3>
          <p>
            O código é blindado e seguro de propósito: não usamos WordPress pesado, e você não edita o código
            diretamente — isso protege a engenharia de conversão que faz o site vender.
          </p>
          <p>
            Novas fotos ou alterações pontuais de textos e preços, após a entrega, podem ser feitas por{' '}
            <strong>pacotes avulsos de atualização</strong> (com taxa técnica para tratamento e publicação) ou
            por <strong>planos de manutenção mensal opcionais</strong>.
          </p>
        </div>

        <div className="b2b-steps">
          <h3>Como contratar</h3>
          <div className="b2b-steps-grid">
            {B2B_OWNER_GUIDE.steps.map((step, index) => (
              <div key={step} className="b2b-step-card">
                <span className="b2b-step-num">{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="b2b-founder">
          <div className="b2b-avatar" role="img" aria-label={B2B_OWNER_GUIDE.founderName}>
            <img
              src={founderImage}
              alt={B2B_OWNER_GUIDE.founderName}
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3>
              {B2B_OWNER_GUIDE.founderName} · {B2B_OWNER_GUIDE.founderRole}
            </h3>
            <p>{B2B_OWNER_GUIDE.founderBio}</p>
          </div>
        </div>

        <div className="b2b-faq">
          <h3>Perguntas frequentes</h3>
          {B2B_OWNER_GUIDE.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="b2b-price">
          <p className="b2b-price-label">Valor de mercado</p>
          <p className="b2b-price-anchor" id="b2b-guide-anchor-price">
            {SHOWROOM_NAV.anchorPriceValue}
          </p>
          <p className="b2b-price-badge">Licenciamento imediato</p>
          <p className="b2b-price-value" id="b2b-guide-price">
            {SHOWROOM_NAV.priceValue}
          </p>
          <p className="b2b-price-note">50% de entrada para travar a exclusividade · 50% com site no ar</p>
          <p className="b2b-price-fine">Chave PIX e lista do material enviadas após seu WhatsApp</p>
        </div>

        <div className="b2b-cta-wrap">
          <a
            id="b2b-owner-guide-acquire"
            className="b2b-cta"
            href={acquireUrl}
            data-b2b-acquire
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackAcquireClick}
          >
            {SHOWROOM_NAV.acquireButtonLabel}
          </a>
          <p className="b2b-cta-sub">Mensagem pré-formatada no WhatsApp — é só enviar. Sem call de vendas.</p>
        </div>
      </div>
    </section>
  );
}
