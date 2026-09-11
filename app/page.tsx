'use client'

import { useEffect, useState } from 'react'

type Service = { title: string; subtitle: string; detail: string }

const services: Service[] = [
  { title: 'Lavado Premium', subtitle: 'Limpieza exterior e interior cuidando cada superficie.', detail: 'Lavado a mano con productos de pH neutro, secado con microfibra, aspirado completo, limpieza de tapizados y plásticos interiores, vidrios y llantas.' },
  { title: 'Detailing Interior', subtitle: 'Limpieza profunda y tratamiento de interiores.', detail: 'Trabajamos cada rincón del habitáculo: asientos, alfombras, paneles, consola y techo. Incluye hidratación de cuero, protección de telas y sanitización.' },
  { title: 'Detailing Exterior', subtitle: 'Limpieza, descontaminación y terminación exterior.', detail: 'Descontaminamos la carrocería y aplicamos sellador o cera según el estado de la pintura. También protegemos llantas, gomas y plásticos exteriores.' },
  { title: 'Corrección de Pintura', subtitle: 'Corrección de imperfecciones y recuperación del brillo.', detail: 'Pulimos la pintura en una o varias etapas para eliminar rayas finas, marcas de remolino y opacidad, devolviendo profundidad y brillo real al color.' },
  { title: 'Tratamientos', subtitle: 'Protección y mantenimiento para conservar el acabado.', detail: 'Protecciones de distinta duración, desde ceras y selladores hasta recubrimientos cerámicos, con planes de mantenimiento periódico.' },
  { title: 'Servicio Personalizado', subtitle: 'Evaluamos tu vehículo y armamos el tratamiento ideal.', detail: 'Evaluamos pintura, interior y necesidades puntuales para crear una combinación de servicios a medida, con presupuesto claro antes de empezar.' },
]

const gallery = ['/images/work-1.jpg', '/images/work-2.jpg', '/images/work-3.jpg', '/images/work-4.jpg']

export default function Page() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = activeService || lightbox ? 'hidden' : ''
    const close = (event: KeyboardEvent) => event.key === 'Escape' && (setActiveService(null), setLightbox(null))
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) }
  }, [activeService, lightbox])

  return <main>
    <header><div className="wrap head"><a className="brand" href="#inicio"><img src="/images/logo.png" alt="Silva Studio" /></a><nav><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#galeria">Galería</a><a href="#contacto">Contacto</a></nav><a className="btn outline" href="https://wa.me/59894577748?text=Hola%20Silva%20Studio%2C%20quiero%20consultar%20por%20un%20turno.">Agendar turno</a></div></header>
    <section id="inicio" className="hero"><div className="hero-bg" /><div className="overlay" /><div className="wrap hero-content"><p className="eyebrow">DETAILING &amp; ESTÉTICA AUTOMOTRIZ</p><h1>Tu auto.<br /><em>En otro nivel.</em></h1><p>Cuidado, precisión y pasión por cada detalle.</p><a className="btn primary" href="https://wa.me/59894577748">Agendar turno</a></div></section>
    <section id="servicios" className="section wrap"><p className="eyebrow">NUESTROS SERVICIOS</p><h2>Más que una limpieza.</h2><p className="muted">Tratamos cada vehículo como si fuera nuestro.</p><div className="grid">{services.map((service, i) => <article className="service" key={service.title}><button className="serviceHead" onClick={() => setActiveService(service)} aria-label={`Abrir ${service.title}`}><div><small>0{i + 1}</small><h3>{service.title}</h3><p>{service.subtitle}</p></div><span className="servicePlus">+</span></button></article>)}</div></section>
    <section id="nosotros" className="about"><div className="aboutMedia"><img src="/images/about.jpg" alt="Trabajo de detailing en Silva Studio" /></div><div className="aboutText"><p className="eyebrow">SILVA STUDIO</p><h2>El detalle hace la diferencia.</h2><p>Somos un estudio especializado en detailing y estética automotriz, enfocado en devolverle a cada vehículo una presencia impecable.</p><p>Trabajamos con dedicación, productos premium y atención minuciosa para lograr resultados que se notan.</p></div></section>
    <section id="galeria" className="section wrap"><p className="eyebrow">TRABAJOS</p><h2>Resultados que hablan solos.</h2><div className="gallery">{gallery.map((image, i) => <button className="pic" key={image} onClick={() => setLightbox(image)}><img src={image} alt={`Trabajo realizado ${i + 1}`} /></button>)}</div></section>
    <section className="cta"><div className="wrap ctaIn"><div><p className="eyebrow">¿LISTO PARA CAMBIAR EL LOOK DE TU AUTO?</p><h2>Dejalo en nuestras manos.</h2></div><a className="btn primary" href="https://wa.me/59894577748">Agendar ahora</a></div></section>
    <section id="contacto" className="section wrap contact"><div><p className="eyebrow">CONTACTO</p><h2>Estética y cuidado a tu medida.</h2></div><div className="contactInfo"><a href="https://wa.me/59894577748">WhatsApp</a><a href="https://www.instagram.com/silva_car_studio/">Instagram</a><span>Luis Cluzeau Mortet 4763</span><span>Lunes a domingos</span></div></section>
    <footer><div className="wrap foot"><img src="/images/logo.png" alt="Silva Studio" /><span>Detailing &amp; estética automotriz premium.</span></div></footer>
    {activeService && <div className="modalBackdrop" onClick={() => setActiveService(null)}><section className="serviceModal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={e => e.stopPropagation()}><button className="modalClose" onClick={() => setActiveService(null)} aria-label="Cerrar">×</button><p className="eyebrow">SERVICIO DESTACADO</p><small className="modalNumber">/ 0{services.indexOf(activeService) + 1}</small><h2 id="dialog-title">{activeService.title}</h2><p className="modalSubtitle">{activeService.subtitle}</p><p className="modalDetail">{activeService.detail}</p><div className="keyPoints"><span><b>+</b> Atención artesanal</span><span><b>+</b> Productos premium</span><span><b>+</b> Resultado visible</span></div><a className="btn primary" href="https://wa.me/59894577748">Agendar este servicio ↗</a></section></div>}
    {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)} aria-label="Cerrar imagen">×</button><img src={lightbox} alt="Trabajo de Silva Studio ampliado" /></div>}
  </main>
}
