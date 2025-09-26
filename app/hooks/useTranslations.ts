import { useLanguage } from '../context/LanguageContext'

const translations = {
  fr: {
    services: [
      {
        icon: 'Gamepad2',
        title: "Salle de jeux",
        description: "Espace ludique avec consoles et jeux de société",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: 'Monitor',
        title: "Formations informatique",
        description: "De l'initiation à la programmation",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: 'Camera',
        title: "Photographie & montage",
        description: "Création visuelle et retouche professionnelle",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: 'FileText',
        title: "Formation bureautique",
        description: "Maîtrise de Microsoft Office",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: 'Theater',
        title: "Théâtre",
        description: "Expression artistique et confiance en soi",
        color: "from-indigo-500 to-purple-500",
      },
      {
        icon: 'Mic',
        title: "Studio d'enregistrement",
        description: "Production audio et podcasts",
        color: "from-pink-500 to-rose-500",
      },
    ],
    hero: {
      title: "Centre de Jeunesse Tétouan",
      subtitle: "Un espace pour apprendre, créer et grandir",
      description: "Découvrez nos activités et programmes dédiés aux jeunes"
    }
  },
  ar: {
    services: [
      {
        icon: 'Gamepad2',
        title: "قاعة الألعاب",
        description: "مساحة ترفيهية مع ألعاب الفيديو وألعاب الطاولة",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: 'Monitor',
        title: "دورات الكمبيوتر",
        description: "من المبتدئين إلى البرمجة",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: 'Camera',
        title: "التصوير والمونتاج",
        description: "الإبداع البصري والتحرير الاحترافي",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: 'FileText',
        title: "تدريب المكاتب",
        description: "إتقان مايكروسوفت أوفيس",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: 'Theater',
        title: "مسرح",
        description: "التعبير الفني والثقة بالنفس",
        color: "from-indigo-500 to-purple-500",
      },
      {
        icon: 'Mic',
        title: "استوديو التسجيل",
        description: "إنتاج الصوت والبودكاست",
        color: "from-pink-500 to-rose-500",
      },
    ],
    hero: {
      title: "مركز شباب تطوان",
      subtitle: "مساحة للتعلم والإبداع والنمو",
      description: "اكتشف أنشطتنا وبرامجنا المخصصة للشباب"
    }
  },
  es: {
    services: [
      {
        icon: 'Gamepad2',
        title: "Sala de juegos",
        description: "Espacio lúdico con consolas y juegos de mesa",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: 'Monitor',
        title: "Formación informática",
        description: "Desde iniciación hasta programación",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: 'Camera',
        title: "Fotografía y montaje",
        description: "Creación visual y edición profesional",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: 'FileText',
        title: "Formación ofimática",
        description: "Dominio de Microsoft Office",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: 'Theater',
        title: "Teatro",
        description: "Expresión artística y confianza en uno mismo",
        color: "from-indigo-500 to-purple-500",
      },
      {
        icon: 'Mic',
        title: "Estudio de grabación",
        description: "Producción de audio y podcasts",
        color: "from-pink-500 to-rose-500",
      },
    ],
    hero: {
      title: "Centro de Juventud Tetuán",
      subtitle: "Un espacio para aprender, crear y crecer",
      description: "Descubre nuestras actividades y programas dedicados a los jóvenes"
    }
  }
}

const inscriptionTranslations = {
  fr: {
    title: "Formulaire d'Inscription",
    firstName: "Prénom",
    lastName: "Nom de famille",
    birthDate: "Date de naissance",
    idNumber: "Numéro de CIN",
    address: "Adresse",
    education: "Niveau d'études",
    phone: "Téléphone",
    email: "Email",
    activities: {
      title: "Je souhaite participer aux activités suivantes:",
      gaming: "Jeux électroniques",
      art: "Activités artistiques",
      coworking: "Coworking",
      recording: "Studio d'enregistrement",
      audioVisual: "Audiovisuel",
      education: "Animation éducative (pour enfants)"
    },
    submit: "Soumettre la demande"
  },
  ar: {
    title: "استمارة طلب الانخراط",
    firstName: "الاسم الشخصي",
    lastName: "الاسم العائلي",
    birthDate: "تاريخ الازدياد",
    idNumber: "رقم بطاقة التعريف الوطنية",
    address: "العنوان",
    education: "المستوى الدراسي",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    activities: {
      title: "أرغب في الاستفادة من الأنشطة التالية:",
      gaming: "الألعاب الإلكترونية",
      art: "الأنشطة الفنية",
      coworking: "العمل المشترك",
      recording: "استوديو التسجيل",
      audioVisual: "السمعي البصري",
      education: "التنشيط التربوي (للأطفال)"
    },
    submit: "إرسال الطلب"
  },
  es: {
    title: "Formulario de Inscripción",
    firstName: "Nombre",
    lastName: "Apellido",
    birthDate: "Fecha de nacimiento",
    idNumber: "Número de CIN",
    address: "Dirección",
    education: "Nivel de estudios",
    phone: "Teléfono",
    email: "Correo electrónico",
    activities: {
      title: "Deseo participar en las siguientes actividades:",
      gaming: "Juegos electrónicos",
      art: "Actividades artísticas",
      coworking: "Coworking",
      recording: "Estudio de grabación",
      audioVisual: "Audiovisual",
      education: "Animación educativa (para niños)"
    },
    submit: "Enviar solicitud"
  }
}

export function useTranslations() {
  const { language } = useLanguage()
  return {
    inscriptionTranslations: inscriptionTranslations[language] || inscriptionTranslations['fr'],
    language
  }
}