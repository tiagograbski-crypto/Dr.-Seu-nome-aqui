(function () {
  const PLACEHOLDER_WHATSAPP = "5549999999999";
  const BLOCKED_SAMPLE_WHATSAPP = new Set([
    "5549999508884",
    "5549999084031",
    "5500000000000"
  ]);

  const BLOCKED_SAMPLE_PHONE_PATTERNS = [
    /\+?55\s*49\s*99950[-\s]?8884/gi,
    /\+?55\s*49\s*99908[-\s]?4031/gi,
    /\(49\)\s*99950[-\s]?8884/gi,
    /\(49\)\s*99908[-\s]?4031/gi,
    /5549999508884/g,
    /5549999084031/g
  ];

  if (typeof window.resolveWhatsAppNumber !== "function") {
    window.resolveWhatsAppNumber = function (value) {
      const digits = String(value || "").replace(/\D/g, "");

      if (!digits || BLOCKED_SAMPLE_WHATSAPP.has(digits)) {
        return PLACEHOLDER_WHATSAPP;
      }

      return digits;
    };
  }

  if (typeof window.sanitizeWhatsAppMessage !== "function") {
    window.sanitizeWhatsAppMessage = function (message) {
      let text = String(message || "");

      BLOCKED_SAMPLE_PHONE_PATTERNS.forEach(function (pattern) {
        text = text.replace(pattern, "");
      });

      return text.replace(/\n{3,}/g, "\n\n").trim();
    };
  }
})();
