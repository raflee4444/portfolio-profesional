/**
 * Portfolio Profesional - Rafael Ahumada García
 * Diseño: "Consultor de Confianza" — Elegancia Corporativa Moderna
 *
 * CRITERIO DE VERACIDAD (OBLIGATORIO):
 * - Ibermática (UOC) = soporte funcional a alumnos, NO soporte IT técnico.
 *   Incidencias técnicas muy básicas (cookies, navegador) de forma ocasional.
 *   Las incidencias técnicas reales iban al SAI.
 * - NO se puede usar: "IT", "Helpdesk", "Técnico IT", "Soporte técnico".
 * - SÍ se puede usar: "Soporte a usuarios", "Atención al usuario",
 *   "Resolución de incidencias funcionales", "Entorno digital".
 * - Contenidos = capacidad potencial basada en periodismo. NO experiencia.
 * - 30+ años = trayectoria profesional global en sectores diversos.
 */

import { motion } from "framer-motion";
import {
  Headphones,
  FileText,
  Globe,
  Mail,
  Linkedin,
  ChevronDown,
  Monitor,
  PenTool,
  Shield,
  Users,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── HERO ───────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663586264612/jMiriDN6xRZdpwvg32iqR4/hero-bg-bXA8pukqGSxopMksJNS7gY.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e4a]/90 via-[#0f4c75]/80 to-[#0f4c75]/60" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium tracking-wide border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para trabajo remoto
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Soporte a Usuarios
            <br />
            <span className="text-stone-300">&</span> Comunicación
            <br />
            <span className="text-amber-300/90">Profesional</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-stone-200 leading-relaxed mb-8 max-w-2xl"
          >
            6 años de experiencia en atención a usuarios y resolución de
            incidencias funcionales en entorno digital (Ibermática/UOC).
            Licenciado en Periodismo con capacidad para documentación y
            redacción profesional.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0f4c75] hover:bg-stone-100 font-semibold px-8 shadow-lg"
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8"
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver servicios
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { value: "6", label: "Años en Soporte a Usuarios" },
              { value: "30+", label: "Años de trayectoria profesional" },
              { value: "3", label: "Idiomas" },
              { value: "100%", label: "Remoto" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-6 w-6 text-white/50 animate-bounce" />
      </motion.div>
    </section>
  );
}

