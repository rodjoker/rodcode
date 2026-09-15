import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 36,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  // ── Header ──────────────────────────────────────────────────────────────────
  accentBar: {
    height: 5,
    backgroundColor: '#111827',
    marginBottom: 14,
  },
  name: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  contact: {
    fontSize: 9.5,
    color: '#4B5563',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#2563EB',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 10,
  },
  // ── Secciones ────────────────────────────────────────────────────────────────
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 3,
  },
  // ── Perfil ───────────────────────────────────────────────────────────────────
  profileText: {
    fontSize: 9.5,
    color: '#374151',
    lineHeight: 1.6,
  },
  // ── Skills ───────────────────────────────────────────────────────────────────
  skillRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  skillLabel: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    width: 100,
  },
  skillValue: {
    fontSize: 9.5,
    color: '#374151',
    flex: 1,
    lineHeight: 1.5,
  },
  // ── Experiencia ──────────────────────────────────────────────────────────────
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  jobName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    flex: 1,
  },
  jobDate: {
    fontSize: 9,
    color: '#6B7280',
    marginLeft: 8,
  },
  bullet: {
    fontSize: 9.5,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 3,
    paddingLeft: 12,
  },
  stackLine: {
    fontSize: 8.5,
    color: '#6B7280',
    fontFamily: 'Helvetica-Oblique',
    paddingLeft: 12,
    marginTop: 1,
    marginBottom: 6,
  },
  // ── Estudios ─────────────────────────────────────────────────────────────────
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  eduTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    flex: 1,
  },
  eduDate: {
    fontSize: 9,
    color: '#6B7280',
  },
  eduSub: {
    fontSize: 9,
    color: '#4B5563',
    paddingLeft: 0,
    marginBottom: 2,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Barra de acento */}
      <View style={styles.accentBar} />

      {/* ── HEADER ── */}
      <Text style={styles.name}>RODOLFO ANTONIO RODRÍGUEZ QUINTERO</Text>
      <Text style={styles.contact}>
        +34 611360462  ·  rodolfoantoniorq@gmail.com  ·  linkedin.com/in/rodolforodriguez-desarrolladorweb  ·  rodcode.dev
      </Text>
      <Text style={styles.jobTitle}>
        DESARROLLADOR FULL STACK  ·  React · Node.js · Express · NestJS · AWS
      </Text>
      <View style={styles.divider} />

      {/* ── PERFIL ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil</Text>
        <Text style={styles.profileText}>
          Desarrollador Full Stack con cerca de 3 años de experiencia programando, especializado en React, Node.js y Express. Experiencia concreta en mantenimiento, evolución y mejora continua de aplicaciones web en producción real: diagnóstico y resolución de bugs críticos, optimización de infraestructura y evolución de APIs y flujos de negocio existentes. Trabajo con MongoDB y SQL, diseño APIs RESTful, y estoy acostumbrado a operar de forma autónoma sobre múltiples frentes de un mismo producto (frontend, backend y despliegue), con foco en calidad, buenas prácticas y aprendizaje continuo.
        </Text>
      </View>

      {/* ── HABILIDADES ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>

        {[
          ['Lenguajes',              'JavaScript, TypeScript'],
          ['Frontend',               'React, Next JS, Material UI, HTML, CSS, Tailwind CSS'],
          ['Backend',                'Node.js, Express.js, NestJS'],
          ['Bases de datos',         'MongoDB, SQL'],
          ['Tiempo real',            'WebSockets'],
          ['Cloud',                  'AWS (Lambda, Amazon Connect)'],
          ['Herramientas y prácticas','Git/GitHub, Postman, diseño de APIs RESTful, control de versiones, optimización de costos de infraestructura, Prompt engineering, Desarrollo asistido por IA (GitHub Copilot, Claude AI)'],
        ].map(([label, value]) => (
          <View key={label} style={styles.skillRow}>
            <Text style={styles.skillLabel}>{label}:</Text>
            <Text style={styles.skillValue}>{value}</Text>
          </View>
        ))}
      </View>

      {/* ── EXPERIENCIA ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia</Text>

        <View style={styles.jobHeader}>
          <Text style={styles.jobName}>Desarrollador Full Stack — Freelance</Text>
          <Text style={styles.jobDate}>Mar. 2023 – Actualidad</Text>
        </View>

        {/* GEMES */}
        <Text style={[styles.jobName, { fontSize: 9.5, paddingLeft: 12, marginBottom: 4 }]}>
          GEMES — Plataforma de logística y delivery (Ene. 2024 – Actualidad)
        </Text>
        <Text style={styles.bullet}>
          • Asumí la responsabilidad completa del backend y frontend (cliente y operadores) tras los primeros 8 meses del proyecto, liderando su mantenimiento y evolución continua
        </Text>
        <Text style={styles.bullet}>
          • Migré la infraestructura AWS, reduciendo el costo operativo mensual en aproximadamente un 80% mediante la eliminación de componentes innecesarios (DocumentDB, NAT, VPC)
        </Text>
        <Text style={styles.bullet}>
          • Diagnostiqué y resolví incidentes críticos en producción: cálculo incorrecto de tarifas de riders, pérdida de sesión entre cuentas y reconexión de WebSocket con tokens vencidos
        </Text>
        <Text style={styles.bullet}>
          • Desarrollé y mantuve APIs RESTful con Node.js/NestJS y MongoDB, integradas con servicios AWS (Cognito, Lambda) para autenticación y comunicación en tiempo real vía WebSockets
        </Text>
        <Text style={styles.bullet}>
          • Construí y evolucioné el frontend web en React para clientes y operadores: formularios, tablas dinámicas y módulos de notificaciones
        </Text>
        <Text style={styles.bullet}>
          • Diseñé e implementé el sistema de auto-asignación de pedidos a riders, que calcula el rider disponible más cercano al local de origen aplicando reglas de negocio (disponibilidad, pedidos activos, ubicación), reduciendo la carga operativa manual del equipo de despacho
        </Text>
        <Text style={styles.stackLine}>
          Stack: NestJS · Node.js · MongoDB · AWS (Lambda, Cognito) · WebSockets · React
        </Text>

        {/* Proyecto inmobiliario */}
        <Text style={[styles.jobName, { fontSize: 9.5, paddingLeft: 12, marginBottom: 4 }]}>
          Plataforma de administración de proyectos inmobiliarios (Mar. 2023 – Dic. 2023)
        </Text>
        <Text style={styles.bullet}>
          • Desarrollé el frontend con React (Vite) y Material UI para la gestión de proyectos de construcción y remodelación: alta, edición y eliminación de proyectos, asignación de trabajadores y seguimiento de avance
        </Text>
        <Text style={styles.bullet}>
          • Contribuí puntualmente al backend (endpoints REST) y a la infraestructura como código para el despliegue en AWS
        </Text>
      </View>

      {/* ── ESTUDIOS ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estudios</Text>

        <View style={styles.eduRow}>
          <Text style={styles.eduTitle}>Formación en Desarrollo Web Full Stack MERN</Text>
          <Text style={styles.eduDate}>2023</Text>
        </View>
        <Text style={styles.eduSub}>ADA School</Text>

        <View style={[styles.eduRow, { marginTop: 4 }]}>
          <Text style={styles.eduTitle}>Profesional en Derecho</Text>
          <Text style={styles.eduDate}>2011</Text>
        </View>
        <Text style={styles.eduSub}>Universidad Arturo Michelena</Text>
      </View>

      {/* ── CERTIFICACIONES ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificaciones</Text>

        <View style={styles.eduRow}>
          <Text style={styles.eduTitle}>AWS Certified Cloud Practitioner (CCP)</Text>
        </View>
        <Text style={styles.eduSub}>Amazon Web Services · credly.com/badges/e829ea0a-7fad-4379-ab9c-c4f0b813fb32</Text>
      </View>

    </Page>
  </Document>
);

export default MyDocument;
