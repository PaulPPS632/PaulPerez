import { Project } from "../models/project";

export const PROJECTS: Project[] = [
    {
        name:'Technet',
        description:'An ecommerce platform for a computer and electronics store, featuring inventory tracking, product serialization, invoicing, and quote generation.',
        HowWasDone:'An ecommerce platform for a computer and electronics store, featuring inventory tracking, product serialization, invoicing, and quote generation.',
        image:'technet.webp',
        url:'https://technetsac.com/',
        git:'',
        technologies:['Angular', 'Expressjs', 'TailwindCSS','MySQL', 'TypeScript', 'GitActions']
    },
    {
        name:'AyB EcoConsulting',
        description:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        HowWasDone:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        image:'aybecoconsulting.webp',
        url:'https://capacitaciones.aybecoconsultingperu.com/',
        git:'https://github.com/PaulPPS632/Front-AyBEcoConsulting',
        technologies:['Angular', 'Expressjs', 'TailwindCSS','MySQL', 'TypeScript', 'GitActions']
    },
    {
        name:'Fryzan',
        description:'A SaaS application for inventory management and billing, featuring real-time data visualization and chart-based insights.',
        HowWasDone:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        image:'fryzan.webp',
        url:'https://fryzan.com',
        git:'https://github.com/PaulPPS632/tenant-Front',
        technologies:['Angular',  'Expressjs', 'TailwindCSS','MySQL', 'TypeScript', 'GitActions' ]
    },
    {
        name:'GOT',
        description:'A SaaS application for inventory management and billing, featuring real-time data visualization and chart-based insights.',
        HowWasDone:'A course-selling platform for online learning, offering course management, certification generation, and administration tools.',
        image:'GOT.webp',
        url:'https://got-v2.vercel.app/',
        git:'https://github.com/PaulPPS632/GOT-V2',
        technologies:['Angular', 'TailwindCSS', 'TypeScript']
    }
]