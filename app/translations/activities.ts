export const translations = {
  ar: {
    pageTitle: "طور مهاراتك",
    pageSubtitle: "برامجنا",
    pageDescription: "برامج متنوعة مصممة لتلبية احتياجات شباب اليوم. التدريب المهني والتعبير الإبداعي والتطوير الشخصي.",
    categories: {
      technical: {
        title: "التدريب التقني",
        description: "معلوميات، برامج مكتبية، وسائط متعددة"
      },
      artistic: {
        title: "التعبير الفني",
        description: "مسرح، تصوير، إبداع"
      },
      social: {
        title: "التنمية الاجتماعية",
        description: "العمل الجماعي، القيادة"
      }
    },
    cta: {
      join: "انضم الآن",
      learnMore: "اعرف المزيد",
      register: "سجل الآن",
    },
    activityInfo: {
      duration: "المدة",
      schedule: "المواعيد",
      audience: "الجمهور"
    }
  },
  fr: {
    pageTitle: "Développez vos compétences",
    pageSubtitle: "Nos programmes",
    pageDescription: "Des programmes diversifiés conçus pour répondre aux besoins des jeunes d'aujourd'hui. Formation professionnelle, expression créative et développement personnel.",
    categories: {
      technical: {
        title: "Formation Technique",
        description: "Informatique, bureautique, multimédia"
      },
      artistic: {
        title: "Expression Artistique",
        description: "Théâtre, photographie, création"
      },
      social: {
        title: "Développement Social",
        description: "Travail d'équipe, leadership"
      }
    },
    cta: {
      join: "Rejoindre",
      learnMore: "En savoir plus",
      register: "Inscrivez-vous maintenant"
    },
    activityInfo: {
      duration: "Durée",
      schedule: "Horaires",
      audience: "Public"
    }
  },
  es: {
    pageTitle: "Desarrolla tus habilidades",
    pageSubtitle: "Nuestros programas",
    pageDescription: "Programas diversos diseñados para satisfacer las necesidades de los jóvenes de hoy. Formación profesional, expresión creativa y desarrollo personal.",
    categories: {
      technical: {
        title: "Formación Técnica",
        description: "Informática, ofimática, multimedia"
      },
      artistic: {
        title: "Expresión Artística",
        description: "Teatro, fotografía, creación"
      },
      social: {
        title: "Desarrollo Social",
        description: "Trabajo en equipo, liderazgo"
      }
    },
    cta: {
      join: "Únete",
      learnMore: "Saber más",
      register: "Inscríbete ahora"
    },
    activityInfo: {
      duration: "Duración",
      schedule: "Horarios",
      audience: "Público"
    }
  }
}

