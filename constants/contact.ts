// WhatsApp-nummer (zonder + en zonder spaties). Vervang door uw eigen nummer.
export const WHATSAPP_NUMBER = "+3197010278527" as const;

export const PROJECT_TYPES = [
  "Websitebeheer",
  "Website onderhoud",
  "WordPress onderhoud",
  "Website beveiliging",
  "Website monitoring",
  "Hosting beheer",
  "Technische SEO",
  "Website support",
  "Website optimalisatie",
  "Anders",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const MESSAGE_STARTERS: Record<string, string> = {
  "Websitebeheer":
    "Ik wil mijn website laten beheren door een professional. Mijn website draait op ",
  "Website onderhoud":
    "Ik wil professioneel website onderhoud voor mijn bedrijfswebsite. Wat ik nu mis is ",
  "WordPress onderhoud":
    "Ik wil mijn WordPress website laten onderhouden. De WordPress-versie en het aantal plugins zijn ",
  "Website beveiliging":
    "Ik wil mijn website beter beveiligen. Mijn grootste zorgen zijn ",
  "Website monitoring":
    "Ik wil dat mijn website 24/7 gemonitord wordt. De website is bereikbaar op ",
  "Hosting beheer":
    "Ik wil mijn hosting laten beheren door een specialist. Mijn huidige hostingomgeving is ",
  "Technische SEO":
    "Ik wil de technische SEO van mijn website laten verbeteren. Wat ik wil bereiken is ",
  "Website support":
    "Ik heb technische ondersteuning nodig voor mijn website. Waar ik tegenaan loop is ",
  "Website optimalisatie":
    "Ik wil mijn website laten optimaliseren voor snelheid en prestaties. Mijn website draait op ",
  "Anders":
    "Ik heb een vraag over websitebeheer. Waar het om gaat is ",
};

/** Used when a project type has no specific match (defensive fallback). */
export const GENERIC_MESSAGE_STARTER =
  "Ik wil graag een project bespreken. Wat ik nodig heb is ";

/**
 * Returns the starter sentence for a project type. Empty string when nothing is
 * selected (the field then shows the generic guiding placeholder instead).
 */
export function getMessageStarter(projectType?: string): string {
  if (!projectType) return "";
  return MESSAGE_STARTERS[projectType] ?? GENERIC_MESSAGE_STARTER;
}

export const DIALOG_COPY = {
  eyebrow: "Laten we praten",
  title: "Vraag jouw",
  titleEm: "gratis offerte aan.",
  subtitle:
    "Vul een paar gegevens in en we gaan verder via WhatsApp. We reageren meestal binnen enkele minuten.",
  nameLabel: "Je naam",
  namePlaceholder: "Jan Jansen",
  emailLabel: "E-mailadres",
  emailPlaceholder: "jij@bedrijf.nl",
  projectTypeLabel: "Soort project",
  projectTypePlaceholderOption: "Kies een soort project",
  messageLabel: "Vertel kort over jouw project",
  messagePlaceholder:
    "Ik wil mijn website laten beheren, onderhouden of beveiligen. Mijn website draait op…",
  submitLabel: "Verder via WhatsApp",
  submittingLabel: "WhatsApp wordt geopend…",
  closeLabel: "Sluiten",
  fabLabel: "Chat met ons via WhatsApp",
} as const;
