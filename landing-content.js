const topicDetails = [
['Comunicar con más seguridad','¿Quieres comunicar con más seguridad o fortalecer las presentaciones de tu equipo?',['Voz, presencia y claridad al comunicar.','Presentaciones, storytelling y conexión con una audiencia.','Facilitación de conversaciones y experiencias.']],
['Liderar y colaborar mejor','¿Necesitas movilizar a tu equipo o abordar conversaciones difíciles?',['Orientar y acompañar a otras personas.','Conversaciones y colaboración en equipo.','Coordinación hacia objetivos compartidos.']],
['Fortalecer el liderazgo de mujeres','¿Buscas más proyección o quieres impulsar el desarrollo de mujeres en tu organización?',['Participación y confianza.','Visibilidad y proyección profesional.','Herramientas para el desarrollo de mujeres.']],
['Construir entornos más inclusivos','¿Hay barreras que dificultan la participación en tu equipo?',['Reconocer distintas experiencias y perspectivas.','Identificar barreras de participación.','Prácticas para favorecer la inclusión.']],
['Cuidar tu bienestar','¿Buscas fortalecer recursos personales o abrir espacios de bienestar para las personas de tu organización?',['Reconocer necesidades y recursos personales.','Explorar prácticas de bienestar.','Conectar reflexión con acciones cotidianas.']],
['Empezar a trabajar con IA','¿Quieres incorporar herramientas digitales y no sabes por dónde empezar?',['Comprender tecnologías desde situaciones reales.','Explorar aplicaciones de herramientas digitales e IA.','Desarrollar confianza para su adopción.']],
['Activar nuevas ideas','¿Sientes que siempre llegas a las mismas soluciones?',['Explorar problemas desde otras perspectivas.','Generar y experimentar con ideas.','Convertir posibilidades en propuestas de valor.']],
['Dar forma a tu proyecto','¿Quieres dar forma a una idea propia o a una iniciativa de tu organización?',['Dar dirección a una iniciativa.','Comprender a quién busca servir.','Ordenar una propuesta y avanzar en su implementación.']],
['Aprender una nueva habilidad','¿Quieres que lo aprendido se traduzca en práctica?',['Adquirir y entrenar capacidades.','Aprender mediante ejercicios y aplicación.','Transferir lo aprendido a situaciones reales.']],
['Encontrar tu siguiente paso','¿Buscas claridad para una decisión propia o un espacio de reflexión sobre motivaciones y objetivos compartidos?',['Explorar motivaciones, valores y aspiraciones.','Conectar lo que importa con decisiones.','Definir próximos pasos personales o profesionales.']]
];
// Orientación editorial basada en desafíos y objetivos de Arquitectura.
// Sugiere encaje por necesidad; no declara productos vigentes ni resultados garantizados.
const topicGuidance = [
{ideal:'Personas que necesitan presentar ideas y equipos que quieren mejorar sus presentaciones o facilitación.',goal:'Fortalecer la voz, la presencia y la capacidad de conectar con una audiencia.',example:'Presentar un proyecto o facilitar una reunión con una estructura más clara.'},
{ideal:'Líderes y equipos que necesitan coordinarse, colaborar o abordar conversaciones difíciles.',goal:'Mejorar las conversaciones y la colaboración para avanzar hacia objetivos compartidos.',example:'Preparar una conversación difícil y acordar próximos pasos con el equipo.'},
{ideal:'Mujeres que buscan confianza y proyección, y organizaciones que quieren impulsar su desarrollo.',goal:'Fortalecer la participación, visibilidad y proyección personal y profesional de las mujeres.',example:'Identificar una oportunidad de participación y preparar cómo comunicar tu aporte.'},
{ideal:'Organizaciones y equipos que quieren reconocer barreras y ampliar la participación.',goal:'Promover entornos donde más personas puedan contribuir y desarrollarse.',example:'Revisar una práctica del equipo e identificar barreras que dificultan participar.'},
{ideal:'Personas que buscan fortalecer hábitos y recursos personales; organizaciones interesadas en espacios de bienestar para sus participantes.',goal:'Reconocer necesidades y convertirlas en acciones cotidianas de bienestar.',example:'Elegir una práctica personal y definir cómo incorporarla a tu rutina.'},
{ideal:'Personas y equipos que necesitan empezar a incorporar herramientas digitales e IA a su trabajo.',goal:'Desarrollar confianza y capacidades para conectar la tecnología con necesidades reales.',example:'Identificar una tarea concreta en la que explorar el uso de una herramienta digital.'},
{ideal:'Personas y equipos que necesitan nuevas perspectivas para resolver un problema o desarrollar una idea.',goal:'Ampliar perspectivas y llevar ideas desde la exploración hacia la acción.',example:'Explorar alternativas a un problema y elegir una idea para poner a prueba.'},
{ideal:'Emprendedores y personas con una iniciativa propia; organizaciones y equipos que buscan estructurar un proyecto.',goal:'Dar dirección a un proyecto y ordenar su propuesta y próximos pasos.',example:'Aclarar a quién busca servir tu idea y qué necesitas validar primero.'},
{ideal:'Personas que quieren entrenar una habilidad y equipos que necesitan aplicar nuevas capacidades.',goal:'Aprender haciendo y transferir lo aprendido a situaciones reales.',example:'Practicar una habilidad con una situación de tu contexto y definir dónde aplicarla.'},
{ideal:'Personas en una etapa de cambio; organizaciones que buscan espacios de reflexión sobre motivaciones, valores y objetivos.',goal:'Conectar motivaciones y valores con decisiones personales o profesionales.',example:'Explorar una decisión pendiente y definir un próximo paso coherente con lo que te importa.'}
];
const formatGuidance = [
  {
    "ideal": "Empresas que organizan una jornada, encuentro de líderes o evento interno; comunidades y personas que quieren conocer un tema antes de profundizar.",
    "how": "Un relator o especialista explica el tema, comparte ejemplos y propone preguntas para conectarlo con la realidad de la audiencia. La participación se acuerda según el evento.",
    "scope": "Una intervención puntual para introducir un tema."
  },
  {
    "ideal": "Equipos que necesitan practicar presentaciones, conversaciones o formas de colaborar; personas que quieren entrenar una habilidad con ejercicios y retroalimentación.",
    "how": "La facilitación propone un desafío, explica una herramienta y guía su práctica. Los participantes ensayan, comparten lo trabajado y reciben retroalimentación para ajustar su manera de hacerlo.",
    "scope": "Una sesión o jornada centrada en la práctica."
  },
  {
    "ideal": "Organizaciones que quieren acompañar a sus líderes o desarrollar una habilidad en sus equipos; grupos que necesitan practicar y revisar avances durante varias sesiones.",
    "how": "Primero se define la habilidad y en qué situaciones se usará. Cada sesión aborda una parte del desafío: se aprende una herramienta, se practica y se acuerda una aplicación. En el siguiente encuentro se revisa lo intentado y se ajusta.",
    "scope": "Varias sesiones conectadas por un objetivo compartido."
  },
  {
    "ideal": "Personas que asumen un nuevo rol, preparan una decisión profesional o impulsan un proyecto; organizaciones que buscan acompañamiento para integrantes de sus equipos.",
    "how": "La persona trae una situación o pregunta concreta. El mentor o mentora comparte su experiencia, ayuda a evaluar alternativas y entrega retroalimentación. Juntos acuerdan próximos pasos y, si el proceso lo contempla, revisan avances.",
    "scope": "Acompañamiento enfocado en una persona y su objetivo."
  }
];
const formatValue = [
  {
    "goal": "Dar a la audiencia una primera comprensión del tema y preguntas para conversar sobre él.",
    "design": "Tema, audiencia, duración, relator y espacio de participación.",
    "example": "Inclusión en un equipo: el relator muestra situaciones donde alguien queda fuera de una conversación y propone preguntas para reconocer esas barreras en el trabajo cotidiano."
  },
  {
    "goal": "Que los participantes prueben una herramienta, reciban retroalimentación y sepan dónde aplicarla.",
    "design": "Habilidad a practicar, ejercicios, tamaño del grupo y tiempo para retroalimentación.",
    "example": "Presentaciones: cada participante lleva una idea, organiza su mensaje, la presenta al grupo y vuelve a ensayarla después de recibir comentarios."
  },
  {
    "goal": "Trabajar una habilidad con continuidad: practicar, probarla en situaciones reales y revisar lo que necesita mejorar.",
    "design": "Objetivo, participantes, secuencia de sesiones, actividades entre encuentros y forma de revisar avances.",
    "example": "Comunicación para líderes: un encuentro para estructurar mensajes, otro para ensayar conversaciones difíciles y otro para revisar cómo se aplicaron en el equipo. La secuencia se diseña según la necesidad."
  },
  {
    "goal": "Ordenar una situación, evaluar opciones con una mirada experimentada y definir acciones para avanzar.",
    "design": "Objetivo, perfil del mentor, frecuencia de encuentros y acuerdos de seguimiento.",
    "example": "Nuevo rol de liderazgo: la persona revisa con su mentor cómo organizar sus primeras conversaciones con el equipo, prepara una de ellas y después analiza qué funcionó y qué cambiaría."
  }
];