// ─── SERVICIOS ──────────────────────────────────────────
function Servicios() {
  const services = [
    {
      icon: Headphones,
      title: "Soporte a Usuarios",
      subtitle: "Atención al usuario en entorno digital — Servicio consolidado",
      badge: "Experiencia real",
      badgeColor: "bg-petrol/15 text-petrol",
      description:
        "6 años de experiencia en Ibermática (UOC) atendiendo a usuarios de plataforma educativa: resolución de incidencias funcionales, gestión de tickets y soporte multilingüe. Incidencias técnicas básicas de forma ocasional (navegador, cookies).",
      features: [
        "Atención a usuarios en plataforma digital",
        "Resolución de incidencias funcionales",
        "Gestión de tickets y seguimiento de casos",
        "Soporte multilingüe (ES/CA/EN)",
        "Incidencias técnicas básicas ocasionales (navegador, cookies)",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663586264612/jMiriDN6xRZdpwvg32iqR4/service-helpdesk-Ya2f5Nxh5vAFm9zdXpB55E.webp",
    },
    {
      icon: FileText,
      title: "Redacción y Documentación",
      subtitle: "Capacidad real basada en experiencia en comunicación",
      badge: "Comunicación",
      badgeColor: "bg-petrol/15 text-petrol",
      description:
        "Capacidad de redacción basada en Licenciatura en Periodismo (UAB), 2 años de experiencia en Radio Nacional de España y trayectoria en elaboración de contenidos escritos. Experiencia en redacción periodística, con capacidad para documentación clara y estructurada en entornos digitales.",
      features: [
        "Redacción profesional con base periodística",
        "Elaboración de contenidos informativos y estructurados",
        "Capacidad para documentación de usuario",
        "Gestión básica de WordPress (nivel medio)",
        "Diseño básico con Canva",
        "Nociones de SEO/SEM (nivel básico)",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663586264612/jMiriDN6xRZdpwvg32iqR4/service-content-7xfKYBhD74FnrtZckzHuXY.webp",
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest uppercase text-petrol mb-3"
          >
            Servicios
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Qué puedo ofrecer
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Atención a usuarios como servicio principal, con capacidad
            complementaria de redacción y documentación basada en formación
            periodística.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center shrink-0 mt-0.5">
                    <service.icon className="h-5 w-5 text-petrol" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <CheckCircle className="h-4 w-4 text-petrol mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── POR QUÉ ELEGIRME ──────────────────────────────────
function PorQueElegirme() {
  const reasons = [
    {
      icon: Users,
      title: "6 años en atención a usuarios",
      description:
        "Experiencia real en Ibermática (UOC) atendiendo a usuarios de plataforma educativa: resolución de incidencias funcionales, gestión de tickets y seguimiento de casos.",
    },
    {
      icon: PenTool,
      title: "Licenciado en Periodismo",
      description:
        "Titulación universitaria (UAB, 2004) y 2 años en RNE. Capacidad de redacción profesional que puede aplicarse a documentación, aunque no constituye experiencia profesional en contenidos digitales.",
    },
    {
      icon: Globe,
      title: "Trilingüe",
      description:
        "Castellano y Catalán nativos, Inglés B2. Atención a usuarios y comunicación en tres idiomas.",
    },
    {
      icon: Shield,
      title: "Trayectoria diversa",
      description:
        "Más de 30 años de trayectoria profesional en sectores diversos (mantenimiento, comunicación, atención al cliente, gestión) que aportan adaptabilidad.",
    },
    {
      icon: Monitor,
      title: "Familiaridad con entornos digitales",
      description:
        "Experiencia de trabajo con plataformas digitales, herramientas de ticketing y entornos web. Formación complementaria en análisis de datos y fundamentos de IA (Google).",
    },
    {
      icon: Clock,
      title: "Disponibilidad inmediata",
      description:
        "Preparado para incorporación rápida. Infraestructura de trabajo remoto configurada y operativa.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest uppercase text-petrol mb-3"
          >
            Ventajas
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Por qué trabajar conmigo
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="bg-card p-7 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-lg bg-petrol/10 flex items-center justify-center mb-5">
                <reason.icon className="h-5 w-5 text-petrol" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── EXPERIENCIA ────────────────────────────────────────
function Experiencia() {
  const timeline = [
    {
      period: "2011 – 2017",
      duration: "6 años",
      role: "Técnico de Soporte (Frontoffice)",
      company: "Ibermática (UOC)",
      description:
        "Atención a usuarios (alumnos) de la plataforma educativa de la UOC. Resolución de incidencias funcionales por vía online y telefónica. Gestión de tickets. Incidencias técnicas muy básicas de forma ocasional (cookies, navegador). Las incidencias técnicas reales se derivaban al SAI.",
      tags: ["Soporte a usuarios", "Ticketing", "Incidencias funcionales"],
      highlight: true,
    },
    {
      period: "1994 – 2005",
      duration: "11 años",
      role: "Técnico de Mantenimiento",
      company: "Meysh (SEAT Zona Franca)",
      description:
        "Mantenimiento integral de sistemas CCTV y baja tensión en entorno industrial.",
      tags: ["CCTV", "Baja tensión", "Mantenimiento"],
      highlight: false,
    },
    {
      period: "2007 – 2009",
      duration: "2 años",
      role: "Periodista (Informador)",
      company: "Radio Nacional de España",
      description:
        "Redacción, locución y producción de boletines informativos en medio de comunicación nacional.",
      tags: ["Redacción", "Locución", "Producción"],
      highlight: false,
    },
    {
      period: "2018 – 2022",
      duration: "4 años y 6 meses",
      role: "Entrenador Personal / Crossfit",
      company: "Freelance / Centro",
      description:
        "Planes personalizados, recepción y asesoramiento al cliente. Gestión de relaciones y fidelización.",
      tags: ["Atención al cliente", "Gestión", "Asesoramiento"],
      highlight: false,
    },
    {
      period: "2023 – 2024",
      duration: "8 meses",
      role: "Gerente y Propietario",
      company: "Diablote Fit",
      description:
        "Gestión integral de tienda física y online: marketing, inventario, proveedores y atención al cliente.",
      tags: ["Gestión", "Marketing", "E-commerce"],
      highlight: false,
    },
  ];

  return (
    <section id="experiencia" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest uppercase text-petrol mb-3"
          >
            Trayectoria
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Experiencia profesional
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Posiciones más relevantes de una trayectoria de más de 30 años en
            sectores diversos. La experiencia en soporte a usuarios corresponde
            a los 6 años en Ibermática (UOC).
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeInUp}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {i < timeline.length - 1 && (
                <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border" />
              )}
              <div
                className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-[3px] ${
                  item.highlight
                    ? "border-petrol bg-petrol/20"
                    : "border-border bg-card"
                }`}
              />

              <div
                className={`p-6 rounded-xl border ${
                  item.highlight
                    ? "border-petrol/30 bg-petrol/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-petrol">
                    {item.period}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {item.duration}
                  </span>
                  {item.highlight && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-petrol/15 text-petrol font-medium">
                      Soporte a usuarios
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.company}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FORMACIÓN ──────────────────────────────────────────
function Formacion() {
  return (
    <section id="formacion" className="section-padding bg-secondary/50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest uppercase text-petrol mb-3"
          >
            Formación
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Formación académica y certificaciones
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card p-8 rounded-xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-petrol" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Títulos Oficiales
              </h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-foreground">
                  Licenciatura en Periodismo
                </p>
                <p className="text-sm text-muted-foreground">
                  Universidad Autónoma de Barcelona (2004)
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-foreground">
                  FP en Electrónica-Electricidad
                </p>
                <p className="text-sm text-muted-foreground">
                  C.P. Villar (1989)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card p-8 rounded-xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-petrol" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Certificaciones y Cursos
              </h3>
            </div>
            <div className="space-y-4">
              {[
                "Certificado en Fundamentos de IA (Google)",
                "Certificado en Análisis de Datos (Google)",
                "Cursos de Python y Bases de Datos (SQL)",
                "Cisco IT Essentials (formación completada, sin certificación oficial)",
                "Introducción a Habilidades en Análisis de Datos",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-petrol mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground/80">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── HABILIDADES ────────────────────────────────────────
function Habilidades() {
  const skillGroups = [
    {
      icon: Users,
      title: "Soporte a Usuarios (Experiencia)",
      skills: [
        { name: "Atención a usuarios en plataforma digital", level: "Medio" },
        { name: "Herramientas de ticketing", level: "Medio" },
        { name: "Resolución de incidencias funcionales", level: "Medio" },
      ],
    },
    {
      icon: PenTool,
      title: "Diseño y Web (Conocimientos)",
      skills: [
        { name: "WordPress", level: "Medio" },
        { name: "Canva", level: "Básico" },
        { name: "SEO/SEM", level: "Básico" },
      ],
    },
    {
      icon: Monitor,
      title: "Análisis de Datos (Solo formación)",
      skills: [
        { name: "Python", level: "Básico" },
        { name: "SQL", level: "Básico" },
        { name: "Google Analytics", level: "Básico" },
      ],
    },
    {
      icon: Languages,
      title: "Idiomas",
      skills: [
        { name: "Castellano", level: "Nativo" },
        { name: "Catalán", level: "Nativo" },
        { name: "Inglés", level: "B2" },
      ],
    },
  ];

  const levelWidth: Record<string, string> = {
    Básico: "30%",
    "Básico-Medio": "40%",
    Medio: "60%",
    "Medio-Alto": "75%",
    Nativo: "100%",
    B2: "65%",
  };

  return (
    <section id="habilidades" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest uppercase text-petrol mb-3"
          >
            Competencias
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Habilidades e idiomas
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Niveles basados en experiencia profesional real y formación
            acreditada. Se distingue entre experiencia y formación.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeInUp}
              className="bg-card p-7 rounded-xl border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <group.icon className="h-4 w-4 text-petrol" />
                </div>
                <h3 className="font-bold text-foreground">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: levelWidth[skill.level] || "50%",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] as const }}
                        className="h-full bg-petrol rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONTACTO ───────────────────────────────────────────
function Contacto() {
  return (
    <section
      id="contacto"
      className="section-padding bg-[#0a2e4a] text-white"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest uppercase text-stone-400 mb-3"
          >
            Contacto
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Hablemos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-stone-300 text-lg mb-12 leading-relaxed"
          >
            Disponible para posiciones de atención a usuarios y soporte
            funcional en entorno digital. También puedo colaborar en tareas de
            redacción y documentación como servicio complementario.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 mb-12 max-w-lg mx-auto"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "rafael.ahumada@gmail.com",
                href: "mailto:rafael.ahumada@gmail.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Ver perfil",
                href: "https://www.linkedin.com/in/rafael-a-0b889626",
              },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                variants={fadeInUp}
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  contact.label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <contact.icon className="h-6 w-6 text-stone-300" />
                <div>
                  <p className="text-xs text-stone-400 mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-white">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 text-sm text-stone-400"
          >
            <span className="px-3 py-1.5 rounded-full border border-white/10">
              Castellano Nativo
            </span>
            <span className="px-3 py-1.5 rounded-full border border-white/10">
              Catalán Nativo
            </span>
            <span className="px-3 py-1.5 rounded-full border border-white/10">
              Inglés B2
            </span>
            <span className="px-3 py-1.5 rounded-full border border-white/10">
              100% Remoto
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── NAVBAR ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a
          href="#"
          className="font-bold text-foreground text-lg tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          R. Ahumada
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Servicios", href: "#servicios" },
            { label: "Experiencia", href: "#experiencia" },
            { label: "Formación", href: "#formacion" },
            { label: "Habilidades", href: "#habilidades" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-petrol text-white hover:bg-petrol-light font-medium"
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contactar
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => {
            document
              .getElementById("contacto")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Mail className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}

// ─── FOOTER ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 bg-[#071e30] text-stone-500 text-sm">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Rafael Ahumada García. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Servicios />
        <PorQueElegirme />
        <Experiencia />
        <Formacion />
        <Habilidades />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
