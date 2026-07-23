import { useEffect, useState } from 'react';
import { SHOWROOM_NAV } from '../../config/showroomNav';
import { resolveWhatsAppNumber, sanitizeWhatsAppMessage } from '../../utils/contactUtils';

const STORAGE_KEY = 'showroom-nav-collapsed';
const MOBILE_QUERY = '(max-width: 47.9375em)';

function buildAcquireWhatsAppUrl(): string {
  const rawMessage = SHOWROOM_NAV.acquireMessage
    .replace(/\{contact\}/g, SHOWROOM_NAV.acquireContactName)
    .replace(/\{priceValue\}/g, SHOWROOM_NAV.priceValue);
  const message = sanitizeWhatsAppMessage(rawMessage);
  const number = resolveWhatsAppNumber(SHOWROOM_NAV.acquireWhatsApp);

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function readCollapsedState(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function trackAcquireClick(source: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'showroom_acquire_click',
    acquire_source: source,
    model_label: SHOWROOM_NAV.modelLabel,
    anchor_price_value: SHOWROOM_NAV.anchorPriceValue,
    price_value: SHOWROOM_NAV.priceValue,
    contact_name: SHOWROOM_NAV.acquireContactName,
  });
}

function trackGuideClick(): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'showroom_guide_scroll_click',
    model_label: SHOWROOM_NAV.modelLabel,
    price_value: SHOWROOM_NAV.priceValue,
  });
}

export function ShowroomNav() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const savedCollapsed = readCollapsedState();
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    setCollapsed(savedCollapsed || isMobile);
  }, []);

  if (!SHOWROOM_NAV.enabled) {
    return null;
  }

  const toggleCollapsed = () => {
    setCollapsed((current) => {
      const next = !current;

      try {
        sessionStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      } catch {
        /* ignore */
      }

      return next;
    });
  };

  const acquireUrl = buildAcquireWhatsAppUrl();

  return (
    <aside
      className={`showroom-nav is-available${collapsed ? ' is-collapsed' : ''}`}
      id="showroom-nav"
      aria-label={SHOWROOM_NAV.eyebrowLabel}
      data-showroom-nav
    >
      <div className="showroom-nav__panel" id="showroom-nav-panel">
        <p className="showroom-nav__eyebrow" id="showroom-nav-eyebrow">
          {SHOWROOM_NAV.eyebrowLabel}
        </p>
        <p className="showroom-nav__status">
          <span className="showroom-nav__status-label">Status</span>
          <span className="showroom-nav__status-value" id="showroom-nav-status">
            {SHOWROOM_NAV.statusLabel}
          </span>
        </p>
        <p className="showroom-nav__price" id="showroom-nav-price" aria-live="polite">
          <span className="showroom-nav__price-label" id="showroom-nav-price-label">
            {SHOWROOM_NAV.modelLabel}
          </span>
          <span className="showroom-nav__price-anchor" id="showroom-nav-price-anchor">
            {SHOWROOM_NAV.anchorPriceValue}
          </span>
          <span className="showroom-nav__price-value" id="showroom-nav-price-value">
            {SHOWROOM_NAV.priceValue}
          </span>
          <span className="showroom-nav__price-note" id="showroom-nav-price-note">
            {SHOWROOM_NAV.priceNote}
          </span>
          <span className="showroom-nav__price-delivery" id="showroom-nav-delivery">
            {SHOWROOM_NAV.deliveryLabel}
          </span>
        </p>
        <div className="showroom-nav__actions">
          <a
            className="showroom-nav__btn showroom-nav__btn--primary"
            id="showroom-nav-acquire"
            href={acquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAcquireClick('showroom_nav')}
          >
            {SHOWROOM_NAV.acquireButtonLabel}
          </a>
          <a
            className="showroom-nav__btn showroom-nav__btn--ghost"
            id="showroom-nav-guide"
            href="#b2b-owner-guide"
            onClick={trackGuideClick}
          >
            {SHOWROOM_NAV.guideButtonLabel}
          </a>
          <a
            className="showroom-nav__portfolio-link"
            id="showroom-nav-portfolio"
            href={SHOWROOM_NAV.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SHOWROOM_NAV.portfolioButtonLabel}
          </a>
        </div>
      </div>
      <button
        className="showroom-nav__toggle"
        id="showroom-nav-toggle"
        type="button"
        aria-expanded={!collapsed}
        aria-controls="showroom-nav-panel"
        aria-label={collapsed ? 'Expandir painel do showroom' : 'Recolher painel do showroom'}
        onClick={toggleCollapsed}
      >
        <svg
          className="showroom-nav__toggle-icon"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M9 2L4 7l5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </aside>
  );
}
