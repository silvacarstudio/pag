'use client'

import { useEffect, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'PULIDO PREMIUM',
    kicker: 'Acabado espejo',
    description: 'Corrección de pintura y abrillantado profundo para recuperar la profundidad y el reflejo original de tu vehículo.',
    details: ['Corrección de micro-rayas', 'Brillo espejo de larga duración', 'Protección final incluida'],
    price: 'Desde 180€',
  },
  {
    number: '02',
    title: 'CERÁMICO 9H',
    kicker: 'Protección avanzada',
    description: 'Una capa invisible de alta resistencia que protege la pintura frente a suciedad, rayos UV y desgaste diario.',
    details: ['Duración hasta 5 años', 'Repelencia hidrofóbica', 'Inspección y mantenimiento'],
    price: 'Desde 390€',
  },
  {
    number: '03',
    title: 'INTERIOR DETAIL',
    kicker: 'Renovación total',
    description: 'Limpieza minuciosa y tratamiento de cada superficie para que el interior vuelva a sentirse como el primer día.',
    details: ['Limpieza profunda', 'Tratamiento de cuero y plásticos', 'Eliminación de olores'],
    price: 'Desde 120€',
  },
]

export default function Page() {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null)

  useEffect(() => {
    document.body.style.overflow = activeService ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeService])

  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="brand" href="#inicio" aria-label="Silva Car Studio inicio">SILVA<span>.</span></a>
        <div className="nav-links"><a href="#servicios">Servicios</a><a href="#studio">El estudio</a><a href="#contacto">Contacto</a></div>
        <a className="nav-cta" href="#contacto">Reservar <span>↗</span></a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Detailing &amp; protección premium · Madrid</p>
          <h1>Tu coche.<br /><em>Nuestra</em> obsesión.</h1>
          <p className="hero-intro">Elevamos el cuidado del automóvil a otro nivel. Precisión, técnica y pasión por los detalles que sí se notan.</p>
          <a className="round-link" href="#servicios"><span>Descubre<br />el proceso</span><b>↓</b></a>
        </div>
        <div className="hero-art" aria-label="Silueta abstracta de un vehículo premium" role="img">
          <div className="art-glow" /><div className="car-line car-top" /><div className="car-line car-body" /><div className="wheel wheel-one" /><div className="wheel wheel-two" />
          <p className="art-label">SCS / 2024<br /><span>Crafted with intent</span></p>
        </div>
        <div className="hero-side">01 <span>/</span> 04</div>
      </section>

      <section className="statement" id="studio">
        <p className="section-index">[ 01 — FILOSOFÍA ]</p>
        <div><h2>No hacemos<br /><span>lavados.</span></h2><p>Trabajamos con el mismo nivel de exigencia que tú esperas de tu coche. Cada línea, cada reflejo, cada textura cuenta.</p></div>
      </section>

      <section className="services-section" id="servicios">
        <div className="section-heading"><p className="section-index">[ 02 — SERVICIOS ]</p><p className="muted-note">Selecciona un servicio<br />para conocer el enfoque</p></div>
        <div className="services-list">
          {services.map((service) => <button className="service-row" key={service.number} onClick={() => setActiveService(service)} aria-label={`Ver detalles de ${service.title}`}><span className="service-number">{service.number}</span><span className="service-title">{service.title}</span><span className="service-kicker">{service.kicker}</span><span className="service-arrow">↗</span></button>)}
        </div>
      </section>

      <section className="proof-strip"><div><strong>+350</strong><span>vehículos<br />transformados</span></div><div><strong>10</strong><span>años de<br />experiencia</span></div><div><strong>100%</strong><span>dedicación<br />artesanal</span></div><p>Lo que importa<br /><em>está en el detalle.</em></p></section>
      <footer id="contacto"><div className="footer-brand">SILVA<span>.</span></div><p>¿Hablamos de tu coche?<br /><a href="mailto:hola@silvacarstudio.com">hola@silvacarstudio.com</a></p><p className="footer-small">Madrid · España<br />Instagram ↗</p></footer>

      {activeService && <div className="modal-backdrop" onClick={() => setActiveService(null)}><section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveService(null)} aria-label="Cerrar detalles">×</button><div className="modal-top"><span>[ {activeService.number} / SERVICIO ]</span><span className="modal-live"><i /> Disponible para reservas</span></div><div className="modal-content"><div><p className="modal-kicker">{activeService.kicker}</p><h2 id="service-dialog-title">{activeService.title}</h2><p className="modal-description">{activeService.description}</p><a className="modal-action" href="#contacto" onClick={() => setActiveService(null)}>Quiero reservar <span>↗</span></a></div><div className="modal-aside"><p className="aside-label">Incluye</p><ul>{activeService.details.map((detail) => <li key={detail}><span>+</span>{detail}</li>)}</ul><p className="modal-price">{activeService.price}</p></div></div><div className="attention-line"><span>NOTA CLAVE</span> Cada vehículo recibe una valoración personalizada antes de empezar.</div></section></div>}
    </main>
  )
}

