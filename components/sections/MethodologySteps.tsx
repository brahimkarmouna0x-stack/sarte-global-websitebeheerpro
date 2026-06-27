import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function MethodologySteps() {
  const steps = [
    {
      num: "01",
      title: "Grondige Technische Scan",
      description: "We controleren uw website op prestatie-knelpunten, beveiligingsrisico's en SEO-fouten voor een heldere status check.",
      badge: "Vrijblijvend"
    },
    {
      num: "02",
      title: "Inrichting & Beveiliging",
      description: "We configureren firewalls, CDNs, server-level caching en dagelijkse back-ups op onze beveiligde externe opslag.",
      badge: "Binnen 24 uur"
    },
    {
      num: "03",
      title: "Optimalisatie & Updates",
      description: "We voeren openstaande updates uit. Dit testen we eerst veilig in een gesloten staging-omgeving om fouten te voorkomen.",
      badge: "100% Veilig"
    },
    {
      num: "04",
      title: "Doorlopende Bewaking",
      description: "24/7 uptime monitoring en actieve beveiligingsscans gaan live. U ontvangt maandelijks een helder prestatierapport.",
      badge: "24/7 Actief"
    }
  ];

  return (
    <section className="methodology" id="methodology" aria-labelledby="method-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">Onze methode</span>
          <h2 className="h2" id="method-h">
            In vier stappen naar <em>volledige controle</em>.
          </h2>
          <p className="sub">
            Een gestructureerde en veilige overgang van uw website naar ons professionele beheer, zonder risico op downtime of dataverlies.
          </p>
        </Reveal>

        <div className="methodology__grid">
          {steps.map((step, idx) => (
            <Reveal key={step.num} as="div" index={idx} className="methodology__step">
              <div className="methodology__step-header">
                <span className="methodology__step-num">{step.num}</span>
                {idx < steps.length - 1 && (
                  <span className="methodology__step-line" aria-hidden="true" />
                )}
              </div>
              <h3 className="methodology__step-title">{step.title}</h3>
              <p className="methodology__step-desc">{step.description}</p>
              <div className="methodology__step-badge">{step.badge}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
