import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { SITE, WHATSAPP_LINK } from '../../config/site';
import { scrollToSection } from '../../hooks/useScrollReveal';

const FOOTER_NAV = [
  { id: 'protocol', label: 'A Metodologia' },
  { id: 'portfolio', label: 'Tratamentos de Assinatura' },
  { id: 'especialista', label: 'A Diretora Clínica' },
  { id: 'faq', label: 'Dúvidas Frequentes' },
] as const;

export function Footer() {
  const { contact, doctor, legal, name, tagline } = SITE;

  return (
    <footer className="w-full bg-espresso pt-16 sm:pt-20 pb-[max(2.5rem,env(safe-area-inset-bottom))] border-t border-charcoal section-shell safe-bottom">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">
        <div className="col-span-1 reveal-on-scroll">
          <h2 className="text-pearl tracking-[0.3em] uppercase text-sm font-light mb-6">{name}</h2>
          <p className="text-muted text-xs leading-relaxed mb-8 pr-4">{tagline}</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted hover:text-rose-nude transition-all hover:scale-110 touch-target flex items-center justify-center"
              aria-label="Instagram da clínica"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-rose-nude transition-all hover:scale-110 touch-target flex items-center justify-center"
              aria-label="WhatsApp da clínica"
            >
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="col-span-1 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          <h3 className="text-pearl text-[10px] uppercase tracking-widest mb-6">Navegação Rápida</h3>
          <ul className="space-y-4 text-muted text-xs">
            {FOOTER_NAV.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-rose-nude transition-colors hover:translate-x-1 duration-300 touch-target min-h-[2rem] flex items-center"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h3 className="text-pearl text-[10px] uppercase tracking-widest mb-6">Atendimento</h3>
          <address className="not-italic space-y-4 text-muted text-xs">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="shrink-0 mt-0.5 text-rose-nude" aria-hidden="true" />
              <span className="leading-relaxed">
                {contact.address.street}
                <br />
                {contact.address.district}
                <br />
                {contact.address.cep}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-rose-nude" aria-hidden="true" />
              <span>{contact.hours}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-rose-nude font-bold text-[10px] tracking-wider uppercase border border-rose-nude/30 px-1.5 py-0.5 rounded-sm">
                WA
              </span>
              <a href={WHATSAPP_LINK} className="hover:text-rose-nude transition-colors">
                {contact.phone}
              </a>
            </div>
          </address>
        </div>

        <div className="col-span-1 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          <h3 className="text-pearl text-[10px] uppercase tracking-widest mb-6">
            Transparência &amp; Legal
          </h3>
          <ul className="space-y-4 text-muted text-xs">
            <li>
              <span className="opacity-70">CNPJ:</span> {legal.cnpj}
            </li>
            <li className="space-y-1">
              <span className="opacity-70 block">Responsável Técnica:</span>
              <span className="text-rose-nude block">{doctor.name}</span>
              <span className="block text-[10px] tracking-widest uppercase">{doctor.crm}</span>
            </li>
            <li className="pt-4 flex flex-col gap-3">
              <a
                href="#"
                className="hover:text-rose-nude transition-colors underline decoration-charcoal underline-offset-4 touch-target flex items-center"
              >
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-charcoal flex flex-col md:flex-row justify-between items-center gap-4 text-muted/50 text-[10px] uppercase tracking-widest text-center md:text-left">
        <p>
          &copy; {new Date().getFullYear()} {name}. Todos os direitos reservados.
        </p>
        <p>Desenvolvido com excelência por gl.id</p>
      </div>
    </footer>
  );
}
