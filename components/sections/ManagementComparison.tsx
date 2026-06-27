import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";

export function ManagementComparison() {
  const reactiveItems = [
    "Trage laadsnelheden door database-opstopping en gebrek aan caching.",
    "Continu risico op hacks, malware en data-diefstal zonder actieve monitoring.",
    "Verouderde plug-ins en thema's die onverwacht uw pagina's breken.",
    "Geen automatische back-ups, met permanent risico op volledig dataverlies.",
    "Hoge, onvoorspelbare spoedtarieven als er achteraf iets hersteld moet worden."
  ];

  const proactiveItems = [
    "Razendsnel laadtijd-beheer door doorlopende prestatie-optimalisatie.",
    "24/7 bewaking, malware-scans en actieve firewall-bescherming.",
    "Updates worden altijd eerst veilig getest in een staging-sandbox.",
    "Dagelijkse back-ups opgeslagen op externe, ISO-gecertificeerde servers.",
    "Vaste, transparante tarieven en prioriteit support voor totale rust."
  ];

  return (
    <section className="mgmt-comp" id="roi" aria-labelledby="mgmt-comp-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">Rendement van actief beheer</span>
          <h2 className="h2" id="mgmt-comp-h">
            Voorkom stilstand en <em>omzetverlies</em>.
          </h2>
          <p className="sub">
            Waarom afwachten tot het misgaat? Proactief onderhoud voorkomt kostbare spoedreparaties, downtime en verlies van posities in Google.
          </p>
        </Reveal>

        <div className="mgmt-comp__grid">
          {/* Reactief */}
          <Reveal as="div" index={0} className="mgmt-comp__col mgmt-comp__col--reactive">
            <h3 className="mgmt-comp__col-title">Reactief beheer</h3>
            <p className="mgmt-comp__col-subtitle">Achteraf brandjes blussen</p>
            <ul className="mgmt-comp__list">
              {reactiveItems.map((item, idx) => (
                <li key={idx} className="mgmt-comp__item">
                  <span className="mgmt-comp__icon mgmt-comp__icon--cross" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span className="mgmt-comp__text">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Proactief */}
          <Reveal as="div" index={1} className="mgmt-comp__col mgmt-comp__col--proactive">
            <span className="mgmt-comp__badge">Aanbevolen</span>
            <h3 className="mgmt-comp__col-title">Proactief beheer</h3>
            <p className="mgmt-comp__col-subtitle">Website Beheer Pro</p>
            <ul className="mgmt-comp__list">
              {proactiveItems.map((item, idx) => (
                <li key={idx} className="mgmt-comp__item">
                  <span className="mgmt-comp__icon mgmt-comp__icon--check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="mgmt-comp__text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mgmt-comp__col-cta">
              <CTAButton label="Start met Actief Beheer" variant="primary" projectType="Websitebeheer" planName="Business" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