export const activities = {
  fr: {
    hero: {
      title: "Nos Activités",
      subtitle: "Programmes et Formations"
    },
    categories: {
      technical: "Formation Technique",
      artistic: "Expression Artistique",
      sports: "Activités Sportives",
      education: "Soutien Éducatif"
    },
    list: [
      {
        icon: 'Gamepad2',
        title: "Jeux électroniques",
        description: "Un espace moderne dédié aux jeux vidéo et à l'e-sport. Équipé des dernières consoles et jeux, cet espace permet aux jeunes de développer leurs réflexes, leur esprit stratégique et de participer à des tournois.",
        features: ["PlayStation 5", "Xbox Series X", "Tournois e-sport", "Gaming PCs"],
        duration: "Accès libre",
        schedule: "Lun-Sam 14h-20h",
        audience: "12-25 ans",
        color: "from-purple-500 to-pink-500",
        image: "/gaming-room.JPG"
      },
      {
        icon: 'Theater',
        title: "Activités artistiques",
        description: "Un espace créatif pour l'expression artistique sous toutes ses formes : théâtre, peinture, musique et danse. Un lieu où les jeunes peuvent développer leur créativité et s'exprimer librement.",
        features: ["Théâtre", "Arts plastiques", "Musique", "Expression corporelle"],
        duration: "Selon l'activité",
        schedule: "Mer-Sam 15h-19h",
        audience: "Tous niveaux",
        color: "from-indigo-500 to-purple-500",
        image: "/art.JPG"
      },
      {
        icon: 'Users',
        title: "Coworking",
        description: "Un espace de travail collaboratif moderne et équipé, idéal pour étudier, travailler sur des projets ou organiser des réunions. Accès à internet haut débit et équipements de bureau.",
        features: ["WiFi haut débit", "Espaces calmes", "Salles de réunion", "Équipement bureau"],
        duration: "Flexible",
        schedule: "Lun-Ven 9h-18h",
        audience: "Étudiants & Professionnels",
        color: "from-blue-500 to-cyan-500",
        image: "/coworking.JPG"
      },
      {
        icon: 'Mic',
        title: "Studio d'enregistrement",
        description: "Un studio professionnel pour l'enregistrement audio, la production musicale et la création de podcasts. Équipé de matériel de haute qualité pour des productions professionnelles.",
        features: ["Équipement pro", "Cabine isolée", "Mixage audio", "Production musicale"],
        duration: "Sur réservation",
        schedule: "Sur rendez-vous",
        audience: "Créateurs de contenu",
        color: "from-pink-500 to-rose-500",
        image: "/studio.JPG"
      },
      {
        icon: 'Camera',
        title: "Audiovisuel",
        description: "Un département dédié à la production audiovisuelle, offrant des équipements et des formations en photographie, vidéo et montage. Idéal pour les créateurs de contenu digital.",
        features: ["Caméras pro", "Montage vidéo", "Photo studio", "Éclairage pro"],
        duration: "Variable",
        schedule: "Mar-Sam 10h-18h",
        audience: "Tous niveaux",
        color: "from-green-500 to-emerald-500",
        image: "/audiovisual.JPG"
      },
      {
        icon: 'Target',
        title: "Animation éducative",
        description: "Programme spécialement conçu pour les enfants, combinant apprentissage et divertissement. Activités pédagogiques, ateliers créatifs et développement personnel adaptés aux plus jeunes.",
        features: ["Activités ludiques", "Soutien scolaire", "Ateliers créatifs", "Développement personnel"],
        duration: "Selon programme",
        schedule: "Mer & Sam 14h-17h",
        audience: "6-12 ans",
        color: "from-orange-500 to-red-500",
        image: "/education.JPG"
      }
    ]
  },
  ar: {
    hero: {
      title: "أنشطتنا",
      subtitle: "البرامج والتكوينات"
    },
    categories: {
      technical: "التكوين التقني",
      artistic: "التعبير الفني",
      sports: "الأنشطة الرياضية",
      education: "الدعم التربوي"
    },
    list: [
      {
        icon: 'Gamepad2',
        title: "الألعاب الإلكترونية",
        description: "مساحة حديثة مخصصة لألعاب الفيديو والرياضات الإلكترونية. مجهزة بأحدث الأجهزة والألعاب، تتيح للشباب تطوير ردود أفعالهم وروحهم الاستراتيجية والمشاركة في البطولات.",
        features: ["بلايستيشن 5", "إكس بوكس سيريس X", "بطولات الرياضات الإلكترونية", "أجهزة كمبيوتر للألعاب"],
        duration: "دخول حر",
        schedule: "الإثنين-السبت 14:00-20:00",
        audience: "12-25 سنة",
        color: "from-purple-500 to-pink-500",
        image: "/gaming-room.JPG"
      },
      {
        icon: 'Theater',
        title: "الأنشطة الفنية",
        description: "مساحة إبداعية للتعبير الفني بجميع أشكاله: المسرح، الرسم، الموسيقى والرقص. مكان يمكن للشباب فيه تطوير إبداعهم والتعبير بحرية.",
        features: ["مسرح", "فنون تشكيلية", "موسيقى", "تعبير جسدي"],
        duration: "حسب النشاط",
        schedule: "الأربعاء-السبت 15:00-19:00",
        audience: "جميع المستويات",
        color: "from-indigo-500 to-purple-500",
        image: "/art.JPG"
      },
      {
        icon: 'Users',
        title: "كووركينج (مساحة عمل مشتركة)",
        description: "مساحة عمل تعاونية حديثة ومجهزة، مثالية للدراسة أو العمل على المشاريع أو تنظيم الاجتماعات. توفر إنترنت عالي السرعة ومعدات مكتبية.",
        features: ["واي فاي عالي السرعة", "مساحات هادئة", "قاعات اجتماعات", "معدات مكتبية"],
        duration: "مرن",
        schedule: "الإثنين-الجمعة 9:00-18:00",
        audience: "طلاب ومحترفون",
        color: "from-blue-500 to-cyan-500",
        image: "/coworking.JPG"
      },
      {
        icon: 'Mic',
        title: "استوديو التسجيل",
        description: "استوديو احترافي لتسجيل الصوت، إنتاج الموسيقى وإنشاء البودكاست. مجهز بمعدات عالية الجودة لإنتاجات احترافية.",
        features: ["معدات احترافية", "غرفة معزولة", "مزج صوتي", "إنتاج موسيقي"],
        duration: "بالحجز",
        schedule: "حسب الموعد",
        audience: "صناع المحتوى",
        color: "from-pink-500 to-rose-500",
        image: "/studio.JPG"
      },
      {
        icon: 'Camera',
        title: "السمعي البصري",
        description: "قسم مخصص للإنتاج السمعي البصري، يوفر معدات وتدريبات في التصوير الفوتوغرافي، الفيديو والمونتاج. مثالي لصناع المحتوى الرقمي.",
        features: ["كاميرات احترافية", "مونتاج فيديو", "استوديو تصوير", "إضاءة احترافية"],
        duration: "متغير",
        schedule: "الثلاثاء-السبت 10:00-18:00",
        audience: "جميع المستويات",
        color: "from-green-500 to-emerald-500",
        image: "/audiovisual.JPG"
      },
      {
        icon: 'Target',
        title: "أنشطة تربوية",
        description: "برنامج مصمم خصيصًا للأطفال، يجمع بين التعلم والترفيه. أنشطة تربوية، ورشات إبداعية وتنمية شخصية مناسبة للصغار.",
        features: ["أنشطة ترفيهية", "دعم مدرسي", "ورشات إبداعية", "تنمية شخصية"],
        duration: "حسب البرنامج",
        schedule: "الأربعاء والسبت 14:00-17:00",
        audience: "6-12 سنة",
        color: "from-orange-500 to-red-500",
        image: "/education.JPG"
      }
    ]
  },
  es: {
    hero: {
      title: "Nuestras Actividades",
      subtitle: "Programas y Formaciones"
    },
    categories: {
      technical: "Formación Técnica",
      artistic: "Expresión Artística",
      sports: "Actividades Deportivas",
      education: "Apoyo Educativo"
    },
    list: [
      {
        icon: 'Gamepad2',
        title: "Juegos electrónicos",
        description: "Un espacio moderno dedicado a los videojuegos y los e-sports. Equipado con las últimas consolas y juegos, este espacio permite a los jóvenes desarrollar sus reflejos, su espíritu estratégico y participar en torneos.",
        features: ["PlayStation 5", "Xbox Series X", "Torneos e-sport", "Gaming PCs"],
        duration: "Acceso libre",
        schedule: "Lun-Sáb 14h-20h",
        audience: "12-25 años",
        color: "from-purple-500 to-pink-500",
        image: "/gaming-room.JPG"
      },
      {
        icon: 'Theater',
        title: "Actividades artísticas",
        description: "Un espacio creativo para la expresión artística en todas sus formas: teatro, pintura, música y danza. Un lugar donde los jóvenes pueden desarrollar su creatividad y expresarse libremente.",
        features: ["Teatro", "Artes plásticas", "Música", "Expresión corporal"],
        duration: "Según la actividad",
        schedule: "Mié-Sáb 15h-19h",
        audience: "Todos los niveles",
        color: "from-indigo-500 to-purple-500",
        image: "/art.JPG"
      },
      {
        icon: 'Users',
        title: "Coworking",
        description: "Un espacio de trabajo colaborativo moderno y equipado, ideal para estudiar, trabajar en proyectos u organizar reuniones. Acceso a internet de alta velocidad y equipos de oficina.",
        features: ["WiFi de alta velocidad", "Espacios tranquilos", "Salas de reuniones", "Equipos de oficina"],
        duration: "Flexible",
        schedule: "Lun-Vie 9h-18h",
        audience: "Estudiantes y profesionales",
        color: "from-blue-500 to-cyan-500",
        image: "/coworking.JPG"
      },
      {
        icon: 'Mic',
        title: "Estudio de grabación",
        description: "Un estudio profesional para grabación de audio, producción musical y creación de podcasts. Equipado con material de alta calidad para producciones profesionales.",
        features: ["Equipo pro", "Cabina aislada", "Mezcla de audio", "Producción musical"],
        duration: "Con reserva",
        schedule: "Con cita previa",
        audience: "Creadores de contenido",
        color: "from-pink-500 to-rose-500",
        image: "/studio.JPG"
      },
      {
        icon: 'Camera',
        title: "Audiovisual",
        description: "Un departamento dedicado a la producción audiovisual, que ofrece equipos y formación en fotografía, vídeo y edición. Ideal para creadores de contenido digital.",
        features: ["Cámaras pro", "Edición de vídeo", "Estudio fotográfico", "Iluminación pro"],
        duration: "Variable",
        schedule: "Mar-Sáb 10h-18h",
        audience: "Todos los niveles",
        color: "from-green-500 to-emerald-500",
        image: "/audiovisual.JPG"
      },
      {
        icon: 'Target',
        title: "Animación educativa",
        description: "Programa especialmente diseñado para niños, combinando aprendizaje y entretenimiento. Actividades pedagógicas, talleres creativos y desarrollo personal adaptados a los más jóvenes.",
        features: ["Actividades lúdicas", "Apoyo escolar", "Talleres creativos", "Desarrollo personal"],
        duration: "Según el programa",
        schedule: "Mié y Sáb 14h-17h",
        audience: "6-12 años",
        color: "from-orange-500 to-red-500",
        image: "/education.JPG"
      }
    ]
  }
}