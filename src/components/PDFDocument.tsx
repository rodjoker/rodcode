'use client'
import dynamic from 'next/dynamic';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Dynamically import PDFDownloadLink with no SSR
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
);

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 15,
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  contact: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  experienceDate: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 5,
  },
  bulletPoint: {
    marginLeft: 15,
    fontSize: 10,
    marginBottom: 3,
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header / Personal Info */}
      <View style={styles.header}>
        <Text style={styles.title}>RODOLFO ANTONIO RODRÍGUEZ QUINTERO</Text>
        <Text style={styles.contact}>
          Cel: +34 611360462 | rodolfoantoniorq@gmail.com | LinkedIn | GitHub
        </Text>
        <Text style={styles.jobTitle}>DESARROLLADOR WEB</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PERFIL</Text>
        <Text style={styles.text}>
          Desarrollador Full Stack Eficiencia y automatización con IA, 2 años de experiencia en la creación de aplicaciones web y móviles, 
          con un enfoque en la integración de herramientas de inteligencia artificial para optimizar y 
          acelerar los flujos de trabajo de desarrollo front-end y back-end. Especializado en JavaScript, 
          React, Node.js, Express.js y MongoDB, y con experiencia en Python y FastAPI para el desarrollo 
          de APIs y servicios. He implementado soluciones que aprovechan la IA para automatizar tareas 
          repetitivas, mejorar la eficiencia de los procesos y entregar soluciones escalables, robustas 
          y de alto rendimiento.
        </Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCIA</Text>
        <Text style={styles.experienceTitle}>Desarrollador Full Stack Freelance</Text>
        <Text style={styles.experienceDate}>Mar. 2023 – Actualmente</Text>
        
        <Text style={styles.text}>Desarrollo de aplicaciones web responsivas:</Text>
        <Text style={styles.bulletPoint}>
          • Creación de una aplicación para la administración de proyectos inmobiliarios utilizando 
            JavaScript, React Vite, Material UI y MongoDB.
        </Text>
        
        <Text style={styles.text}>Integración con AWS:</Text>
        <Text style={styles.bulletPoint}>
          • Implementación de Cognito User Pool para autenticación de usuarios.
        </Text>
        <Text style={styles.bulletPoint}>
          • Desarrollo de una API RESTful para conectar frontend y backend, Connect y la base de datos 
            asegurando la escalabilidad y eficiencia del sistema.
        </Text>
        
        <Text style={styles.text}>Desarrollo de aplicaciones BackEnd:</Text>
        <Text style={styles.bulletPoint}>
          • Implementé un API RESTful robusta con Python (FastAPI), integrando AWS (Boto3) para la 
            gestión de usuarios (CRUD) y persistencia en base de datos.
        </Text>
        <Text style={styles.bulletPoint}>
          • Diseñé y desarrollé un sistema de autenticación de usuarios con NestJS y Passport.js, 
            incluyendo soporte OAuth 2.0 para integración con terceros.
        </Text>
      </View>

      {/* Technical Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HABILIDADES TÉCNICAS</Text>
        <Text style={styles.text}>
          <Text style={styles.skillCategory}>Lenguajes de Programación: </Text>
          JavaScript, TypeScript, Python.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.skillCategory}>Frontend: </Text>
          React, Next JS (uso de IA para generación de componentes, optimización de código y análisis 
          de UX), Material UI, HTML, CSS, Tailwind CSS.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.skillCategory}>Backend: </Text>
          Node.js, Express.js, FastAPI (integración de modelos de IA para procesamiento de datos y 
          lógica de negocio), Nest.js.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.skillCategory}>Bases de Datos: </Text>
          MongoDB, SQL.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.skillCategory}>Cloud y Herramientas: </Text>
          AWS (Lex, Connect, Cognito, Boto3), Git, GitHub.
        </Text>
      </View>

      {/* Other Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>OTRAS HABILIDADES</Text>
        <Text style={styles.bulletPoint}>
          • Prompt engineering: Creación y optimización de instrucciones para modelos de IA.
        </Text>
        <Text style={styles.bulletPoint}>
          • Desarrollo asistido por IA: Utilización de herramientas como GitHub Copilot para la 
            generación, refactorización y depuración de código.
        </Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ESTUDIOS</Text>
        <Text style={styles.text}>
          Formación en Desarrollo Web Full Stack – Protalento/ADA School, 2023
        </Text>
      </View>
    </Page>
  </Document>
);

export const CVDownloadButton = () => (
  <PDFDownloadLink document={<MyDocument />} fileName="CV_Rodolfo_Rodriguez.pdf">
    {({ blob, url, loading, error }) => (
      <div className="inline-flex items-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        {loading ? 'Cargando...' : 'CV'}
      </div>
    )}
  </PDFDownloadLink>
);

export default MyDocument;