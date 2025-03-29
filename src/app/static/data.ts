import { Project } from "../models/project";

export const PROJECTS: Project[] = [
    {
        name:'Technet',
        description:'Una plataforma de ecommerce para una tienda de computadoras y productos electrónicos, con seguimiento de inventario, serialización de productos, facturación y generación de cotizaciones.',
        HowWasDone:'An ecommerce platform for a computer and electronics store, featuring inventory tracking, product serialization, invoicing, and quote generation.',
        image:'technet.webp',
        url:'https://technetsac.com/',
        git:'',
        technologies:['Angular', 'Expressjs', 'TailwindCSS','MySQL', 'TypeScript', 'GitActions']
    },
    {
        name:'AyB EcoConsulting',
        description:'Una plataforma de venta de cursos para aprendizaje en línea, que ofrece gestión de cursos, generación de certificaciones y herramientas de administración.',
        HowWasDone:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        image:'aybecoconsulting.webp',
        url:'https://capacitaciones.aybecoconsultingperu.com/',
        git:'https://github.com/PaulPPS632/Front-AyBEcoConsulting',
        technologies:['Angular', 'Expressjs', 'TailwindCSS','MySQL', 'TypeScript', 'GitActions']
    },
    {
        name:'Fryzan',
        description:'Una aplicación SaaS para gestión de inventario y facturación, con visualización de datos en tiempo real e información basada en gráficos.',
        HowWasDone:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        image:'fryzan.webp',
        url:'https://fryzan.com',
        git:'https://github.com/PaulPPS632/tenant-Front',
        technologies:['Angular',  'Expressjs', 'TailwindCSS','MySQL', 'TypeScript', 'GitActions' ]
    },
    {
        name:'GOT',
        description:'Una plataforma para ver los episodios de game of thrones y los libros en los que esta basada la serie.',
        HowWasDone:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        image:'GOT.webp',
        url:'https://got-v2.vercel.app/',
        git:'https://github.com/PaulPPS632/GOT-V2',
        technologies:['Angular', 'TailwindCSS', 'TypeScript']
    },
    {
        name:'Abit',
        description:'Un sitio web donde puedes agregar hábitos y realizar un seguimiento de tu progreso.',
        HowWasDone:'I developed this web application using Angular, and Angular Cdk for drag and drop, I also used a library for managing uuids',
        image:'Abit.webp',
        url:'https://abit-ten.vercel.app',
        git:'https://github.com/PaulPPS632/abit',
        technologies:['Angular', 'TailwindCSS', 'TypeScript']
    },
    {
        name:'CCD CloudR2',
        description:'Una plataforma web para gestionar un bucket de Cloudflare R2. Se puede subir archivo, editar nombres, crear carpetas, creaer roles para usuarios, compartir carpetas espeficas y tener un historial de acciones por carpeta.',
        HowWasDone:'',
        image:'Gestor.webp',
        url:'https://gestor.paulyeffertperezsanjinez.link',
        git:'https://github.com/PaulPPS632/GESTOR-ARCHIVOS-CCD-UI.git',
        technologies:['Angular', 'TailwindCSS', 'TypeScript','Nodejs', 'Cloudflare', 'Expressjs']
    },
    {
        name:'CCD Masivos Whatsapp',
        description:`Una plataforma web en la que puedes crear flujos de mensajes publicitarios, recepcionar los leads interesados y registrarlos en un google sheet previamente indicado en la creacion de un mensaje masivo.
        Existen varios tipos de bots q se pueden crear algunos son: Bot, Responder, Asignacion, Bot-CRM, Deudores. Cada uno de estos tiene caracteristicas especiales a su funcion.
        `,
        HowWasDone:'',
        image:'Masivos.webp',
        url:'https://masivo.paulyeffertperezsanjinez.link/',
        git:'https://github.com/PaulPPS632/wsp-bot-ccd-ui.git',
        technologies:['Angular', 'TailwindCSS', 'TypeScript', 'Nodejs','Docker', 'Rabbitmq', 'Redis', 'Expressjs']
    },
    {
        name:'Muestra de Gym',
        description:`GymFit es una plataforma web diseñada para la gestión automatizada de gimnasios. Permite el control de ventas de productos y planes, registro de asistencia, administración de clientes, seguimiento de deudores y prospectos, además de reportes de ingresos y estadísticas. Incluye un sistema de inventario y cálculo de comisiones por ventas. Su diseño es intuitivo, accesible y optimizado para dispositivos móviles.`,
        HowWasDone:'',
        image:'gym.webp',
        url:'https://workoutflow-system.vercel.app',
        git:'https://github.com/PaulPPS632/workoutflow-system.git',
        technologies:['Nextjs','Vite', 'TailwindCSS', 'TypeScript', 'Nodejs', 'Expressjs']
    }
]