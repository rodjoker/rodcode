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
        DESARROLLADOR FULL STACK  ·  React · Next.js · NestJS · React Native · AWS
      </Text>
      <View style={styles.divider} />

      {/* ── PERFIL ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil</Text>
        <Text style={styles.profileText}>
          Desarrollador Full Stack con experiencia construyendo productos completos en producción: interfaces web, apps móviles y arquitecturas serverless en AWS. Especializado en el ecosistema JavaScript/TypeScript (React, Next.js, NestJS, React Native) y en sistemas de tiempo real con WebSockets. Uso la IA como co-piloto de desarrollo para entregar código más limpio y escalable a mayor velocidad.
        </Text>
      </View>

      {/* ── HABILIDADES ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>

        {[
          ['Lenguajes',        'JavaScript, TypeScript, Python'],
          ['Frontend',         'React, Next.js, Tailwind CSS, Material UI, HTML, CSS'],
          ['Backend',          'Node.js, Express.js, NestJS, FastAPI'],
          ['Mobile',           'React Native, Expo'],
          ['Bases de datos',   'MongoDB, PostgreSQL, Supabase'],
          ['Cloud',            'AWS (Lambda, Cognito, S3, API Gateway, Connect), Serverless Framework, Boto3'],
          ['Tiempo real',      'WebSockets, Socket.io, Redis/Upstash · Estado: Zustand'],
          ['IA & Herramientas','GitHub Copilot, Claude AI, Git, GitHub, Swagger'],
          ['Metodologías',     'Clean Code, GitFlow, Agile, REST API Design'],
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

        {/* GEMES */}
        <View style={styles.jobHeader}>
          <Text style={styles.jobName}>GEMES — Plataforma de Logística (Freelance)</Text>
          <Text style={styles.jobDate}>Ene. 2024 – Actualidad</Text>
        </View>
        <Text style={styles.bullet}>
          • Construí plataforma de 3 actores en producción: backend serverless (NestJS + AWS Lambda), backoffice web (React + Vite + MUI) y app móvil (React Native + Expo)
        </Text>
        <Text style={styles.bullet}>
          • Implementé tiempo real con WebSockets (AWS API Gateway) + Redis para coordinación instantánea entre clientes, operadores y domiciliarios
        </Text>
        <Text style={styles.bullet}>
          • GPS tracking en background en app móvil con notificaciones push prioritarias (Expo Notifications)
        </Text>
        <Text style={styles.bullet}>
          • Infraestructura AWS completa: Lambda, Cognito, S3, API Gateway con Serverless Framework
        </Text>
        <Text style={styles.stackLine}>
          Stack: NestJS · TypeScript · MongoDB Atlas · AWS Lambda/Cognito/S3/API Gateway · React Native · Expo · Redis · Zustand
        </Text>

        {/* Proyectos adicionales */}
        <View style={styles.jobHeader}>
          <Text style={styles.jobName}>Proyectos Freelance Adicionales</Text>
          <Text style={styles.jobDate}>Mar. 2023 – Actualidad</Text>
        </View>
        <Text style={styles.bullet}>
          • Next.js + Supabase: reducción del 30% en tiempo de desarrollo aprovechando auth y base de datos integradas
        </Text>
        <Text style={styles.bullet}>
          • API RESTful Python (FastAPI) + AWS Boto3 para gestión de usuarios con CRUD completo y persistencia en BD
        </Text>
        <Text style={styles.bullet}>
          • Auth NestJS + Passport.js con soporte OAuth 2.0 para integración segura con servicios de terceros
        </Text>
        <Text style={styles.bullet}>
          • Plataforma inmobiliaria: administración de proyectos con React Vite, Material UI y MongoDB
        </Text>
        <Text style={styles.bullet}>
          • Integración AWS Connect + Cognito para flujos de autenticación y atención al cliente
        </Text>
      </View>

      {/* ── ESTUDIOS ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estudios</Text>

        <View style={styles.eduRow}>
          <Text style={styles.eduTitle}>Desarrollo Web Full Stack</Text>
          <Text style={styles.eduDate}>2023</Text>
        </View>
        <Text style={styles.eduSub}>Protalento / ADA School</Text>

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
          <Text style={styles.eduTitle}>AWS Certified Cloud Practitioner</Text>
          <Text style={styles.eduDate}>2025</Text>
        </View>
        <Text style={styles.eduSub}>Amazon Web Services · credly.com/badges/e829ea0a-7fad-4379-ab9c-c4f0b813fb32</Text>
      </View>

    </Page>
  </Document>
);

export default MyDocument;
