import { Archetype, Question } from '../types';

export const ARCHETYPES: Archetype[] = [
    {
        id: 'tradicional',
        name: 'El Tradicional Orbital',
        vibe: 'Sos el guardián de la mística, el que sabe que el mate no se apura ni se hierve.',
        ritual: ['Mate caliente', 'Amargo', 'Agua a 75-80°C', 'Cebadas parejas'],
        recommendation: 'Yerba Clásica + Mate de calabaza',
        tip: 'No lo hiervas, no lo mates. La paciencia es tu mejor yerba.',
        image: '/mate_tradicional.png',
    },
    {
        id: 'tereré',
        name: 'La Tereré Explorer',
        vibe: 'Cero complicaciones, mucha frescura. Donde otros ven calor, vos ves una jarra con hielo.',
        ritual: ['Tereré', 'Cítricos o menta', 'Mucho hielo', 'Jarrita de acero o vidrio'],
        recommendation: 'Yerba con Hierbas + Jugo frutal',
        tip: 'Si hace calor, no discutas: tereré. El hielo es tu mejor amigo.',
        image: '/mate_terere.png',
    },
    {
        id: 'intenso',
        name: 'El Intenso de Gravedad',
        vibe: 'Directo al grano. O a la hoja. No buscás charla, buscás que ese primer amargo te reinicie.',
        ritual: ['Amargo fuerte', 'Yerba intensa', 'Mate chico', 'Cebada corta'],
        recommendation: 'Yerba Despalada + Mate de madera',
        tip: 'Pocas palabras. Mucha yerba. La intensidad no se negocia.',
        image: '/mate_intenso.png',
    },
    {
        id: 'dulce',
        name: 'La Dulce Nostálgica',
        vibe: 'El mate es un abrazo. Lo preferís amable, compañero y con ese toque dulce que te transporta.',
        ritual: ['Dulcito (con criterio)', 'Mate grande', 'Ritmo lento', 'Agua templada'],
        recommendation: 'Yerba Suave + Azúcar o miel',
        tip: 'Dulce sí, empalagoso no. El equilibrio es el secreto del cariño.',
        image: '/mate_dulce.png',
    },
    {
        id: 'botánico',
        name: 'El Botánico Cósmico',
        vibe: 'Tu mate es un laboratorio. Cedrón, peperina, lo que sea que le dé ese perfil místico.',
        ritual: ['Yuyos y mezclas', 'Menta o cedrón', 'Mate suave', 'Agua a punto'],
        recommendation: 'Yerba con Mezcla de Hierbas',
        tip: 'Experimentar es parte del rito. Cada yuyo cuenta una historia.',
        image: '/mate_botanico.png',
    },
    {
        id: 'social',
        name: 'El Social de la Galaxia',
        vibe: 'El mate es el centro de tu universo social. No importa la yerba, importa quién está enfrente.',
        ritual: ['Mate compartido', 'Mate grande', 'Termos cerca', 'Conversación eterna'],
        recommendation: 'Yerba Selección Especial + Termo de 1L',
        tip: 'El mate es la excusa: lo importante es la ronda y lo que se dice en ella.',
        image: '/mate_social.png',
    },
];

export const QUESTIONS: Question[] = [
    {
        id: 'q1',
        text: '¿Cuándo mateás más?',
        options: [
            { text: 'A la mañana ☀️', scores: { intenso: 2, tradicional: 1 } },
            { text: 'Tarde 🌅', scores: { social: 2, dulce: 1 } },
            { text: 'Noche 🌙', scores: { botánico: 2, dulce: 1 } },
            { text: 'Todo el día 🔄', scores: { tradicional: 2, social: 1 } },
        ],
    },
    {
        id: 'q2',
        text: '¿Qué buscás con el mate?',
        options: [
            { text: 'Energía ⚡', scores: { intenso: 2, tradicional: 1 } },
            { text: 'Calma 🧘', scores: { botánico: 2, dulce: 1 } },
            { text: 'Foco 🎯', scores: { intenso: 2, tradicional: 1 } },
            { text: 'Ritual 🧉', scores: { tradicional: 2, social: 1 } },
        ],
    },
    {
        id: 'q3',
        text: '¿Cómo lo preferís?',
        options: [
            { text: 'Amargo 🌿', scores: { intenso: 2, tradicional: 1, social: 1 }, dominant: 'intenso' },
            { text: 'Dulce 🍯', scores: { dulce: 3 } },
            { text: 'Depende 🤔', scores: { botánico: 2, social: 1 } },
            { text: 'Tereré 🧊', scores: { tereré: 3 } },
        ],
    },
    {
        id: 'q4',
        text: 'Clima ideal:',
        options: [
            { text: 'Frío ❄️', scores: { tradicional: 2, intenso: 1 } },
            { text: 'Calor ☀️', scores: { tereré: 3 } },
            { text: 'Me da igual 🤷', scores: { social: 2, botánico: 1 } },
        ],
    },
    {
        id: 'q5',
        text: 'Intensidad:',
        options: [
            { text: 'Suave 🍃', scores: { botánico: 2, dulce: 1 } },
            { text: 'Medio 🧉', scores: { social: 2, tradicional: 1 } },
            { text: 'Fuerte 💥', scores: { intenso: 2, tradicional: 1 } },
        ],
    },
    {
        id: 'q6',
        text: 'Modo:',
        options: [
            { text: 'Solo 👤', scores: { intenso: 1, tradicional: 1, botánico: 1 } },
            { text: 'En ronda 👥', scores: { social: 3 } },
        ],
    },
    {
        id: 'q7',
        text: 'Tu personalidad mate:',
        options: [
            { text: 'Clásico 🏛️', scores: { tradicional: 2 } },
            { text: 'Curioso (mezclas) 🧪', scores: { botánico: 2 } },
            { text: 'Práctico ✅', scores: { tereré: 2 } },
            { text: 'Romántico ✨', scores: { dulce: 2 } },
        ],
    },
];
