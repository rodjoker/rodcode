import type { ProjectCase } from './types'

const zonaClientes: ProjectCase = {
  slug: 'zona-clientes',
  title: 'Zona de Clientes — Portal para compradores de inmuebles',
  tagline: 'Portal de autoservicio donde el comprador sigue su negocio: pagos, trámites y documentos, sobre un backend serverless en AWS Lambda.',
  summary:
    'Demo construida para responder una solicitud de propuesta (RFP) de una constructora. El comprador entra a su cuenta y ve el estado de su negocio: el plan de pagos por cuotas, la línea de tiempo de trámites, sus documentos y la firma electrónica. La constructora administra el catálogo de inmuebles y el negocio de cada cliente. Frontend en Next.js y API propia en AWS Lambda con MongoDB, S3 y autenticación por roles.',
  status: 'Demo',
  cover: '/projects/zona-clientes/pagos.jpg',
  origin: {
    template: 'user_crud_express',
    note: 'Mi backend base en Express (JWT, roles y bloqueo de cuenta). Se llevó a Lambda manteniendo la misma arquitectura en capas y el mismo contrato de respuesta, y se le construyeron encima los módulos de inmuebles, pagos, trámites, documentos y firma.',
  },
  timeline: {
    start: '20 sep 2026',
    end: '28 sep 2026',
    days: 8,
    how: 'El RFP pedía solo el frontend; construí también el backend completo para mostrar una demo funcional de punta a punta.',
  },
  stack: [
    { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Maps'] },
    { label: 'Backend serverless', items: ['AWS Lambda (Node.js 22)', 'API Gateway (HTTP API)', 'Lambda Authorizer', 'Serverless Framework 3', 'esbuild'] },
    { label: 'Datos y archivos', items: ['MongoDB Atlas', 'Mongoose', 'AWS S3 (URLs firmadas)', 'Zod'] },
    { label: 'Autenticación', items: ['JWT', 'bcrypt', 'Roles: comprador, constructora, vendedor y admin'] },
    { label: 'Pruebas', items: ['Vitest', 'MongoDB en memoria', '100 pruebas de integración'] },
  ],
  strategies: [
    {
      title: 'Del RFP al producto completo',
      detail:
        'El documento pedía solo el frontend contra una API que construiría el cliente. Decidí construir también el backend completo para entregar una demo que funciona de punta a punta, con datos reales en base de datos y roles.',
    },
    {
      title: 'Una función Lambda por endpoint',
      detail:
        'La API son 34 funciones detrás de API Gateway. Cada una se empaqueta por separado con esbuild y solo lleva el código que usa, lo que reduce el tiempo de arranque y el costo cuando no hay tráfico.',
    },
    {
      title: 'Un Authorizer que valida el token una sola vez',
      detail:
        'Un Lambda Authorizer revisa el JWT y deja el id y el rol del usuario en el contexto de la petición. API Gateway cachea ese resultado 60 segundos, y las funciones no repiten la validación.',
    },
    {
      title: 'Un envoltorio común para los handlers',
      detail:
        'Un helper centraliza lo repetido: conexión a MongoDB, lectura del usuario y del cuerpo, control de roles y traducción de errores a respuestas limpias. Cada handler queda en pocas líneas.',
    },
    {
      title: 'Reglas de negocio en servicios, independientes del framework',
      detail:
        'La lógica vive en servicios separados de los handlers, por eso se pudo portar desde Express a Lambda sin reescribirla. Una cuota pagada o un documento firmado ya no se puede modificar, y un inmueble pasa de disponible a reservado y a vendido solo con el rol correcto.',
    },
    {
      title: 'El rol nunca viene del cliente',
      detail:
        'El registro público siempre crea un comprador: el rol no se lee del cuerpo de la petición. Los demás roles los crea un administrador.',
    },
    {
      title: 'Archivos privados en S3',
      detail:
        'Las fotos de los inmuebles y los documentos se guardan en un bucket privado y se acceden con URLs firmadas, no públicas.',
    },
    {
      title: 'Pruebas de integración sobre una base en memoria',
      detail:
        'Cien pruebas con Vitest cubren los módulos de negocio contra un MongoDB en memoria, así que se pueden correr sin tocar la base de datos real.',
    },
  ],
  screens: [
    {
      title: 'Inicio',
      description:
        'Resumen del comprador: estado de los pagos, avance de obra, accesos rápidos a pagos, trámites, documentos y solicitudes, notificaciones y novedades de la constructora. La captura es de una sesión sin negocios asignados, por eso los bloques de pagos y avance de obra aparecen vacíos.',
      tech: ['Next.js', 'Tailwind CSS', 'JWT'],
      image: '/projects/zona-clientes/dashboard.jpg',
      alt: 'Pantalla de inicio de la Zona de Clientes con accesos rápidos y novedades',
    },
    {
      title: 'Catálogo de inmuebles',
      description:
        'Vista de la constructora: tarjetas de inmuebles con foto, código, ubicación, descripción, precio y estado (disponible, reservado o vendido). Las fotos se suben a S3.',
      tech: ['AWS Lambda', 'MongoDB', 'S3 con URLs firmadas'],
      image: '/projects/zona-clientes/catalogo.jpg',
      alt: 'Catálogo de inmuebles con foto, precio y estado',
    },
    {
      title: 'Ficha del inmueble',
      description:
        'Datos generales editables por la constructora: código, tipo, proyecto, ciudad, dirección, área, precio, alcobas, baños, parqueaderos y los pisos del edificio y los pisos listos, que alimentan el avance de obra del comprador.',
      tech: ['Zod', 'Mongoose', 'API REST'],
      image: '/projects/zona-clientes/ficha.jpg',
      alt: 'Formulario con los datos generales de un inmueble',
    },
    {
      title: 'Plan de pagos',
      description:
        'Valor total, pagado y saldo, y la tabla de cuotas con su estado: pagada con comprobante, vencida con botón de pago y pendiente a cargo de la entidad financiera. Una cuota pagada ya no se puede editar.',
      tech: ['Lambda', 'Roles', 'Validación con Zod'],
      image: '/projects/zona-clientes/pagos.jpg',
      alt: 'Plan de pagos con cuotas pagadas, vencidas y pendientes',
    },
    {
      title: 'Trámites',
      description:
        'Línea de tiempo del negocio en cinco etapas: separación, promesa de compraventa, estudio de crédito, escrituración y entrega, con su estado (completado, en curso o pendiente) y fechas. La constructora la edita y el comprador la consulta.',
      tech: ['Lambda', 'MongoDB', 'Roles'],
      image: '/projects/zona-clientes/tramites.jpg',
      alt: 'Línea de tiempo de trámites con estados',
    },
    {
      title: 'Documentos y firma',
      description:
        'Contratos, certificados y declaración de renta, con filtros por tipo. Cada documento muestra su estado: sin archivo, o no disponible con el motivo (por ejemplo, disponible desde enero de 2027). La pestaña de firma electrónica gestiona los documentos por firmar, que no se pueden firmar sin archivo ni dos veces.',
      tech: ['S3', 'Lambda', 'Roles'],
      image: '/projects/zona-clientes/documentos.jpg',
      alt: 'Lista de documentos con estados sin archivo y no disponible',
    },
  ],
  links: {
    github: 'https://github.com/rodjoker/demo_costructora',
  },
  disclaimer:
    'Demo construida para responder una solicitud de propuesta. Todos los datos (proyectos, montos y personas) son ficticios y no hay demo pública.',
}

export default zonaClientes
