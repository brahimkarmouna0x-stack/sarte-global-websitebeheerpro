import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

export function WhyChooseUs() {
  const props = [
    {
      icon: "shield" as const,
      title: "Beveiliging & Preventie",
      description: "24/7 malware-scans en firewall-bescherming om hackers en datalekken effectief te blokkeren."
    },
    {
      icon: "lightning" as const,
      title: "Core Web Vitals & Snelheid",
      description: "Prestatie-optimalisatie voor een razendsnelle laadtijd, betere conversie en hogere Google-rankings."
    },
    {
      icon: "wrench" as const,
      title: "Support & SLA-Garantie",
      description: "Snelle responstijden en direct persoonlijk contact met experts die uw website door en door kennen."
    }
  ];

  return (
    <section className="why-us" aria-labelledby="why-us-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">Waarom Website Beheer Pro</span>
          <h2 className="h2" id="why-us-h">
            Maximale prestaties, <em>minimale risico&apos;s</em>.
          </h2>
          <p className="sub">
            Wij nemen de volledige technische verantwoordelijkheid voor uw website, zodat u kunt focussen op uw groei.
          </p>
        </Reveal>

        <div className="why-us__grid">
          {props.map((item, index) => (
            <Reveal key={item.title} as="div" index={index} className="why-us__card">
              <div className="why-us__card-icon" aria-hidden="true">
                <span className="why-us__icon-bg" />
                <ServiceIcon name={item.icon} />
              </div>
              <h3 className="why-us__card-title">{item.title}</h3>
              <p className="why-us__card-desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
