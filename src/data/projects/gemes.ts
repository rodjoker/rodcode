import type { ProjectCase } from './types'

const gemes: ProjectCase = {
  slug: 'gemes',
  title: 'GEMES — Plataforma de logística y delivery',
  tagline: 'Clientes, operadores y riders coordinados en tiempo real sobre una arquitectura serverless en AWS, en producción en Quito.',
  summary:
    'Plataforma de delivery de tres actores. El negocio crea un pedido con origen, destino y costo estimado; el operador lo ve en vivo, lo asigna (o se auto-asigna) a un rider y sigue cada paso hasta la entrega; el rider recibe el pedido en su app, reporta su ubicación en segundo plano y cierra la entrega con foto. Incluye panel ejecutivo de métricas y una API pública para que otros sistemas, como GEMES-HUB, creen pedidos y reciban eventos por webhook. Lo diseñé, lo construí y lo opero yo.',
  status: 'Producción',
  cover: '/projects/gemes/operator-rider-map.jpg',
  origin: null,
  timeline: {
    start: 'Ene 2024',
    end: 'En producción',
    duration: '+2 años en producción',
    how: 'No es un proyecto de una entrega: evoluciona de forma continua. Cada mejora (auto-asignación, API pública, métricas, resiliencia de red) salió a producción de forma incremental, sin detener la operación.',
  },
  stack: [
    { label: 'Backend', items: ['NestJS', 'TypeScript', 'Serverless Framework', 'AWS Lambda', 'Swagger'] },
    { label: 'Tiempo real', items: ['API Gateway WebSocket', 'Redis (Upstash)', 'Expo Push Notifications'] },
    { label: 'Datos y archivos', items: ['MongoDB Atlas', 'Mongoose', 'AWS S3'] },
    { label: 'Autenticación', items: ['AWS Cognito', 'Roles: operador, cliente y rider', 'JWT'] },
    { label: 'Backoffice web', items: ['React 18', 'Vite', 'Material UI', 'Tailwind CSS', 'Google Maps'] },
    { label: 'App móvil del rider', items: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'NativeWind', 'Zustand', 'GPS en segundo plano'] },
  ],
  strategies: [
    {
      title: 'Serverless para pagar por uso',
      detail:
        'Todo el API REST corre como una sola Lambda con NestJS detrás de API Gateway HTTP; el tiempo real vive en un API Gateway WebSocket aparte. No hay servidores que mantener y el costo sigue a la demanda.',
    },
    {
      title: 'Tiempo real con presencia en Redis',
      detail:
        'Las conexiones WebSocket de operadores y riders se registran en Redis, así el backend sabe a quién avisar de cada cambio de estado sin mantener un servidor con conexiones abiertas.',
    },
    {
      title: 'Auto-asignación y dos pedidos simultáneos',
      detail:
        'El sistema propone el rider más adecuado y permite hasta dos pedidos activos por rider bajo reglas explícitas para la segunda orden, con la reasignación manual disponible para el operador.',
    },
    {
      title: 'App del rider pensada para mala señal',
      detail:
        'Las acciones del rider (como completar una entrega) pasan por una cola local que reintenta al recuperar conexión, y la app muestra "Sincronizando…" en lugar de perder el dato. El GPS sigue reportando en segundo plano.',
    },
    {
      title: 'API pública con claves, no acceso directo',
      detail:
        'Terceros crean cotizaciones y pedidos con una API key propia y reciben eventos por webhooks firmados. GEMES-HUB, el sistema de un restaurante, ya la usa en producción.',
    },
    {
      title: 'Cambios aditivos en producción',
      detail:
        'Al ser un sistema que opera todos los días, las funciones nuevas se agregan sin tocar los flujos que ya funcionan, se prueban contra datos reales y los pedidos de prueba se limpian con el mismo borrado real.',
    },
    {
      title: 'Simplificar la infraestructura cuando el costo no se justifica',
      detail:
        'Migré la base de datos de DocumentDB a MongoDB Atlas y eliminé la VPC con su NAT Gateway: la Lambda dejó de necesitar estar dentro de una red privada y se redujo un costo fijo mensual.',
    },
  ],
  screens: [
    {
      title: 'Órdenes en curso (operador)',
      description:
        'Cada pedido activo muestra tienda, rider, ruta y una línea de tiempo con hora por paso: creado, asignado, en tienda, recogido, en domicilio y entregado. El operador puede reasignar con un clic y recibe aviso sonoro cuando entra algo nuevo. En la captura se difuminaron los datos de los riders.',
      tech: ['React', 'Material UI', 'WebSockets', 'Tailwind CSS'],
      image: '/projects/gemes/operator-orders.jpg',
      alt: 'Lista de órdenes en curso con línea de tiempo por pedido',
    },
    {
      title: 'Mapa de riders (operador)',
      description:
        'Ubicación en vivo de los motorizados sobre el mapa de la ciudad, con contador de riders en línea y activos. La posición llega desde la app del rider, que la envía en segundo plano.',
      tech: ['Google Maps API', 'WebSockets', 'GPS en segundo plano'],
      image: '/projects/gemes/operator-rider-map.jpg',
      alt: 'Mapa de Quito con la ubicación en vivo de un rider',
    },
    {
      title: 'Nuevo pedido (cliente)',
      description:
        'El negocio ingresa destinatario, detalle del pedido, método de pago (efectivo, transferencia o tarjeta), sucursal de recogida y dirección de entrega, que puede fijar con doble clic en el mapa. Antes de confirmar ve el costo estimado. La dirección de recogida está difuminada.',
      tech: ['React Hook Form', 'Yup', 'Google Maps API', 'Amplify + Cognito'],
      image: '/projects/gemes/client-new-order.jpg',
      alt: 'Formulario de nuevo pedido con mapa',
    },
    {
      title: 'App del rider: radar',
      description:
        'Pantalla principal del rider: se conecta con un deslizamiento, queda "buscando pedido" y recibe el pedido por notificación push de alta prioridad. El aviso "Sincronizando" indica que hay una acción pendiente en la cola local por falta de señal.',
      tech: ['React Native', 'Expo Notifications', 'Zustand', 'Cola local con reintentos'],
      image: '/projects/gemes/rider-radar.jpg',
      alt: 'Pantalla de radar de la app del rider buscando pedido',
      fit: 'contain',
    },
    {
      title: 'App del rider: billetera',
      description:
        'Ganancias del período con navegación por fecha, número de viajes y listado de las últimas entregas.',
      tech: ['React Native', 'Expo Router', 'NativeWind'],
      image: '/projects/gemes/rider-wallet.jpg',
      alt: 'Billetera del rider con ganancias y últimas entregas',
      fit: 'contain',
    },
  ],
  links: {},
  disclaimer:
    'Proyecto privado en producción: no hay demo pública ni repositorio abierto. En las capturas se difuminaron los datos de personas reales.',
}

export default gemes
