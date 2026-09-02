import { useEffect, useState } from 'react'
import './App.css'

const preguntasMate = [
  {
    pregunta: '¿Cuánto es 12 × 4?',
    opciones: ['36', '48', '52', '64'],
    correcta: '48',
    tema: 'Operaciones',
  },
 {
  pregunta: '¿Cuánto es 3/4 de 20?',
  opciones: ['5', '10', '15', '18'],
  correcta: '15',
  tema: 'Fracciones',
},
  {
    pregunta: 'Resuelve: 3x + 5 = 20',
    opciones: ['3', '5', '8', '15'],
    correcta: '5',
    tema: 'Ecuaciones',
  },
  {
    pregunta: '¿Cuál es el área de un triángulo de base 8 y altura 6?',
    opciones: ['14', '24', '28', '48'],
    correcta: '24',
    tema: 'Geometría',
  },
  {
    pregunta: 'Si x² = 49 y x es positivo, ¿cuánto vale x?',
    opciones: ['5', '6', '7', '8'],
    correcta: '7',
    tema: 'Potencias y raíces',
  },
]
const preguntasMiniGeometria = [
  {
    pregunta: '¿Cuál es el área de un cuadrado de lado 5 cm?',
    opciones: ['10 cm²', '20 cm²', '25 cm²', '30 cm²'],
    correcta: '25 cm²',
  },
  {
    pregunta: 'Un rectángulo tiene base 7 cm y altura 4 cm. ¿Cuál es su área?',
    opciones: ['11 cm²', '22 cm²', '28 cm²', '35 cm²'],
    correcta: '28 cm²',
  },
  {
    pregunta: 'Un triángulo tiene base 10 cm y altura 6 cm. ¿Cuál es su área?',
    opciones: ['16 cm²', '30 cm²', '60 cm²', '80 cm²'],
    correcta: '30 cm²',
  },
]
const preguntasIngles = [
  {
    tema: 'Present Simple',
    pregunta: 'Choose the correct option: She ___ to school every day.',
    opciones: ['go', 'went', 'goes', 'going'],
    correcta: 'goes',
  },
  {
    tema: 'Present Continuous',
    pregunta: 'Choose the correct option: They ___ football right now.',
    opciones: ['are playing', 'played', 'play', 'plays'],
    correcta: 'are playing',
  },
  {
    tema: 'Past Simple',
    pregunta: 'Choose the correct option: Yesterday, I ___ my grandmother.',
    opciones: ['visit', 'visits', 'visiting', 'visited'],
    correcta: 'visited',
  },
  {
    tema: 'Comparatives',
    pregunta: 'Choose the correct option: A car is usually ___ than a bicycle.',
    opciones: ['faster', 'fast', 'fastest', 'more fast'],
    correcta: 'faster',
  },
  {
    tema: 'Present Perfect',
    pregunta: 'Choose the correct option: I ___ my homework already.',
    opciones: ['finish', 'finished', 'have finished', 'am finishing'],
    correcta: 'have finished',
  },
]
const preguntasComunicacion = [
  {
    tema: 'Comprensión lectora',
    pregunta: '¿Cuál es la idea principal de un texto?',
    opciones: [
      'El detalle menos importante',
      'La información central que el texto desarrolla',
      'La primera palabra del texto',
    ],
    correcta: 'La información central que el texto desarrolla',
  },
  {
    tema: 'Tipos de texto',
    pregunta: '¿Qué tipo de texto busca contar una historia?',
    opciones: [
      'Texto narrativo',
      'Texto instructivo',
      'Texto argumentativo',
    ],
    correcta: 'Texto narrativo',
  },
  {
    tema: 'Ortografía',
    pregunta: '¿Cuál de estas palabras está escrita correctamente?',
    opciones: [
      'Havía',
      'Había',
      'Avía',
    ],
    correcta: 'Había',
  },
  {
    tema: 'Gramática',
    pregunta: '¿Cuál es el verbo en la oración “María estudia por la tarde”?',
    opciones: [
      'María',
      'estudia',
      'tarde',
    ],
    correcta: 'estudia',
  },
  {
    tema: 'Producción de textos',
    pregunta: '¿Qué debemos hacer antes de redactar un texto?',
    opciones: [
      'Planificar las ideas',
      'Escribir sin pensar',
      'Eliminar el título',
    ],
    correcta: 'Planificar las ideas',
  },
]
 const preguntasCiencias = [
  {
    tema: 'Seres vivos',
    pregunta: '¿Cuál es una característica de todos los seres vivos?',
    opciones: [
      'Pueden volar',
      'Realizan funciones vitales',
      'Viven únicamente en la tierra',
    ],
    correcta: 'Realizan funciones vitales',
  },
  {
    tema: 'Cuerpo humano',
    pregunta: '¿Qué órgano se encarga principalmente de bombear la sangre?',
    opciones: [
      'Corazón',
      'Estómago',
      'Pulmón',
    ],
    correcta: 'Corazón',
  },
  {
    tema: 'Materia y energía',
    pregunta: '¿Cuál de estos es un estado de la materia?',
    opciones: [
      'Energía',
      'Temperatura',
      'Sólido',
    ],
    correcta: 'Sólido',
  },
  {
    tema: 'Ecosistemas',
    pregunta: '¿Qué necesitan los productores para realizar la fotosíntesis?',
    opciones: [
      'Plástico',
      'Luz solar',
      'Oxígeno únicamente',
    ],
    correcta: 'Luz solar',
  },
  {
    tema: 'Tierra y universo',
    pregunta: '¿Qué movimiento de la Tierra produce el día y la noche?',
    opciones: [
      'Traslación',
      'Revolución lunar',
      'Rotación',
    ],
    correcta: 'Rotación',
  },
]
const preguntasHistoria = [
  {
    tema: 'Civilizaciones antiguas',
    pregunta: '¿Qué civilización construyó las pirámides de Giza?',
    opciones: [
      'Romana',
      'Egipcia',
      'Inca',
    ],
    correcta: 'Egipcia',
  },

  {
    tema: 'Edad Media',
    pregunta: '¿Qué sistema fue característico de gran parte de la Edad Media europea?',
    opciones: [
      'Capitalismo industrial',
      'Democracia moderna',
      'Feudalismo',
    ],
    correcta: 'Feudalismo',
  },

  {
    tema: 'Edad Moderna',
    pregunta: '¿Qué proceso histórico comenzó con la llegada de los europeos a América?',
    opciones: [
      'Expansión y colonización europea',
      'Primera Guerra Mundial',
      'Revolución Industrial',
    ],
    correcta: 'Expansión y colonización europea',
  },

  {
    tema: 'Independencia del Perú',
    pregunta: '¿En qué año se proclamó la Independencia del Perú?',
    opciones: [
      '1780',
      '1821',
      '1879',
    ],
    correcta: '1821',
  },

  {
    tema: 'Perú republicano',
    pregunta: '¿Qué etapa comenzó en el Perú después de la Independencia?',
    opciones: [
      'El Virreinato',
      'El Imperio incaico',
      'La República',
    ],
    correcta: 'La República',
  },
]
const preguntasGeografia = [
  {
    tema: 'Relieve',
    pregunta: '¿Qué es el relieve?',
    opciones: [
      'La cantidad de habitantes',
      'El estado del tiempo',
      'Las formas de la superficie terrestre',
    ],
    correcta: 'Las formas de la superficie terrestre',
  },

  {
    tema: 'Clima',
    pregunta: '¿Qué factor influye en el clima de una región?',
    opciones: [
      'La altitud',
      'La cantidad de edificios',
      'El nombre de la ciudad',
    ],
    correcta: 'La altitud',
  },

  {
    tema: 'Hidrografía',
    pregunta: '¿Qué estudia principalmente la hidrografía?',
    opciones: [
      'Las actividades económicas',
      'Los cuerpos y corrientes de agua',
      'Las lenguas de una población',
    ],
    correcta: 'Los cuerpos y corrientes de agua',
  },

  {
    tema: 'Población',
    pregunta: '¿Qué indica la densidad de población?',
    opciones: [
      'La temperatura promedio',
      'La cantidad de habitantes por unidad de superficie',
      'La altura de las montañas',
    ],
    correcta: 'La cantidad de habitantes por unidad de superficie',
  },

  {
    tema: 'Regiones del Perú',
    pregunta: '¿Cuáles son las tres regiones geográficas tradicionales del Perú?',
    opciones: [
      'Norte, Centro y Sur',
      'Océano, Valle y Desierto',
      'Costa, Sierra y Selva',
    ],
    correcta: 'Costa, Sierra y Selva',
  },
]
const preguntasDPSC = [
  {
    tema: 'Identidad personal',
    pregunta: '¿Qué forma parte de nuestra identidad personal?',
    opciones: [
      'Solo nuestra edad',
      'Nuestros valores, características y experiencias',
      'Únicamente nuestra apariencia física',
    ],
    correcta: 'Nuestros valores, características y experiencias',
  },

  {
    tema: 'Emociones y autoestima',
    pregunta: '¿Qué significa tener una autoestima saludable?',
    opciones: [
      'Pensar que somos mejores que todos',
      'No aceptar nunca nuestros errores',
      'Reconocer nuestro valor, fortalezas y aspectos por mejorar',
    ],
    correcta: 'Reconocer nuestro valor, fortalezas y aspectos por mejorar',
  },

  {
    tema: 'Convivencia',
    pregunta: '¿Qué acción favorece una buena convivencia?',
    opciones: [
      'Resolver los conflictos mediante el diálogo',
      'Responder siempre con agresividad',
      'Ignorar las opiniones de los demás',
    ],
    correcta: 'Resolver los conflictos mediante el diálogo',
  },

  {
    tema: 'Derechos y deberes',
    pregunta: '¿Cuál de estas afirmaciones es correcta?',
    opciones: [
      'Solo los adultos tienen derechos',
      'Tenemos derechos y también deberes',
      'Los deberes no son importantes para la sociedad',
    ],
    correcta: 'Tenemos derechos y también deberes',
  },

  {
    tema: 'Ciudadanía y participación',
    pregunta: '¿Cuál es un ejemplo de participación ciudadana?',
    opciones: [
      'Evitar todos los problemas de la comunidad',
      'No respetar las normas comunes',
      'Participar responsablemente en decisiones de la comunidad',
    ],
    correcta: 'Participar responsablemente en decisiones de la comunidad',
  },
]
const temasMate = [
  'Operaciones',
  'Fracciones',
  'Ecuaciones',
  'Geometría',
  'Potencias y raíces',
]
const temasIngles = [
  'Present Simple',
  'Present Continuous',
  'Past Simple',
  'Comparatives',
  'Present Perfect',
]
const temasComunicacion = [
  'Comprensión lectora',
  'Tipos de texto',
  'Ortografía',
  'Gramática',
  'Producción de textos',
]
const temasCiencias = [
  'Seres vivos',
  'Cuerpo humano',
  'Materia y energía',
  'Ecosistemas',
  'Tierra y universo',
]
const temasHistoria = [
  'Civilizaciones antiguas',
  'Edad Media',
  'Edad Moderna',
  'Independencia del Perú',
  'Perú republicano',
]
const temasGeografia = [
  'Relieve',
  'Clima',
  'Hidrografía',
  'Población',
  'Regiones del Perú',
]
const temasDPSC = [
  'Identidad personal',
  'Emociones y autoestima',
  'Convivencia',
  'Derechos y deberes',
  'Ciudadanía y participación',
]
function App() {
  const [pantalla, setPantalla] = useState('inicio')
    const volverInicio = () => {
    setPantalla('inicio')
  }
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [aciertos, setAciertos] = useState(0)
const [resultadosMate, setResultadosMate] = useState([])
const [resultadosComunicacion, setResultadosComunicacion] = useState([])
const [resultadosCiencias, setResultadosCiencias] = useState([])
const [preguntaMini, setPreguntaMini] = useState(0)
const [aciertosMini, setAciertosMini] = useState(0)
const [temasDominados, setTemasDominados] = useState([])
const [temasDominadosIngles, setTemasDominadosIngles] = useState([])
const [temasDominadosComunicacion, setTemasDominadosComunicacion] = useState([])
const [temasDominadosCiencias, setTemasDominadosCiencias] = useState([])
const [temasDominadosHistoria, setTemasDominadosHistoria] = useState([])
const [resultadosHistoria, setResultadosHistoria] = useState([])
const [temasDominadosGeografia, setTemasDominadosGeografia] = useState([])
const [resultadosGeografia, setResultadosGeografia] = useState([])
const [temasDominadosDPSC, setTemasDominadosDPSC] = useState([])
const [resultadosDPSC, setResultadosDPSC] = useState([])
const siguienteTemaIngles = temasIngles.find(
  (tema) => !temasDominadosIngles.includes(tema)
)
const [recomendacionIA, setRecomendacionIA] = useState('')
const [cargandoIA, setCargandoIA] = useState(false)
const [temaRuta, setTemaRuta] = useState(null)
const [cursoActual, setCursoActual] = useState('Matemática')
const [preguntaIngles, setPreguntaIngles] = useState(0)
const [aciertosIngles, setAciertosIngles] = useState(0)
const [resultadosIngles, setResultadosIngles] = useState([])
const temasCursoActual =
  cursoActual === 'Inglés' ? temasIngles : temasMate
const siguienteTemaPendiente = temasMate.find(
  (tema) => !temasDominados.includes(tema)
)
const [leccionIA, setLeccionIA] = useState("")
const [cargandoLeccion, setCargandoLeccion] = useState(false)
const generarLeccionIA = async () => {
 if (cargandoLeccion) {
  return
}
    try {
      setCargandoLeccion(true)
      setLeccionIA('')

      const aciertosLeccion = resultadosMate.filter(
        (resultado) => resultado.acerto
      ).length

      const porcentajeLeccion = Math.round(
        (aciertosLeccion / resultadosMate.length) * 100
      )

      const fortalezasLeccion = [
        ...new Set(
          resultadosMate
            .filter((resultado) => resultado.acerto)
            .map((resultado) => resultado.tema)
        ),
      ]

      const reforzarLeccion = [
        ...new Set(
          resultadosMate
            .filter((resultado) => !resultado.acerto)
            .map((resultado) => resultado.tema)
        ),
      ]

      let nivelLeccion = 'Básico'

      if (porcentajeLeccion >= 80) {
        nivelLeccion = 'Avanzado'
      } else if (porcentajeLeccion >= 60) {
        nivelLeccion = 'Intermedio'
      }

      const respuesta = await fetch(
        'https://eduai-lgp2.onrender.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tema: temaRuta || 'Geometría',
            nivel: nivelLeccion,
            fortalezas: fortalezasLeccion,
            reforzar: reforzarLeccion,
          }),
        }
      )

      const datos = await respuesta.json()

      if (!respuesta.ok) {
        throw new Error(datos.error || 'Error al generar la lección')
      }

      setLeccionIA(datos.leccion)
      setPantalla('leccion-tema')
    } catch (error) {
  console.error('ERROR LECCIÓN:', error)

  setLeccionIA(
    'Usaremos una lección de respaldo mientras la IA vuelve a estar disponible.'
  )

  setPantalla('leccion-tema')
} finally {
      setCargandoLeccion(false)
    }
  }
useEffect(() => {
  if (pantalla !== 'resultado-mate' || resultadosMate.length === 0) {
    return
  }

  const generarAutomaticamente = async () => {
    const aciertosIA = resultadosMate.filter(
      (resultado) => resultado.acerto
    ).length

    const porcentajeIA = Math.round(
      (aciertosIA / resultadosMate.length) * 100
    )

    const fortalezasIA = [
      ...new Set(
        resultadosMate
          .filter((resultado) => resultado.acerto)
          .map((resultado) => resultado.tema)
      ),
    ]

    const reforzarIA = [
      ...new Set(
        resultadosMate
          .filter((resultado) => !resultado.acerto)
          .map((resultado) => resultado.tema)
      ),
    ]

    const temaPrioritarioIA =
      reforzarIA.length > 0 ? reforzarIA[0] : null

    let nivelIA = 'Básico'

    if (porcentajeIA >= 80) {
      nivelIA = 'Avanzado'
    } else if (porcentajeIA >= 60) {
      nivelIA = 'Intermedio'
    }

    try {
      setCargandoIA(true)
      setRecomendacionIA('')

      const respuesta = await fetch(
        'https://eduai-lgp2.onrender.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            porcentaje: porcentajeIA,
            nivel: nivelIA,
            fortalezas: fortalezasIA,
            reforzar: reforzarIA,
            temaPrioritario: temaPrioritarioIA,
          }),
        }
      )

      const datos = await respuesta.json()

      if (!respuesta.ok) {
        throw new Error(
          datos.error || 'Error al generar recomendación'
        )
      }

      setRecomendacionIA(datos.recomendacion)
    } catch (error) {
      console.error(error)
      setRecomendacionIA(
        'No pudimos generar la recomendación con IA en este momento.'
      )
    } finally {
      setCargandoIA(false)
    }
  }

  generarAutomaticamente()
}, [pantalla])
  const iniciarMate = () => {
    setPreguntaActual(0)
    setAciertos(0)
    setResultadosMate([])
    setPantalla('mate-diagnostico')
  }

  const responder = (respuesta) => {
  const esCorrecta =
    respuesta === preguntasMate[preguntaActual].correcta

  setResultadosMate((anteriores) => [
  ...anteriores,
  {
    pregunta: preguntasMate[preguntaActual].pregunta,
    tema: preguntasMate[preguntaActual].tema,
    respuesta,
    correcta: preguntasMate[preguntaActual].correcta,
    acerto: esCorrecta,
  },
])

  const nuevosAciertos = esCorrecta
    ? aciertos + 1
    : aciertos

  setAciertos(nuevosAciertos)

    if (preguntaActual < preguntasMate.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setPantalla('resultado-mate')
    }
  }

 if (pantalla === 'resultado-mate') {
  const porcentaje = Math.round(
    (aciertos / preguntasMate.length) * 100
  )

const fortalezas = [
  ...new Set(
    resultadosMate
      .filter((resultado) => resultado.acerto)
      .map((resultado) => resultado.tema)
  ),
]

  const reforzar = [
  ...new Set(
    resultadosMate
      .filter((resultado) => !resultado.acerto)
      .map((resultado) => resultado.tema)
  ),
]

const temaPrioritario =
  reforzar.length > 0 ? reforzar[0] : null

  let nivel = 'Básico'

  if (porcentaje >= 80) {
    nivel = 'Avanzado'
  } else if (porcentaje >= 60) {
    nivel = 'Intermedio'
  }
 return (
  <>
  <main className="diagnostic-page">

    <header className="navbar">
      <div className="brand">
        🏠 EDUAI
      </div>

      <div className="navbar-actions">
        <button
          className="login-button"
          onClick={volverInicio}
        >
          🏠 Inicio
        </button>

        <button
          className="login-button"
          onClick={() => setPantalla('mate-diagnostico')}
        >
          ← Volver
        </button>
      </div>
    </header>

    <section className="result-container">

  <div className="result-header">
    <span className="result-badge">Diagnóstico completado</span>

    <h1>Tu resultado de Matemática</h1>

    <div className="result-score">
      <strong>{porcentaje}%</strong>
      <span>{aciertos} de {preguntasMate.length} respuestas correctas</span>
    </div>

    <div className="result-level">
      Nivel estimado: <strong>{nivel}</strong>
    </div>
  </div>

  <div className="result-topics">
  <div>
    <h3>Tus fortalezas</h3>

    {fortalezas.length > 0 ? (
      fortalezas.map((tema) => (
        <p key={tema}>✅ {tema}</p>
      ))
    ) : (
      <p>Aún no se detectaron fortalezas claras.</p>
    )}
  </div>

  <div>
    <h3>Necesitas reforzar</h3>

   {reforzar.length > 0 ? (
  reforzar.map((tema) => (
    <button
      key={tema}
      className="topic-button"
      onClick={() => {
  setTemaRuta(tema)
  setPantalla('ruta')
}}
    >
      📚 {tema}
    </button>
  ))
) : (
  <p>¡Dominaste todos los temas evaluados!</p>
)}
  </div>
</div>
         <div className="result-message">
  <strong>✨ Recomendación personalizada</strong>
{cargandoIA && (
  <p className="ai-loading">
    ✨ Analizando tu diagnóstico...
  </p>
)}

{recomendacionIA && (
  <div className="ai-recommendation">
    <strong>🤖 Recomendación de IA</strong>
    <p>{recomendacionIA}</p>
  </div>
)}
  {temaPrioritario ? (
    <>
      <p>
        Según tu diagnóstico, tu nivel actual es <strong>{nivel}</strong>.
      </p>

      <p>
        Te recomendamos comenzar reforzando{' '}
        <strong>{temaPrioritario}</strong>, ya que es uno de los temas
        donde encontramos mayor oportunidad de mejora.
      </p>

      <button
  className="primary-button"
  onClick={() => {
    setTemaRuta(temaPrioritario)
    setPantalla('ruta')
  }}
>
  Comenzar mi ruta personalizada →
</button>
    </>
 ) : (
  <>
    <p>
      ¡Excelente! Dominaste todos los temas evaluados. Puedes continuar
      con contenidos de mayor dificultad.
    </p>

    <button
      className="primary-button"
      onClick={() => {
        setTemaRuta("Matemática");
        setPantalla("ruta");
      }}
    >
      Continuar con mi ruta →
    </button>
  </>
)}
</div>

          <button
            className="primary-button"
            onClick={iniciarMate}
          >
            Repetir diagnóstico
          </button>
        </section>
      </main>
</>
)
}
if (pantalla === 'ruta') {
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-mate')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">
            Ruta personalizada
          </span>

          <h1>Tu ruta de aprendizaje</h1>

          <p>
            Tema prioritario: <strong>{temaRuta}</strong>
          </p>
        </div>

        <div className="learning-path">
         <div
  className="path-step clickable"
  onClick={() => {
      setPantalla('repaso-tema')
  }}
>
  <span>1</span>

  <div>
    <strong>Repaso breve</strong>
    <p>
      Refuerza los conceptos esenciales de {temaRuta}.
    </p>
  </div>
</div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección personalizada</strong>
              <p>
                Aprende el tema paso a paso con ejemplos.
              </p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>
                Resuelve ejercicios para aplicar lo aprendido.
              </p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>
            <div>
              <strong>Mini evaluación</strong>
              <p>
                Comprueba si ya dominas {temaRuta}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
const preguntasMiniPorTema = {
  'Geometría': [
    {
      pregunta: '¿Cuál es el área de un cuadrado de lado 5 cm?',
      opciones: ['10 cm²', '20 cm²', '25 cm²', '30 cm²'],
      correcta: '25 cm²',
    },
    {
      pregunta: '¿Cuál es el área de un rectángulo de base 7 cm y altura 4 cm?',
      opciones: ['11 cm²', '22 cm²', '28 cm²', '35 cm²'],
      correcta: '28 cm²',
    },
    {
      pregunta: '¿Cuál es el área de un triángulo de base 10 cm y altura 4 cm?',
      opciones: ['14 cm²', '20 cm²', '40 cm²', '50 cm²'],
      correcta: '20 cm²',
    },
  ],

  'Fracciones': [
    {
      pregunta: '¿Cuánto es 1/4 + 2/4?',
      opciones: ['3/4', '3/8', '2/4', '1/2'],
      correcta: '3/4',
    },
    {
      pregunta: '¿Cuál fracción es equivalente a 1/2?',
      opciones: ['1/3', '2/4', '3/4', '2/5'],
      correcta: '2/4',
    },
    {
      pregunta: '¿Cuánto es 2/3 × 1/2?',
      opciones: ['1/3', '2/5', '3/4', '1/6'],
      correcta: '1/3',
    },
  ],

  'Ecuaciones': [
    {
      pregunta: 'Resuelve: x + 4 = 10',
      opciones: ['4', '6', '10', '14'],
      correcta: '6',
    },
    {
      pregunta: 'Resuelve: x - 3 = 5',
      opciones: ['2', '5', '8', '15'],
      correcta: '8',
    },
    {
      pregunta: 'Resuelve: 2x = 12',
      opciones: ['4', '6', '10', '24'],
      correcta: '6',
    },
  ],

  'Operaciones': [
    {
      pregunta: '¿Cuánto es 9 + 6?',
      opciones: ['13', '14', '15', '16'],
      correcta: '15',
    },
    {
      pregunta: '¿Cuánto es 18 - 7?',
      opciones: ['9', '10', '11', '12'],
      correcta: '11',
    },
    {
      pregunta: '¿Cuánto es 6 × 4?',
      opciones: ['10', '20', '24', '28'],
      correcta: '24',
    },
  ],

  'Potencias y raíces': [
    {
      pregunta: '¿Cuánto es 4²?',
      opciones: ['8', '12', '16', '20'],
      correcta: '16',
    },
    {
      pregunta: '¿Cuánto es 2³?',
      opciones: ['4', '6', '8', '9'],
      correcta: '8',
    },
    {
      pregunta: '¿Cuál es √36?',
      opciones: ['4', '5', '6', '9'],
      correcta: '6',
    },
  ],
}
const preguntasMiniActuales =
  preguntasMiniPorTema[temaRuta] || preguntasMiniPorTema['Geometría']
if (pantalla === 'mini-tema') {
  const pregunta = preguntasMiniActuales[preguntaMini]

  const responderMini = (respuesta) => {
    const nuevosAciertos =
      respuesta === pregunta.correcta
        ? aciertosMini + 1
        : aciertosMini

    setAciertosMini(nuevosAciertos)

    if (preguntaMini <preguntasMiniActuales.length - 1) {
      setPreguntaMini(preguntaMini + 1)
  } else {
  if (nuevosAciertos >= 2) {
  setTemasDominados((anteriores) => {
    const actualizados = anteriores.includes(temaRuta)
      ? anteriores
      : [...anteriores, temaRuta]

    const siguiente = temasMate.find(
      (tema) => !actualizados.includes(tema)
    )

    if (siguiente) {
      setTemaRuta(siguiente)
    }

    return actualizados
  })
}

  setPantalla('resultado-mini')
}
}
  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-tema')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Mini evaluación</span>

          <h1>Comprueba lo aprendido</h1>

          <p>
            Pregunta {preguntaMini + 1} de {preguntasMiniActuales.length}
          </p>
        </div>

        <div className="lesson-box">
          <h3>{pregunta.pregunta}</h3>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                onClick={() => responderMini(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini') {
  const porcentajeMini = Math.round(
    (aciertosMini / preguntasMiniActuales.length) * 100
  )

  const temaDominado = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-tema')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Mini evaluación completada</span>

          <h1>Resultado de {temaRuta || 'Matemática'}</h1>

          <div className="result-score">
            <strong>{porcentajeMini}%</strong>
            <span>
              {aciertosMini} de {preguntasMiniActuales.length} respuestas correctas
            </span>
          </div>
        </div>

        <div className="result-message">
          {temaDominado ? (
            <>
              <strong>✅ Tema dominado</strong>
              <p>
                Has demostrado un buen dominio de {temaRuta || 'este tema'}.
                Puedes continuar con contenidos de mayor dificultad.
              </p>
            </>
          ) : (
            <>
              <strong>📚 Necesitas un poco más de refuerzo</strong>
              <p>
                Te recomendamos volver al repaso y practicar nuevamente
                antes de avanzar.
              </p>
            </>
          )}
        </div>

        <div className="lesson-actions">
          {!temaDominado && (
            <button
              className="login-button"
              onClick={() => setPantalla('repaso-tema')}
            >
              ← Repasar otra vez
            </button>
          )}

          <button
            className="primary-button"
            onClick={() => setPantalla('ruta-mate')}    > 
            Volver a mi ruta
          </button>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'practica-tema') {
  const practicas = {
  'Geometría': {
    pregunta: 'Un triángulo tiene una base de 8 cm y una altura de 6 cm. ¿Cuál es su área?',
    opciones: ['18 cm²', '24 cm²', '30 cm²', '48 cm²'],
    correcta: '24 cm²',
    ayuda: 'Recuerda: A = (b × h) / 2'
  },

  'Fracciones': {
    pregunta: '¿Cuánto es 2/5 + 1/5?',
    opciones: ['2/10', '3/5', '3/10', '1/5'],
    correcta: '3/5',
    ayuda: 'Si los denominadores son iguales, suma los numeradores.'
  },

  'Ecuaciones': {
    pregunta: 'Resuelve: x + 3 = 8',
    opciones: ['3', '5', '8', '11'],
    correcta: '5',
    ayuda: 'Resta 3 en ambos lados de la ecuación.'
  },

  'Operaciones': {
    pregunta: '¿Cuánto es 12 - 4 + 3?',
    opciones: ['5', '8', '11', '19'],
    correcta: '11',
    ayuda: 'Resuelve las operaciones de izquierda a derecha.'
  },

  'Potencias y raíces': {
    pregunta: '¿Cuál es el valor de √25?',
    opciones: ['3', '5', '10', '25'],
    correcta: '5',
    ayuda: 'Busca qué número multiplicado por sí mismo da 25.'
  }
}

const practicaActual =
  practicas[temaRuta] || practicas['Geometría']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-tema')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Práctica</span>

          <h1>Práctica de {temaRuta || 'Matemática'}</h1>

          <p>
            Aplica lo aprendido antes de pasar a la mini evaluación.
          </p>
        </div>

        <div className="lesson-box">
          <h3>📐 Ejercicio</h3>

          <p>{practicaActual.pregunta}</p>

          <div className="answer-grid">
            {practicaActual.opciones.map((opcion) => (
              <button
                key={opcion}
                onClick={() => {
  if (opcion === practicaActual.correcta) {
    alert('✅ ¡Correcto! Muy bien.')
  } else {
    alert(`❌ Inténtalo otra vez. ${practicaActual.ayuda}`)
  }
}}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>

        <div className="lesson-actions">
  <button
    className="login-button"
    onClick={() => setPantalla('leccion-tema')}
  >
    ← Volver a la lección
  </button>

  <button
    className="primary-button"
    onClick={() => {
      setPreguntaMini(0)
      setAciertosMini(0)
      setPantalla('mini-tema')
    }}
  >
    Ir a mini evaluación →
  </button>
</div>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-tema') {
  const hayLeccionIA =
    leccionIA &&
    !leccionIA.toLowerCase().includes('respaldo') &&
    !leccionIA.toLowerCase().includes('no pudimos')
const leccionesRespaldo = {
  'Geometría': {
    titulo: '📐 Ejemplo: área de un triángulo',
    texto: 'Imagina un triángulo con una base de 8 cm y una altura de 6 cm.',
    pasos: [
      'Primero usamos la fórmula:',
      'A = (b × h) / 2',
      'Reemplazamos los valores:',
      'A = (8 × 6) / 2',
      'Multiplicamos:',
      'A = 48 / 2',
      'Finalmente:',
      'A = 24 cm²',
    ],
  },

  'Fracciones': {
    titulo: '🍕 Ejemplo: suma de fracciones',
    texto: 'Vamos a sumar 2/5 + 1/5.',
    pasos: [
      'Como tienen el mismo denominador, sumamos los numeradores:',
      '2 + 1 = 3',
      'Mantenemos el denominador:',
      '5',
      'Resultado:',
      '2/5 + 1/5 = 3/5',
    ],
  },

  'Ecuaciones': {
    titulo: '⚖️ Ejemplo: resolver una ecuación',
    texto: 'Resolvamos x + 3 = 8.',
    pasos: [
      'Queremos dejar sola a x.',
      'Restamos 3 en ambos lados:',
      'x + 3 - 3 = 8 - 3',
      'Entonces:',
      'x = 5',
      'Comprobamos:',
      '5 + 3 = 8',
    ],
  },

  'Operaciones': {
    titulo: '➕ Ejemplo: operaciones básicas',
    texto: 'Resolvamos 12 - 4 + 3.',
    pasos: [
      'Primero resolvemos de izquierda a derecha:',
      '12 - 4 = 8',
      'Luego sumamos 3:',
      '8 + 3 = 11',
      'Resultado:',
      '11',
    ],
  },

  'Potencias y raíces': {
    titulo: '√ Ejemplo: potencias y raíces',
    texto: 'Veamos 3² y √25.',
    pasos: [
      '3² significa multiplicar 3 por sí mismo:',
      '3 × 3 = 9',
      'Ahora buscamos qué número multiplicado por sí mismo da 25:',
      '5 × 5 = 25',
      'Por eso:',
      '√25 = 5',
    ],
  },
}

const respaldoActual =
  leccionesRespaldo[temaRuta] || leccionesRespaldo['Geometría']
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-tema')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">
            {hayLeccionIA ? '✨ Lección personalizada con IA' : 'Lección'}
          </span>

          <h1>
  {hayLeccionIA
    ? `Tu lección personalizada: ${temaRuta || 'Matemática'}`
    : `Repaso de ${temaRuta || 'Matemática'}`}
</h1>

         <p>
  {hayLeccionIA
    ? 'Esta explicación fue adaptada según los resultados de tu diagnóstico.'
    : `La IA no está disponible ahora, así que te mostramos un material preparado para continuar reforzando ${temaRuta || 'este tema'}.`}
</p>
        </div>

        {hayLeccionIA ? (
          <div className="lesson-box">
            <h3>🤖 Explicación personalizada</h3>

            <p style={{ whiteSpace: 'pre-line' }}>
              {leccionIA}
            </p>
          </div>
        ) : (
         <div className="lesson-box">
  <h3>{respaldoActual.titulo}</h3>

  <p>{respaldoActual.texto}</p>

  {respaldoActual.pasos.map((paso, index) => (
    index % 2 === 0 ? (
      <p key={index}>{paso}</p>
    ) : (
      <strong key={index}>{paso}</strong>
    )
  ))}
</div>
        )}

        {!hayLeccionIA && leccionIA && (
          <p className="ai-loading">
            ✨ La IA no está disponible en este momento. Puedes continuar con
            esta lección preparada.
          </p>
        )}

        <div className="lesson-actions">
          <button
            className="login-button"
            onClick={() => setPantalla('ruta-mate')}
          >
            ← Volver a mi ruta
          </button>

          <button
            className="primary-button"
            onClick={() => setPantalla('practica-tema')}
          >
            Continuar a práctica →
          </button>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-tema') {
  const repasos = {
    'Geometría': [
      {
        titulo: '📐 Área del triángulo',
        texto: 'Multiplica la base por la altura y divide el resultado entre 2.',
        formula: 'A = (b × h) / 2',
      },
      {
        titulo: '⬛ Área del cuadrado',
        texto: 'Multiplica la medida de un lado por sí misma.',
        formula: 'A = lado × lado',
      },
      {
        titulo: '▭ Área del rectángulo',
        texto: 'Multiplica la base por la altura.',
        formula: 'A = b × h',
      },
    ],

    'Fracciones': [
      {
        titulo: '🍕 Fracciones equivalentes',
        texto: 'Dos fracciones son equivalentes cuando representan la misma cantidad.',
        formula: '1/2 = 2/4',
      },
      {
        titulo: '➕ Suma de fracciones',
        texto: 'Si tienen el mismo denominador, suma los numeradores.',
        formula: '2/5 + 1/5 = 3/5',
      },
      {
        titulo: '✖️ Multiplicación de fracciones',
        texto: 'Multiplica numerador por numerador y denominador por denominador.',
        formula: '2/3 × 1/2 = 2/6 = 1/3',
      },
    ],

    'Ecuaciones': [
      {
        titulo: '⚖️ Mantén el equilibrio',
        texto: 'Lo que haces en un lado de la ecuación debes hacerlo también en el otro.',
        formula: 'x + 3 = 8',
      },
      {
        titulo: '🔎 Despejar la incógnita',
        texto: 'Realiza la operación contraria para dejar sola a la incógnita.',
        formula: 'x = 8 - 3',
      },
      {
        titulo: '✅ Comprueba tu resultado',
        texto: 'Reemplaza la incógnita con el valor obtenido.',
        formula: '5 + 3 = 8',
      },
    ],

    'Operaciones': [
      {
        titulo: '➕ Suma',
        texto: 'Une cantidades para obtener un total.',
        formula: '8 + 4 = 12',
      },
      {
        titulo: '➖ Resta',
        texto: 'Encuentra la diferencia entre dos cantidades.',
        formula: '12 - 4 = 8',
      },
      {
        titulo: '✖️ Multiplicación',
        texto: 'Representa una suma repetida de una misma cantidad.',
        formula: '4 × 3 = 12',
      },
    ],

    'Potencias y raíces': [
      {
        titulo: '² Potencias',
        texto: 'Una potencia representa una multiplicación repetida.',
        formula: '3² = 3 × 3 = 9',
      },
      {
        titulo: '🔢 Exponente',
        texto: 'El exponente indica cuántas veces se multiplica la base por sí misma.',
        formula: '2³ = 2 × 2 × 2 = 8',
      },
      {
        titulo: '√ Raíz cuadrada',
        texto: 'Busca qué número multiplicado por sí mismo produce el valor indicado.',
        formula: '√25 = 5',
      },
    ],
  }

  const contenidoRepaso =
    repasos[temaRuta] || repasos['Geometría']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Geometría'}</h1>

          <p>
            Repasa los conceptos principales antes de continuar con tu lección.
          </p>
        </div>

        <div className="geometry-review">
          {contenidoRepaso.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>

              <p>{item.texto}</p>

              <strong>{item.formula}</strong>
            </div>
          ))}
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setPantalla('leccion-tema')
            generarLeccionIA()
          }}
          disabled={cargandoLeccion}
        >
          {cargandoLeccion
            ? '✨ Preparando tu lección personalizada...'
            : 'Continuar con mi ruta →'}
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-ingles') {
  const repasosIngles = {
    'Present Simple': [
      {
        titulo: '🗓️ ¿Cuándo se usa?',
        texto: 'Usamos el Present Simple para rutinas, hábitos y hechos.',
        formula: 'I study English every day.',
      },
      {
        titulo: '👤 He / She / It',
        texto: 'Con he, she o it normalmente agregamos -s al verbo.',
        formula: 'She plays football.',
      },
      {
        titulo: '❓ Preguntas',
        texto: 'Usamos do o does para hacer preguntas.',
        formula: 'Do you study? / Does he study?',
      },
    ],

    'Present Continuous': [
      {
        titulo: '⏱️ ¿Cuándo se usa?',
        texto: 'Se usa para acciones que están ocurriendo en este momento.',
        formula: 'I am studying now.',
      },
      {
        titulo: '🧩 Estructura',
        texto: 'Usamos am, is o are seguido del verbo con -ing.',
        formula: 'Subject + am/is/are + verb-ing',
      },
      {
        titulo: '💬 Ejemplo',
        texto: 'Describe lo que alguien está haciendo ahora.',
        formula: 'They are playing football.',
      },
    ],

    'Past Simple': [
      {
        titulo: '⏪ ¿Cuándo se usa?',
        texto: 'Se usa para acciones que comenzaron y terminaron en el pasado.',
        formula: 'I visited my friend yesterday.',
      },
      {
        titulo: '✏️ Verbos regulares',
        texto: 'Normalmente agregamos -ed a los verbos regulares.',
        formula: 'play → played',
      },
      {
        titulo: '⚡ Verbos irregulares',
        texto: 'Algunos verbos cambian completamente.',
        formula: 'go → went / see → saw',
      },
    ],

    'Comparatives': [
      {
        titulo: '⚖️ ¿Para qué sirven?',
        texto: 'Los comparativos permiten comparar dos personas, objetos o lugares.',
        formula: 'Tom is taller than Sam.',
      },
      {
        titulo: '📏 Adjetivos cortos',
        texto: 'Normalmente agregamos -er y usamos than.',
        formula: 'small → smaller than',
      },
      {
        titulo: '🔤 Adjetivos largos',
        texto: 'Normalmente usamos more antes del adjetivo.',
        formula: 'more interesting than',
      },
    ],

    'Present Perfect': [
      {
        titulo: '🕒 ¿Cuándo se usa?',
        texto: 'Se usa para experiencias o acciones relacionadas con el presente.',
        formula: 'I have visited Cusco.',
      },
      {
        titulo: '🧩 Estructura',
        texto: 'Usamos have o has seguido del participio pasado.',
        formula: 'Subject + have/has + past participle',
      },
      {
        titulo: '👤 Have / Has',
        texto: 'Usamos has con he, she e it; have con los demás sujetos.',
        formula: 'She has studied. / They have studied.',
      },
    ],
  }

  const contenidoIngles =
    repasosIngles[temaRuta] || repasosIngles['Present Simple']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta-ingles')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Present Simple'}</h1>

          <p>
            Repasa los conceptos principales antes de continuar con tu lección.
          </p>
        </div>

        <div className="geometry-review">
          {contenidoIngles.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <strong>{item.formula}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('leccion-ingles')}
>
  Continuar con mi lección →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-ingles') {
  const leccionesIngles = {
    'Present Simple': {
      titulo: 'Present Simple',
      explicacion:
        'Usamos el Present Simple para hablar de rutinas, hábitos, gustos y hechos generales.',
      ejemplos: [
        'I study English every day.',
        'She plays volleyball on Saturdays.',
        'They live in Lima.',
      ],
    },

    'Present Continuous': {
      titulo: 'Present Continuous',
      explicacion:
        'Usamos el Present Continuous para acciones que están ocurriendo ahora.',
      ejemplos: [
        'I am studying now.',
        'She is reading a book.',
        'They are playing football.',
      ],
    },

    'Past Simple': {
      titulo: 'Past Simple',
      explicacion:
        'Usamos el Past Simple para acciones que comenzaron y terminaron en el pasado.',
      ejemplos: [
        'I visited my grandmother yesterday.',
        'She played tennis last weekend.',
        'They went to school early.',
      ],
    },

    'Comparatives': {
      titulo: 'Comparatives',
      explicacion:
        'Usamos los comparativos para comparar dos personas, objetos o lugares.',
      ejemplos: [
        'My brother is taller than me.',
        'This book is more interesting than that one.',
        'A car is faster than a bicycle.',
      ],
    },

    'Present Perfect': {
      titulo: 'Present Perfect',
      explicacion:
        'Usamos el Present Perfect para experiencias y acciones relacionadas con el presente.',
      ejemplos: [
        'I have visited Cusco.',
        'She has finished her homework.',
        'They have studied English for two years.',
      ],
    },
  }

  const leccionActual =
    leccionesIngles[temaRuta] || leccionesIngles['Present Simple']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-ingles')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
       <div className="result-header">
  <span className="result-badge">
    📘 Lección
  </span>

  <h1>
    Lección de {leccionActual.titulo}
  </h1>

  <p>
    Aprende los conceptos principales y revisa los ejemplos antes de comenzar la práctica.
  </p>
</div>

<div className="lesson-box">
  <h3>📖 Explicación</h3>
  <p>{leccionActual.explicacion}</p>
</div>

        <div className="geometry-review">
          {leccionActual.ejemplos.map((ejemplo, index) => (
            <div className="review-card" key={index}>
              <h3>Ejemplo {index + 1}</h3>
              <strong>{ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('practica-ingles')}
>
  Ir a práctica →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'practica-ingles') {
  const practicasIngles = {
    'Present Simple': {
      pregunta: 'Choose the correct sentence:',
      opciones: [
        'She play football every day.',
        'She plays football every day.',
        'She playing football every day.',
      ],
      correcta: 'She plays football every day.',
      ayuda: 'Recuerda que con he, she o it normalmente agregamos -s al verbo.',
    },

    'Present Continuous': {
      pregunta: 'Choose the correct sentence:',
      opciones: [
        'They are studying now.',
        'They study now.',
        'They is studying now.',
      ],
      correcta: 'They are studying now.',
      ayuda: 'Usa am, is o are + verbo con -ing.',
    },

    'Past Simple': {
      pregunta: 'Choose the correct sentence:',
      opciones: [
        'I visited my friend yesterday.',
        'I visit my friend yesterday.',
        'I am visiting my friend yesterday.',
      ],
      correcta: 'I visited my friend yesterday.',
      ayuda: 'Para una acción terminada en el pasado usamos Past Simple.',
    },

    'Comparatives': {
      pregunta: 'Choose the correct sentence:',
      opciones: [
        'Tom is tall than Sam.',
        'Tom is taller than Sam.',
        'Tom is more tall than Sam.',
      ],
      correcta: 'Tom is taller than Sam.',
      ayuda: 'Con adjetivos cortos normalmente usamos -er + than.',
    },

    'Present Perfect': {
      pregunta: 'Choose the correct sentence:',
      opciones: [
        'She has finished her homework.',
        'She have finished her homework.',
        'She has finish her homework.',
      ],
      correcta: 'She has finished her homework.',
      ayuda: 'Usa has con she y luego el participio pasado.',
    },
  }

  const practicaActual =
    practicasIngles[temaRuta] || practicasIngles['Present Simple']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-ingles')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Práctica</span>

          <h1>Práctica de {temaRuta || 'Present Simple'}</h1>

          <p>{practicaActual.pregunta}</p>
        </div>

        <div className="answer-grid">
          {practicaActual.opciones.map((opcion) => (
            <button
              key={opcion}
              className="answer-button"
              onClick={() => {
                if (opcion === practicaActual.correcta) {
                  alert('✅ Correct! Very good.')
                } else {
                  alert(`❌ Try again. ${practicaActual.ayuda}`)
                }
              }}
            >
              {opcion}
            </button>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => {
    setPreguntaMini(0)
    setAciertosMini(0)
    setPantalla('mini-ingles')
  }}
>
  Ir a mini evaluación →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'mini-ingles') {
  const preguntasMiniIngles = {
    'Present Simple': [
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'He play basketball every day.',
      'He plays basketball every day.',
      'He is play basketball every day.',
    ],
    correcta: 'He plays basketball every day.',
  },
  {
    pregunta: 'Choose the correct question:',
    opciones: [
      'Does you like English?',
      'Are you like English?',
      'Do you like English?',
    ],
    correcta: 'Do you like English?',
  },
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'She studies at school.',
      'She studying at school.',
      'She study at school.',
    ],
    correcta: 'She studies at school.',
  },
],

    'Present Continuous': [
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'I am studying now.',
      'I study now.',
      'I is studying now.',
    ],
    correcta: 'I am studying now.',
  },
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'She are reading.',
      'She is reading.',
      'She reading.',
    ],
    correcta: 'She is reading.',
  },
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'They play football now.',
      'They is playing football.',
      'They are playing football.',
    ],
    correcta: 'They are playing football.',
  },
],

   'Past Simple': [
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'I visit my grandmother yesterday.',
      'I am visiting my grandmother yesterday.',
      'I visited my grandmother yesterday.',
    ],
    correcta: 'I visited my grandmother yesterday.',
  },
  {
    pregunta: 'What is the past of "go"?',
    opciones: [
      'went',
      'goed',
      'gone',
    ],
    correcta: 'went',
  },
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'She playing tennis last Saturday.',
      'She played tennis last Saturday.',
      'She plays tennis last Saturday.',
    ],
    correcta: 'She played tennis last Saturday.',
  },
],

   'Comparatives': [
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'A car is more fast than a bicycle.',
      'A car is faster than a bicycle.',
      'A car is fastest than a bicycle.',
    ],
    correcta: 'A car is faster than a bicycle.',
  },
  {
    pregunta: 'Complete: My house is ___ than yours.',
    opciones: [
      'bigger',
      'big',
      'more big',
    ],
    correcta: 'bigger',
  },
  {
    pregunta: 'Choose the correct comparative:',
    opciones: [
      'interestinger than',
      'most interesting than',
      'more interesting than',
    ],
    correcta: 'more interesting than',
  },
],
'Present Perfect': [
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'I has visited Cusco.',
      'I visited Cusco already.',
      'I have visited Cusco.',
    ],
    correcta: 'I have visited Cusco.',
  },
  {
    pregunta: 'Choose the correct sentence:',
    opciones: [
      'She has finished her homework.',
      'She have finished her homework.',
      'She has finish her homework.',
    ],
    correcta: 'She has finished her homework.',
  },
  {
    pregunta: 'Complete: They ___ studied English.',
    opciones: [
      'has',
      'have',
      'are',
    ],
    correcta: 'have',
  },
],
  }

  const preguntasActuales =
    preguntasMiniIngles[temaRuta] || preguntasMiniIngles['Present Simple']

  const pregunta = preguntasActuales[preguntaMini]

  const responderMiniIngles = (respuesta) => {
    const esCorrecta = respuesta === pregunta.correcta
    const nuevosAciertos = esCorrecta
      ? aciertosMini + 1
      : aciertosMini

    if (esCorrecta) {
      setAciertosMini(nuevosAciertos)
    }
    if (preguntaMini < preguntasActuales.length - 1) {
  setPreguntaMini(preguntaMini + 1)
} else {
  setAciertosMini(nuevosAciertos)

  if (nuevosAciertos >= 2) {
    setTemasDominadosIngles((anteriores) => {
      if (anteriores.includes(temaRuta)) {
        return anteriores
      }

      return [...anteriores, temaRuta]
    })
  }

  setPantalla('resultado-mini-ingles')
}
}
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-ingles')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Mini evaluación</span>

          <h1>{temaRuta || 'Present Simple'}</h1>

          <p>
            Pregunta {preguntaMini + 1} de {preguntasActuales.length}
          </p>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderMiniIngles(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini-ingles') {
  const temaDominado = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>
      </header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado</span>

          <h1>Resultado de {temaRuta || 'Present Simple'}</h1>

          <p>
            Obtuviste {aciertosMini} de 3 respuestas correctas.
          </p>

          <h2>
            {temaDominado
              ? '✅ Tema dominado'
              : '📚 Sigue practicando'}
          </h2>
        </div>

        <button
  className="primary-button"
  onClick={() => {
    if (siguienteTemaIngles) {
      setTemaRuta(siguienteTemaIngles)
    }

    setPantalla('ruta-ingles')
  }}
>
  Volver a mi ruta →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'comunicacion-diagnostico') {
  const pregunta = preguntasComunicacion[preguntaActual]

  const responderComunicacion = (respuesta) => {
    const nuevoResultado = {
      tema: pregunta.tema,
      correcta: respuesta === pregunta.correcta,
    }

    setResultadosComunicacion((anteriores) => [
      ...anteriores,
      nuevoResultado,
    ])

    if (preguntaActual < preguntasComunicacion.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setPantalla('resultado-comunicacion')
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-ingles')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Diagnóstico de Comunicación</span>

          <h1>
            Pregunta {preguntaActual + 1} de {preguntasComunicacion.length}
          </h1>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderComunicacion(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-comunicacion') {
  const aciertosComunicacion = resultadosComunicacion.filter(
    (resultado) => resultado.correcta
  ).length

  const primerTemaFallado = resultadosComunicacion.find(
    (resultado) => !resultado.correcta
  )

  const temaRecomendadoComunicacion =
    primerTemaFallado?.tema || temasComunicacion[0]

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>
      </header>

      <section className="diagnostic-container">
        <span className="result-badge">Resultado del diagnóstico</span>

        <h1>Tu nivel de Comunicación</h1>

        <p>
          Obtuviste {aciertosComunicacion} de {preguntasComunicacion.length} respuestas correctas.
        </p>

        <div className="result-message">
          <strong>Te recomendamos empezar por:</strong>
          <h2>{temaRecomendadoComunicacion}</h2>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setTemaRuta(temaRecomendadoComunicacion)
            setPantalla('ruta-comunicacion')
          }}
        >
          Continuar con mi ruta →
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-comunicacion') {
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-comunicacion')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>Comunicación · {temaRuta || 'Comprensión lectora'}</h1>

          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
          <div className="course-progress">
  <div className="progress-info">
    <strong>Progreso de Comunicación</strong>

    <span>
      {Math.round(
        (temasDominadosComunicacion.length / temasComunicacion.length) * 100
      )}%
    </span>
  </div>

  <div className="progress-track">
    <div
      className="progress-fill"
      style={{
        width: `${Math.round(
          (temasDominadosComunicacion.length / temasComunicacion.length) * 100
        )}%`,
      }}
    ></div>
  </div>

  <p>
    {temasDominadosComunicacion.length} de {temasComunicacion.length} temas dominados
  </p>
</div>
        </div>

        <div className="learning-path">
          <div
            className="path-step clickable"
            onClick={() => setPantalla('repaso-comunicacion')}
          >
            <span>1</span>
            <div>
              <strong>📖 Repaso breve</strong>
              <p>
                Conceptos principales de {temaRuta || 'Comprensión lectora'}.
              </p>
            </div>
          </div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>
            <div>
              <strong>Mini evaluación</strong>
              <p>Comprueba si ya dominas el tema.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-comunicacion') {
  const repasosComunicacion = {
    'Comprensión lectora': [
      {
        titulo: '🔎 Idea principal',
        texto: 'Es la información más importante que el texto desarrolla.',
        ejemplo: 'Un texto sobre reciclaje puede tener como idea principal la importancia de cuidar el ambiente.',
      },
      {
        titulo: '📌 Ideas secundarias',
        texto: 'Complementan y explican la idea principal.',
        ejemplo: 'Pueden incluir ejemplos, datos o explicaciones.',
      },
      {
        titulo: '🧠 Inferencias',
        texto: 'Permiten deducir información que no aparece escrita directamente.',
        ejemplo: 'Si alguien sale con paraguas, podemos inferir que está lloviendo.',
      },
    ],

    'Tipos de texto': [
      {
        titulo: '📖 Narrativo',
        texto: 'Cuenta hechos reales o imaginarios.',
        ejemplo: 'Cuentos, novelas y leyendas.',
      },
      {
        titulo: '📝 Expositivo',
        texto: 'Explica información de manera clara y objetiva.',
        ejemplo: 'Artículos informativos y textos escolares.',
      },
      {
        titulo: '💬 Argumentativo',
        texto: 'Busca defender una opinión mediante razones.',
        ejemplo: 'Un artículo de opinión.',
      },
    ],

    'Ortografía': [
      {
        titulo: '🔤 Uso de tildes',
        texto: 'Las palabras siguen reglas de acentuación.',
        ejemplo: 'camión, árbol, matemática',
      },
      {
        titulo: '✍️ Mayúsculas',
        texto: 'Se usan al comenzar una oración y en nombres propios.',
        ejemplo: 'María vive en Lima.',
      },
      {
        titulo: '❗ Signos de puntuación',
        texto: 'Ayudan a organizar y dar sentido a las oraciones.',
        ejemplo: 'Punto, coma, signos de interrogación.',
      },
    ],

    'Gramática': [
      {
        titulo: '👤 Sustantivo',
        texto: 'Nombra personas, animales, lugares, objetos o ideas.',
        ejemplo: 'niño, perro, Lima, amistad',
      },
      {
        titulo: '🏃 Verbo',
        texto: 'Expresa una acción o estado.',
        ejemplo: 'correr, estudiar, ser',
      },
      {
        titulo: '🎨 Adjetivo',
        texto: 'Describe características del sustantivo.',
        ejemplo: 'casa grande, perro pequeño',
      },
    ],

    'Producción de textos': [
      {
        titulo: '💡 Planificación',
        texto: 'Antes de escribir, organiza qué quieres comunicar.',
        ejemplo: 'Tema → ideas principales → orden.',
      },
      {
        titulo: '✍️ Redacción',
        texto: 'Escribe las ideas siguiendo una estructura clara.',
        ejemplo: 'Inicio, desarrollo y cierre.',
      },
      {
        titulo: '✅ Revisión',
        texto: 'Revisa ortografía, claridad y coherencia.',
        ejemplo: 'Corregir errores antes de entregar el texto.',
      },
    ],
  }

  const contenidoComunicacion =
    repasosComunicacion[temaRuta] ||
    repasosComunicacion['Comprensión lectora']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta-comunicacion')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Comprensión lectora'}</h1>

          <p>
            Repasa los conceptos principales antes de continuar con tu lección.
          </p>
        </div>

        <div className="geometry-review">
          {contenidoComunicacion.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <strong>{item.ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('leccion-comunicacion')}
>
  Continuar con mi lección →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-comunicacion') {
  const leccionesComunicacion = {
    'Comprensión lectora': {
      titulo: 'Comprensión lectora',
      explicacion:
        'Comprender un texto significa identificar sus ideas principales, detalles importantes e información implícita.',
      ejemplos: [
        'Primero identifica de qué trata el texto.',
        'Después busca la idea principal.',
        'Finalmente relaciona los detalles con esa idea.',
      ],
    },

    'Tipos de texto': {
      titulo: 'Tipos de texto',
      explicacion:
        'Los textos se clasifican según su propósito, estructura y forma de comunicar información.',
      ejemplos: [
        'Narrativo: cuenta una historia.',
        'Expositivo: explica información.',
        'Argumentativo: defiende una opinión.',
      ],
    },

    'Ortografía': {
      titulo: 'Ortografía',
      explicacion:
        'La ortografía permite escribir correctamente mediante reglas de acentuación, puntuación y uso de letras.',
      ejemplos: [
        'Las palabras agudas pueden llevar tilde.',
        'Los nombres propios empiezan con mayúscula.',
        'La coma ayuda a separar elementos.',
      ],
    },

    'Gramática': {
      titulo: 'Gramática',
      explicacion:
        'La gramática estudia cómo se organizan y relacionan las palabras dentro de una oración.',
      ejemplos: [
        'El sustantivo nombra personas, lugares o cosas.',
        'El verbo expresa acciones o estados.',
        'El adjetivo describe al sustantivo.',
      ],
    },

    'Producción de textos': {
      titulo: 'Producción de textos',
      explicacion:
        'Para escribir un buen texto debemos planificar, redactar y revisar nuestras ideas.',
      ejemplos: [
        'Primero organiza tus ideas.',
        'Después redacta siguiendo un orden.',
        'Finalmente revisa ortografía y claridad.',
      ],
    },
  }

  const leccionActualComunicacion =
    leccionesComunicacion[temaRuta] ||
    leccionesComunicacion['Comprensión lectora']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-comunicacion')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
       <div className="result-header">
  <span className="result-badge">
    📘 Lección
  </span>

  <h1>
    Lección de {leccionActualComunicacion.titulo}
  </h1>

  <p>
    Aprende los conceptos principales y revisa los ejemplos antes de comenzar la práctica.
  </p>
</div>

<div className="lesson-box">
  <h3>📖 Explicación</h3>
  <p>{leccionActualComunicacion.explicacion}</p>
</div>

        <div className="geometry-review">
          {leccionActualComunicacion.ejemplos.map((ejemplo, index) => (
            <div className="review-card" key={index}>
              <h3>Ejemplo {index + 1}</h3>
              <strong>{ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('practica-comunicacion')}
>
  Ir a práctica →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'practica-comunicacion') {
  const practicasComunicacion = {
    'Comprensión lectora': {
      pregunta: '¿Cuál de estas opciones representa mejor una idea principal?',
      opciones: [
        'Un detalle pequeño del texto',
        'La información central que desarrolla el texto',
        'Una palabra aislada',
      ],
      correcta: 'La información central que desarrolla el texto',
      ayuda: 'La idea principal resume lo más importante del texto.',
    },

    'Tipos de texto': {
      pregunta: '¿Qué tipo de texto busca contar una historia?',
      opciones: [
        'Narrativo',
        'Expositivo',
        'Argumentativo',
      ],
      correcta: 'Narrativo',
      ayuda: 'El texto narrativo cuenta hechos reales o imaginarios.',
    },

    'Ortografía': {
      pregunta: '¿Cuál de estas palabras está escrita correctamente?',
      opciones: [
        'Canción',
        'Cansion',
        'Cancíon',
      ],
      correcta: 'Canción',
      ayuda: 'Recuerda aplicar correctamente las reglas de acentuación.',
    },

    'Gramática': {
      pregunta: '¿Cuál es el verbo en la oración “Pedro corre rápido”?',
      opciones: [
        'Pedro',
        'corre',
        'rápido',
      ],
      correcta: 'corre',
      ayuda: 'El verbo expresa la acción que realiza el sujeto.',
    },

    'Producción de textos': {
      pregunta: '¿Cuál es el primer paso antes de redactar un texto?',
      opciones: [
        'Planificar las ideas',
        'Corregir la ortografía',
        'Escribir la conclusión',
      ],
      correcta: 'Planificar las ideas',
      ayuda: 'Antes de redactar debemos organizar lo que queremos comunicar.',
    },
  }

  const practicaActualComunicacion =
    practicasComunicacion[temaRuta] ||
    practicasComunicacion['Comprensión lectora']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-comunicacion')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Práctica</span>

          <h1>Práctica de {temaRuta || 'Comprensión lectora'}</h1>

          <p>{practicaActualComunicacion.pregunta}</p>
        </div>

        <div className="answer-grid">
          {practicaActualComunicacion.opciones.map((opcion) => (
            <button
              key={opcion}
              className="answer-button"
              onClick={() => {
                if (opcion === practicaActualComunicacion.correcta) {
                  alert('✅ ¡Correcto! Muy bien.')
                } else {
                  alert(
                    `❌ Inténtalo otra vez. ${practicaActualComunicacion.ayuda}`
                  )
                }
              }}
            >
              {opcion}
            </button>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => {
    setPreguntaMini(0)
    setAciertosMini(0)
    setPantalla('mini-comunicacion')
  }}
>
  Ir a mini evaluación →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'mini-comunicacion') {
  const preguntasMiniComunicacion = {
    'Comprensión lectora': [
      {
        pregunta: '¿Qué es la idea principal de un texto?',
        opciones: [
          'La información central del texto',
          'El último detalle',
          'El título únicamente',
        ],
        correcta: 'La información central del texto',
      },
      {
        pregunta: '¿Qué hacen las ideas secundarias?',
        opciones: [
          'Eliminan la idea principal',
          'Complementan la idea principal',
          'Cambian el tema del texto',
        ],
        correcta: 'Complementan la idea principal',
      },
      {
        pregunta: '¿Qué significa hacer una inferencia?',
        opciones: [
          'Copiar exactamente una oración',
          'Deducir información a partir del texto',
          'Cambiar el contenido del texto',
        ],
        correcta: 'Deducir información a partir del texto',
      },
    ],

    'Tipos de texto': [
      {
        pregunta: '¿Qué tipo de texto cuenta una historia?',
        opciones: ['Narrativo', 'Expositivo', 'Argumentativo'],
        correcta: 'Narrativo',
      },
      {
        pregunta: '¿Qué tipo de texto explica información?',
        opciones: ['Narrativo', 'Expositivo', 'Poético'],
        correcta: 'Expositivo',
      },
      {
        pregunta: '¿Qué texto busca defender una opinión?',
        opciones: ['Argumentativo', 'Narrativo', 'Descriptivo'],
        correcta: 'Argumentativo',
      },
    ],

    'Ortografía': [
      {
        pregunta: '¿Cuál está escrita correctamente?',
        opciones: ['Canción', 'Cansion', 'Cancíon'],
        correcta: 'Canción',
      },
      {
        pregunta: '¿Cuál oración usa correctamente la mayúscula?',
        opciones: [
          'maría vive en Lima.',
          'María vive en Lima.',
          'María vive en lima.',
        ],
        correcta: 'María vive en Lima.',
      },
      {
        pregunta: '¿Qué signo usamos normalmente al terminar una oración?',
        opciones: ['Punto', 'Coma', 'Dos puntos'],
        correcta: 'Punto',
      },
    ],

    'Gramática': [
      {
        pregunta: '¿Cuál es el verbo en “Ana estudia Matemática”?',
        opciones: ['Ana', 'estudia', 'Matemática'],
        correcta: 'estudia',
      },
      {
        pregunta: '¿Cuál de estas palabras es un sustantivo?',
        opciones: ['correr', 'bonito', 'casa'],
        correcta: 'casa',
      },
      {
        pregunta: '¿Cuál de estas palabras es un adjetivo?',
        opciones: ['hermoso', 'estudiar', 'colegio'],
        correcta: 'hermoso',
      },
    ],

    'Producción de textos': [
      {
        pregunta: '¿Cuál es el primer paso para producir un texto?',
        opciones: ['Planificar', 'Publicar', 'Eliminar'],
        correcta: 'Planificar',
      },
      {
        pregunta: '¿Qué hacemos durante la redacción?',
        opciones: [
          'Desarrollamos nuestras ideas',
          'Eliminamos todas las ideas',
          'Ignoramos la planificación',
        ],
        correcta: 'Desarrollamos nuestras ideas',
      },
      {
        pregunta: '¿Qué debemos revisar al terminar?',
        opciones: [
          'Ortografía y claridad',
          'Solo el título',
          'Únicamente el tamaño de las letras',
        ],
        correcta: 'Ortografía y claridad',
      },
    ],
  }

  const preguntasActualesComunicacion =
    preguntasMiniComunicacion[temaRuta] ||
    preguntasMiniComunicacion['Comprensión lectora']

  const pregunta =
    preguntasActualesComunicacion[preguntaMini]

  const responderMiniComunicacion = (respuesta) => {
    const esCorrecta = respuesta === pregunta.correcta

    const nuevosAciertos = esCorrecta
      ? aciertosMini + 1
      : aciertosMini

    if (esCorrecta) {
      setAciertosMini(nuevosAciertos)
    }

    if (
      preguntaMini <
      preguntasActualesComunicacion.length - 1
    ) {
      setPreguntaMini(preguntaMini + 1)
    } else {
  setAciertosMini(nuevosAciertos)

  if (nuevosAciertos >= 2) {
    setTemasDominadosComunicacion((anteriores) => {
      if (anteriores.includes(temaRuta)) {
        return anteriores
      }

      return [...anteriores, temaRuta]
    })
  }

  setPantalla('resultado-mini-comunicacion')
}
    }

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-comunicacion')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">
            Mini evaluación
          </span>

          <h1>
            {temaRuta || 'Comprensión lectora'}
          </h1>

          <p>
            Pregunta {preguntaMini + 1} de{' '}
            {preguntasActualesComunicacion.length}
          </p>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() =>
                  responderMiniComunicacion(opcion)
                }
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini-comunicacion') {
  const temaDominado = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-comunicacion')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado</span>

          <h1>
            Resultado de {temaRuta || 'Comprensión lectora'}
          </h1>

          <p>
            Obtuviste {aciertosMini} de 3 respuestas correctas.
          </p>

          <h2>
            {temaDominado
              ? '✅ Tema dominado'
              : '📚 Sigue practicando'}
          </h2>
        </div>

        <button
  className="primary-button"
  onClick={() => {
    const siguienteTema = temasComunicacion.find(
      (tema) => !temasDominadosComunicacion.includes(tema)
    )

    if (siguienteTema) {
      setTemaRuta(siguienteTema)
    }

    setPantalla('ruta-comunicacion')
  }}
>
  Volver a mi ruta →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'ciencias-diagnostico') {
  const pregunta = preguntasCiencias[preguntaActual]

  const responderCiencias = (respuesta) => {
    const nuevoResultado = {
      tema: pregunta.tema,
      correcta: respuesta === pregunta.correcta,
    }

    setResultadosCiencias((anteriores) => [
      ...anteriores,
      nuevoResultado,
    ])

    if (preguntaActual < preguntasCiencias.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setPantalla('resultado-ciencias')
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>
      </header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Diagnóstico de Ciencias</span>

          <h1>
            Pregunta {preguntaActual + 1} de {preguntasCiencias.length}
          </h1>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderCiencias(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-ciencias') {
  const aciertosCiencias = resultadosCiencias.filter(
    (resultado) => resultado.correcta
  ).length

  const primerTemaFallado = resultadosCiencias.find(
    (resultado) => !resultado.correcta
  )

  const temaRecomendadoCiencias =
    primerTemaFallado?.tema || temasCiencias[0]

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>
      </header>

      <section className="diagnostic-container">
        <span className="result-badge">Resultado del diagnóstico</span>

        <h1>Tu nivel de Ciencias</h1>

        <p>
          Obtuviste {aciertosCiencias} de {preguntasCiencias.length} respuestas correctas.
        </p>

        <div className="result-message">
          <strong>Te recomendamos empezar por:</strong>
          <h2>{temaRecomendadoCiencias}</h2>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setTemaRuta(temaRecomendadoCiencias)
            setPantalla('ruta-ciencias')
          }}
        >
          Continuar con mi ruta →
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-ciencias') {
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-ciencias')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>Ciencias · {temaRuta || 'Seres vivos'}</h1>

          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
        </div>
<div className="progress-card">
  <h3>Tu progreso</h3>

  <p>
    {temasDominadosCiencias.length} de {temasCiencias.length} temas dominados
  </p>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{
        width: `${Math.round(
          (temasDominadosCiencias.length / temasCiencias.length) * 100
        )}%`,
      }}
    ></div>
  </div>

  <strong>
    {Math.round(
      (temasDominadosCiencias.length / temasCiencias.length) * 100
    )}%
  </strong>
</div>
        <div className="learning-path">
          <div
            className="path-step clickable"
            onClick={() => setPantalla('repaso-ciencias')}
          >
            <span>1</span>
            <div>
              <strong>📖 Repaso breve</strong>
              <p>
                Conceptos principales de {temaRuta || 'Seres vivos'}.
              </p>
            </div>
          </div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>
            <div>
              <strong>Mini evaluación</strong>
              <p>Comprueba si ya dominas el tema.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-ciencias') {
  const repasosCiencias = {
    'Seres vivos': [
      {
        titulo: '🌱 Funciones vitales',
        texto: 'Los seres vivos realizan nutrición, relación y reproducción.',
        ejemplo: 'Una planta obtiene nutrientes y responde a la luz.',
      },
      {
        titulo: '🔬 Organización',
        texto: 'Los seres vivos están formados por una o más células.',
        ejemplo: 'La célula es la unidad básica de la vida.',
      },
      {
        titulo: '🌎 Adaptación',
        texto: 'Los seres vivos presentan características que les permiten sobrevivir.',
        ejemplo: 'El cactus almacena agua para vivir en zonas secas.',
      },
    ],

    'Cuerpo humano': [
      {
        titulo: '❤️ Sistema circulatorio',
        texto: 'Transporta sangre, oxígeno y nutrientes por el cuerpo.',
        ejemplo: 'El corazón bombea la sangre.',
      },
      {
        titulo: '🫁 Sistema respiratorio',
        texto: 'Permite el intercambio de oxígeno y dióxido de carbono.',
        ejemplo: 'Los pulmones participan en la respiración.',
      },
      {
        titulo: '🧠 Sistema nervioso',
        texto: 'Coordina y controla muchas funciones del cuerpo.',
        ejemplo: 'El cerebro procesa información.',
      },
    ],

    'Materia y energía': [
      {
        titulo: '🧊 Estados de la materia',
        texto: 'La materia puede presentarse como sólido, líquido o gas.',
        ejemplo: 'El hielo es sólido y el vapor es gas.',
      },
      {
        titulo: '⚡ Energía',
        texto: 'La energía permite producir cambios y realizar trabajo.',
        ejemplo: 'La luz solar es una forma de energía.',
      },
      {
        titulo: '🔥 Cambios físicos',
        texto: 'La materia puede cambiar de estado sin convertirse en otra sustancia.',
        ejemplo: 'El hielo se derrite y se convierte en agua.',
      },
    ],

    'Ecosistemas': [
      {
        titulo: '🌿 Productores',
        texto: 'Son organismos que producen su propio alimento.',
        ejemplo: 'Las plantas realizan fotosíntesis.',
      },
      {
        titulo: '🐇 Consumidores',
        texto: 'Obtienen energía alimentándose de otros seres vivos.',
        ejemplo: 'Un conejo se alimenta de plantas.',
      },
      {
        titulo: '🍄 Descomponedores',
        texto: 'Descomponen restos de seres vivos y reciclan nutrientes.',
        ejemplo: 'Los hongos pueden actuar como descomponedores.',
      },
    ],

    'Tierra y universo': [
      {
        titulo: '🌍 Rotación',
        texto: 'La Tierra gira sobre su propio eje.',
        ejemplo: 'Este movimiento produce el día y la noche.',
      },
      {
        titulo: '☀️ Traslación',
        texto: 'La Tierra se mueve alrededor del Sol.',
        ejemplo: 'Una vuelta dura aproximadamente un año.',
      },
      {
        titulo: '🌙 Sistema solar',
        texto: 'Está formado por el Sol y los cuerpos que orbitan a su alrededor.',
        ejemplo: 'La Tierra es uno de los planetas del sistema solar.',
      },
    ],
  }

  const contenidoCiencias =
    repasosCiencias[temaRuta] || repasosCiencias['Seres vivos']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta-ciencias')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Seres vivos'}</h1>

          <p>
            Repasa los conceptos principales antes de continuar con tu lección.
          </p>
        </div>

        <div className="geometry-review">
          {contenidoCiencias.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <strong>{item.ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('leccion-ciencias')}
>
  Continuar con mi lección →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-ciencias') {
  const leccionesCiencias = {
    'Seres vivos': {
      titulo: 'Seres vivos',
      explicacion:
        'Los seres vivos están formados por células y realizan funciones vitales como nutrición, relación y reproducción.',
      ejemplos: [
        'Las plantas realizan fotosíntesis.',
        'Los animales responden a estímulos.',
        'Las células forman tejidos y órganos.',
      ],
    },

    'Cuerpo humano': {
      titulo: 'Cuerpo humano',
      explicacion:
        'El cuerpo humano está formado por sistemas que trabajan juntos para mantenernos vivos y saludables.',
      ejemplos: [
        'El corazón bombea sangre.',
        'Los pulmones permiten respirar.',
        'El cerebro coordina muchas funciones del cuerpo.',
      ],
    },

    'Materia y energía': {
      titulo: 'Materia y energía',
      explicacion:
        'La materia ocupa espacio y tiene masa, mientras que la energía permite producir cambios.',
      ejemplos: [
        'El hielo es materia en estado sólido.',
        'La luz solar es una forma de energía.',
        'El agua puede pasar de líquido a gas.',
      ],
    },

    'Ecosistemas': {
      titulo: 'Ecosistemas',
      explicacion:
        'Un ecosistema está formado por los seres vivos y el ambiente en el que interactúan.',
      ejemplos: [
        'Las plantas son productores.',
        'Los animales pueden ser consumidores.',
        'Los hongos pueden actuar como descomponedores.',
      ],
    },

    'Tierra y universo': {
      titulo: 'Tierra y universo',
      explicacion:
        'La Tierra forma parte del sistema solar y realiza movimientos como la rotación y la traslación.',
      ejemplos: [
        'La rotación produce el día y la noche.',
        'La traslación dura aproximadamente un año.',
        'La Tierra gira alrededor del Sol.',
      ],
    },
  }

  const leccionActualCiencias =
    leccionesCiencias[temaRuta] || leccionesCiencias['Seres vivos']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-ciencias')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
       <div className="result-header">
  <span className="result-badge">
    📘 Lección
  </span>

  <h1>
    Lección de {leccionActualCiencias.titulo}
  </h1>

  <p>
    Aprende los conceptos principales y revisa los ejemplos antes de comenzar la práctica.
  </p>
</div>

<div className="lesson-box">
  <h3>📖 Explicación</h3>
  <p>{leccionActualCiencias.explicacion}</p>
</div>

        <div className="geometry-review">
          {leccionActualCiencias.ejemplos.map((ejemplo, index) => (
            <div className="review-card" key={index}>
              <h3>Ejemplo {index + 1}</h3>
              <strong>{ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('practica-ciencias')}
>
  Ir a práctica →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'practica-ciencias') {
  const practicasCiencias = {
    'Seres vivos': {
      pregunta: '¿Cuál de estas afirmaciones sobre los seres vivos es correcta?',
      opciones: [
        'Todos realizan funciones vitales',
        'Todos pueden desplazarse',
        'Todos viven en el agua',
      ],
      correcta: 'Todos realizan funciones vitales',
      ayuda: 'Los seres vivos realizan funciones como nutrición, relación y reproducción.',
    },

    'Cuerpo humano': {
      pregunta: '¿Qué órgano bombea la sangre por el cuerpo?',
      opciones: [
        'Corazón',
        'Pulmón',
        'Cerebro',
      ],
      correcta: 'Corazón',
      ayuda: 'El corazón es el órgano principal del sistema circulatorio.',
    },

    'Materia y energía': {
      pregunta: '¿Cuál de estas opciones es un estado de la materia?',
      opciones: [
        'Líquido',
        'Luz',
        'Calor',
      ],
      correcta: 'Líquido',
      ayuda: 'Los estados más conocidos de la materia son sólido, líquido y gas.',
    },

    'Ecosistemas': {
      pregunta: '¿Cuál de estos organismos es un productor?',
      opciones: [
        'Planta',
        'León',
        'Hongo',
      ],
      correcta: 'Planta',
      ayuda: 'Los productores fabrican su propio alimento, normalmente mediante fotosíntesis.',
    },

    'Tierra y universo': {
      pregunta: '¿Qué movimiento de la Tierra origina el día y la noche?',
      opciones: [
        'Rotación',
        'Traslación',
        'Órbita de la Luna',
      ],
      correcta: 'Rotación',
      ayuda: 'La rotación es el giro de la Tierra sobre su propio eje.',
    },
  }

  const practicaActualCiencias =
    practicasCiencias[temaRuta] || practicasCiencias['Seres vivos']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-ciencias')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Práctica</span>

          <h1>Práctica de {temaRuta || 'Seres vivos'}</h1>

          <p>{practicaActualCiencias.pregunta}</p>
        </div>

        <div className="answer-grid">
          {practicaActualCiencias.opciones.map((opcion) => (
            <button
              key={opcion}
              className="answer-button"
              onClick={() => {
                if (opcion === practicaActualCiencias.correcta) {
                  alert('✅ ¡Correcto! Muy bien.')
                } else {
                  alert(
                    `❌ Inténtalo otra vez. ${practicaActualCiencias.ayuda}`
                  )
                }
              }}
            >
              {opcion}
            </button>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => {
    setPreguntaMini(0)
    setAciertosMini(0)
    setPantalla('mini-ciencias')
  }}
>
  Ir a mini evaluación →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'mini-ciencias') {
  const preguntasMiniCiencias = {
    'Seres vivos': [
  {
    pregunta: '¿Cuál es una función vital de los seres vivos?',
    opciones: [
      'Brillar',
      'Nutrición',
      'Volar',
    ],
    correcta: 'Nutrición',
  },
  {
    pregunta: '¿Cuál es la unidad básica de los seres vivos?',
    opciones: [
      'Órgano',
      'Planeta',
      'Célula',
    ],
    correcta: 'Célula',
  },
  {
    pregunta: '¿Cuál es un ejemplo de adaptación?',
    opciones: [
      'Un cactus almacena agua',
      'El agua hierve',
      'Una roca cambia de color',
    ],
    correcta: 'Un cactus almacena agua',
  },
],

    'Cuerpo humano': [
  {
    pregunta: '¿Qué órgano bombea la sangre?',
    opciones: [
      'Pulmón',
      'Corazón',
      'Estómago',
    ],
    correcta: 'Corazón',
  },
  {
    pregunta: '¿Qué sistema permite respirar?',
    opciones: [
      'Digestivo',
      'Óseo',
      'Respiratorio',
    ],
    correcta: 'Respiratorio',
  },
  {
    pregunta: '¿Qué órgano coordina muchas funciones del cuerpo?',
    opciones: [
      'Cerebro',
      'Riñón',
      'Hígado',
    ],
    correcta: 'Cerebro',
  },
],

   'Materia y energía': [
  {
    pregunta: '¿Cuál es un estado de la materia?',
    opciones: [
      'Luz',
      'Sólido',
      'Calor',
    ],
    correcta: 'Sólido',
  },
  {
    pregunta: '¿Cuál es una forma de energía?',
    opciones: [
      'Piedra',
      'Arena',
      'Luz solar',
    ],
    correcta: 'Luz solar',
  },
  {
    pregunta: '¿Qué ocurre cuando el hielo se derrite?',
    opciones: [
      'Pasa de sólido a líquido',
      'Desaparece',
      'Pasa de líquido a gas',
    ],
    correcta: 'Pasa de sólido a líquido',
  },
],

    'Ecosistemas': [
  {
    pregunta: '¿Cuál es un productor?',
    opciones: [
      'León',
      'Planta',
      'Hongo',
    ],
    correcta: 'Planta',
  },
  {
    pregunta: '¿Cuál es un consumidor?',
    opciones: [
      'Árbol',
      'Pasto',
      'Conejo',
    ],
    correcta: 'Conejo',
  },
  {
    pregunta: '¿Qué función cumplen muchos hongos?',
    opciones: [
      'Descomponen materia orgánica',
      'Crean oxígeno únicamente',
      'Producen luz solar',
    ],
    correcta: 'Descomponen materia orgánica',
  },
],

   'Tierra y universo': [
  {
    pregunta: '¿Qué movimiento produce el día y la noche?',
    opciones: [
      'Traslación',
      'Rotación',
      'Revolución lunar',
    ],
    correcta: 'Rotación',
  },
  {
    pregunta: '¿Alrededor de qué astro gira la Tierra?',
    opciones: [
      'Luna',
      'Marte',
      'Sol',
    ],
    correcta: 'Sol',
  },
  {
    pregunta: '¿Cuánto dura aproximadamente una traslación de la Tierra?',
    opciones: [
      'Un año',
      'Una semana',
      'Un día',
    ],
    correcta: 'Un año',
  },
],
  }

  const preguntasActualesCiencias =
    preguntasMiniCiencias[temaRuta] ||
    preguntasMiniCiencias['Seres vivos']

  const pregunta = preguntasActualesCiencias[preguntaMini]

  const responderMiniCiencias = (respuesta) => {
    const esCorrecta = respuesta === pregunta.correcta

    const nuevosAciertos = esCorrecta
      ? aciertosMini + 1
      : aciertosMini

    if (esCorrecta) {
      setAciertosMini(nuevosAciertos)
    }

    if (preguntaMini < preguntasActualesCiencias.length - 1) {
      setPreguntaMini(preguntaMini + 1)
   } else {
  setAciertosMini(nuevosAciertos)

  if (nuevosAciertos >= 2) {
    setTemasDominadosCiencias((anteriores) => {
      if (anteriores.includes(temaRuta)) {
        return anteriores
      }

      return [...anteriores, temaRuta]
    })
  }

  setPantalla('resultado-mini-ciencias')
}
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-ciencias')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Mini evaluación</span>

          <h1>{temaRuta || 'Seres vivos'}</h1>

          <p>
            Pregunta {preguntaMini + 1} de {preguntasActualesCiencias.length}
          </p>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderMiniCiencias(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini-ciencias') {
  const temaDominado = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-ciencias')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado</span>

          <h1>Resultado de {temaRuta || 'Seres vivos'}</h1>

          <p>
            Obtuviste {aciertosMini} de 3 respuestas correctas.
          </p>

          <h2>
            {temaDominado
              ? '✅ Tema dominado'
              : '📚 Sigue practicando'}
          </h2>
        </div>

        <button
  className="primary-button"
  onClick={() => {
    const siguienteTema = temasCiencias.find(
      (tema) => !temasDominadosCiencias.includes(tema)
    )

    if (siguienteTema) {
      setTemaRuta(siguienteTema)
    }

    setPantalla('ruta-ciencias')
  }}
>
  Volver a mi ruta →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'historia-diagnostico') {
  const pregunta = preguntasHistoria[preguntaActual]

  const responderHistoria = (respuesta) => {
    const nuevoResultado = {
      tema: pregunta.tema,
      correcta: respuesta === pregunta.correcta,
    }

    setResultadosHistoria((anteriores) => [
      ...anteriores,
      nuevoResultado,
    ])

    if (preguntaActual < preguntasHistoria.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setPantalla('resultado-historia')
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('inicio')}
        >
          Volver
        </button>
      </header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Diagnóstico de Historia</span>

          <h1>
            Pregunta {preguntaActual + 1} de {preguntasHistoria.length}
          </h1>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderHistoria(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-historia') {
  const aciertosHistoria = resultadosHistoria.filter(
    (resultado) => resultado.correcta
  ).length

  const primerTemaFallado = resultadosHistoria.find(
    (resultado) => !resultado.correcta
  )

  const temaRecomendadoHistoria =
    primerTemaFallado?.tema || temasHistoria[0]

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('inicio')}
        >
          Inicio
        </button>
      </header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado del diagnóstico</span>

          <h1>Tu nivel de Historia</h1>

          <p>
            Obtuviste {aciertosHistoria} de {preguntasHistoria.length} respuestas correctas.
          </p>

          <h2>Te recomendamos empezar por:</h2>

          <h1>{temaRecomendadoHistoria}</h1>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setTemaRuta(temaRecomendadoHistoria)
            setPantalla('ruta-historia')
          }}
        >
          Continuar con mi ruta →
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-historia') {
  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-historia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>Historia · {temaRuta || 'Civilizaciones antiguas'}</h1>

          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
        </div>
<div className="progress-card">
  <h3>Tu progreso</h3>

  <p>
    {temasDominadosHistoria.length} de {temasHistoria.length} temas dominados
  </p>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{
        width: `${Math.round(
          (temasDominadosHistoria.length / temasHistoria.length) * 100
        )}%`,
      }}
    ></div>
  </div>

  <strong>
    {Math.round(
      (temasDominadosHistoria.length / temasHistoria.length) * 100
    )}%
  </strong>
</div>
        <div className="learning-path">
          <div
            className="path-step clickable"
            onClick={() => setPantalla('repaso-historia')}
          >
            <span>1</span>
            <div>
              <strong>📖 Repaso breve</strong>
              <p>
                Conceptos principales de {temaRuta || 'Civilizaciones antiguas'}.
              </p>
            </div>
          </div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>
            <div>
              <strong>Mini evaluación</strong>
              <p>Comprueba si ya dominas el tema.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-historia') {
  const repasosHistoria = {
    'Civilizaciones antiguas': [
      {
        titulo: '🏺 Egipto',
        texto: 'La civilización egipcia se desarrolló alrededor del río Nilo.',
        ejemplo: 'Construyeron pirámides y desarrollaron la escritura jeroglífica.',
      },
      {
        titulo: '🏛️ Grecia',
        texto: 'La antigua Grecia destacó por su filosofía, política y cultura.',
        ejemplo: 'Atenas desarrolló una forma temprana de democracia.',
      },
      {
        titulo: '🦅 Roma',
        texto: 'Roma pasó de ser una ciudad a formar un gran imperio.',
        ejemplo: 'Los romanos construyeron caminos, acueductos y grandes ciudades.',
      },
    ],

    'Edad Media': [
      {
        titulo: '🏰 Feudalismo',
        texto: 'Fue un sistema social y económico basado en tierras y relaciones de dependencia.',
        ejemplo: 'Los señores feudales controlaban territorios llamados feudos.',
      },
      {
        titulo: '⚔️ Sociedad medieval',
        texto: 'La sociedad estaba organizada en grupos con funciones diferentes.',
        ejemplo: 'Nobles, clero y campesinos formaban parte de la sociedad medieval.',
      },
      {
        titulo: '⛪ Iglesia',
        texto: 'La Iglesia tuvo gran influencia en la vida cultural y social.',
        ejemplo: 'Los monasterios ayudaron a conservar muchos textos antiguos.',
      },
    ],

    'Edad Moderna': [
      {
        titulo: '🌎 Expansión europea',
        texto: 'Los europeos realizaron viajes de exploración hacia nuevos territorios.',
        ejemplo: 'Cristóbal Colón llegó a América en 1492.',
      },
      {
        titulo: '🎨 Renacimiento',
        texto: 'Fue un movimiento cultural que recuperó ideas de Grecia y Roma.',
        ejemplo: 'Leonardo da Vinci fue una figura destacada del Renacimiento.',
      },
      {
        titulo: '👑 Monarquías',
        texto: 'Durante esta etapa varias monarquías europeas fortalecieron su poder.',
        ejemplo: 'Los reyes concentraron cada vez más autoridad política.',
      },
    ],

    'Independencia del Perú': [
      {
        titulo: '🇵🇪 Proclamación',
        texto: 'La Independencia del Perú fue proclamada el 28 de julio de 1821.',
        ejemplo: 'José de San Martín proclamó la independencia en Lima.',
      },
      {
        titulo: '⚔️ Proceso independentista',
        texto: 'La independencia fue parte de un proceso más amplio en América del Sur.',
        ejemplo: 'Participaron fuerzas patriotas de distintos territorios.',
      },
      {
        titulo: '🏛️ Nuevo Estado',
        texto: 'Después de la independencia comenzó la construcción de un nuevo Estado.',
        ejemplo: 'El Perú dejó de formar parte del Virreinato español.',
      },
    ],

    'Perú republicano': [
      {
        titulo: '📜 República',
        texto: 'Después de la independencia, el Perú inició su etapa republicana.',
        ejemplo: 'Se organizaron nuevas instituciones políticas.',
      },
      {
        titulo: '⚖️ Gobiernos',
        texto: 'Durante la República hubo distintos gobiernos y cambios políticos.',
        ejemplo: 'El país tuvo presidentes, constituciones y conflictos internos.',
      },
      {
        titulo: '🇵🇪 Construcción nacional',
        texto: 'La historia republicana incluye cambios sociales, económicos y territoriales.',
        ejemplo: 'El Perú fue construyendo sus instituciones a lo largo del tiempo.',
      },
    ],
  }

  const contenidoHistoria =
    repasosHistoria[temaRuta] || repasosHistoria['Civilizaciones antiguas']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta-historia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Civilizaciones antiguas'}</h1>

          <p>Repasa los conceptos principales antes de continuar.</p>
        </div>

        <div className="geometry-review">
          {contenidoHistoria.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <strong>{item.ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('leccion-historia')}
>
  Continuar con mi lección →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-historia') {
  const leccionesHistoria = {
    'Civilizaciones antiguas': {
      titulo: 'Civilizaciones antiguas',
      explicacion:
        'Las civilizaciones antiguas desarrollaron formas de gobierno, escritura, comercio, religión y organización social que influyeron en muchas sociedades posteriores.',
      ejemplos: [
        'Egipto se desarrolló alrededor del río Nilo.',
        'Grecia destacó por la filosofía y la democracia.',
        'Roma formó uno de los imperios más importantes de la Antigüedad.',
      ],
    },

    'Edad Media': {
      titulo: 'Edad Media',
      explicacion:
        'La Edad Media fue un periodo de la historia europea en el que destacaron el feudalismo, la influencia de la Iglesia y la organización social en distintos estamentos.',
      ejemplos: [
        'Los señores feudales controlaban tierras llamadas feudos.',
        'Los campesinos trabajaban principalmente en actividades agrícolas.',
        'La Iglesia tuvo una gran influencia cultural y social.',
      ],
    },

    'Edad Moderna': {
      titulo: 'Edad Moderna',
      explicacion:
        'La Edad Moderna estuvo marcada por grandes cambios culturales, políticos y científicos, además de la expansión europea hacia otros continentes.',
      ejemplos: [
        'El Renacimiento impulsó el arte y el conocimiento.',
        'Los viajes europeos conectaron distintos continentes.',
        'Muchas monarquías fortalecieron su poder.',
      ],
    },

    'Independencia del Perú': {
      titulo: 'Independencia del Perú',
      explicacion:
        'La Independencia del Perú fue un proceso político y militar que puso fin al dominio colonial español y dio inicio a una nueva etapa en la historia del país.',
      ejemplos: [
        'José de San Martín proclamó la independencia en 1821.',
        'El proceso independentista involucró a distintos grupos y ejércitos.',
        'Después de la independencia comenzó la organización del nuevo Estado.',
      ],
    },

    'Perú republicano': {
      titulo: 'Perú republicano',
      explicacion:
        'El Perú republicano comprende la etapa iniciada después de la independencia, caracterizada por la formación de instituciones, gobiernos y cambios políticos, sociales y económicos.',
      ejemplos: [
        'El país comenzó a organizarse como una república.',
        'Se aprobaron distintas constituciones a lo largo del tiempo.',
        'La sociedad peruana atravesó importantes transformaciones.',
      ],
    },
  }

  const leccionActualHistoria =
    leccionesHistoria[temaRuta] ||
    leccionesHistoria['Civilizaciones antiguas']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-historia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
      <div className="result-header">
  <span className="result-badge">
    📘 Lección
  </span>

  <h1>
    Lección de {leccionActualHistoria.titulo}
  </h1>

  <p>
    Aprende los conceptos principales y revisa los ejemplos antes de comenzar la práctica.
  </p>
</div>

<div className="lesson-box">
  <h3>📖 Explicación</h3>
  <p>{leccionActualHistoria.explicacion}</p>
</div>

        <div className="geometry-review">
          {leccionActualHistoria.ejemplos.map((ejemplo, index) => (
            <div className="review-card" key={index}>
              <h3>Ejemplo {index + 1}</h3>
              <strong>{ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('practica-historia')}
>
  Ir a práctica →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'practica-historia') {
  const practicasHistoria = {
    'Civilizaciones antiguas': {
      pregunta: '¿Qué civilización se desarrolló alrededor del río Nilo?',
      opciones: [
        'Egipcia',
        'Romana',
        'Inca',
      ],
      correcta: 'Egipcia',
      ayuda: 'La civilización egipcia se desarrolló principalmente alrededor del río Nilo.',
    },

    'Edad Media': {
      pregunta: '¿Qué sistema fue característico de gran parte de la Edad Media?',
      opciones: [
        'Feudalismo',
        'Industrialización',
        'Democracia moderna',
      ],
      correcta: 'Feudalismo',
      ayuda: 'El feudalismo organizaba gran parte de la sociedad y la economía medieval.',
    },

    'Edad Moderna': {
      pregunta: '¿Qué movimiento cultural destacó durante la Edad Moderna?',
      opciones: [
        'Renacimiento',
        'Feudalismo',
        'Neolítico',
      ],
      correcta: 'Renacimiento',
      ayuda: 'El Renacimiento impulsó el arte, la ciencia y el estudio de las culturas clásicas.',
    },

    'Independencia del Perú': {
      pregunta: '¿En qué año se proclamó la Independencia del Perú?',
      opciones: [
        '1821',
        '1780',
        '1879',
      ],
      correcta: '1821',
      ayuda: 'José de San Martín proclamó la Independencia del Perú en 1821.',
    },

    'Perú republicano': {
      pregunta: '¿Qué etapa comenzó después de la independencia del Perú?',
      opciones: [
        'La República',
        'El Virreinato',
        'El Imperio incaico',
      ],
      correcta: 'La República',
      ayuda: 'Después de la independencia comenzó la etapa republicana del Perú.',
    },
  }

  const practicaActualHistoria =
    practicasHistoria[temaRuta] ||
    practicasHistoria['Civilizaciones antiguas']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-historia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Práctica</span>

          <h1>Práctica de {temaRuta || 'Civilizaciones antiguas'}</h1>

          <p>{practicaActualHistoria.pregunta}</p>
        </div>

        <div className="answer-grid">
          {practicaActualHistoria.opciones.map((opcion) => (
            <button
              key={opcion}
              className="answer-button"
              onClick={() => {
                if (opcion === practicaActualHistoria.correcta) {
                  alert('✅ ¡Correcto! Muy bien.')
                } else {
                  alert(
                    `❌ Inténtalo otra vez. ${practicaActualHistoria.ayuda}`
                  )
                }
              }}
            >
              {opcion}
            </button>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => {
    setPreguntaMini(0)
    setAciertosMini(0)
    setPantalla('mini-historia')
  }}
>
  Ir a mini evaluación →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'mini-historia') {
  const preguntasMiniHistoria = {
   'Civilizaciones antiguas': [
  {
    pregunta: '¿Qué río fue fundamental para la civilización egipcia?',
    opciones: [
      'Amazonas',
      'Rímac',
      'Nilo',
    ],
    correcta: 'Nilo',
  },
  {
    pregunta: '¿Qué ciudad griega destacó por el desarrollo de la democracia?',
    opciones: [
      'Atenas',
      'Roma',
      'Alejandría',
    ],
    correcta: 'Atenas',
  },
  {
    pregunta: '¿Qué civilización construyó una extensa red de caminos y acueductos?',
    opciones: [
      'Maya',
      'Romana',
      'Egipcia',
    ],
    correcta: 'Romana',
  },
],

    'Edad Media': [
  {
    pregunta: '¿Qué sistema fue característico de gran parte de la Edad Media?',
    opciones: [
      'Feudalismo',
      'Capitalismo industrial',
      'Comunismo',
    ],
    correcta: 'Feudalismo',
  },
  {
    pregunta: '¿Cómo se llamaban los territorios controlados por señores feudales?',
    opciones: [
      'Colonias',
      'Repúblicas',
      'Feudos',
    ],
    correcta: 'Feudos',
  },
  {
    pregunta: '¿Qué institución tuvo una gran influencia en la Europa medieval?',
    opciones: [
      'Las fábricas',
      'La Iglesia',
      'Los bancos centrales',
    ],
    correcta: 'La Iglesia',
  },
],

    'Edad Moderna': [
  {
    pregunta: '¿Qué movimiento cultural destacó durante la Edad Moderna?',
    opciones: [
      'Feudalismo',
      'Renacimiento',
      'Neolítico',
    ],
    correcta: 'Renacimiento',
  },
  {
    pregunta: '¿En qué año llegó Cristóbal Colón a América?',
    opciones: [
      '1492',
      '1821',
      '1914',
    ],
    correcta: '1492',
  },
  {
    pregunta: '¿Qué ocurrió con muchas monarquías durante la Edad Moderna?',
    opciones: [
      'Desaparecieron inmediatamente',
      'Fueron reemplazadas por el Imperio romano',
      'Fortalecieron su poder',
    ],
    correcta: 'Fortalecieron su poder',
  },
],
    'Independencia del Perú': [
  {
    pregunta: '¿En qué año se proclamó la Independencia del Perú?',
    opciones: [
      '1780',
      '1879',
      '1821',
    ],
    correcta: '1821',
  },
  {
    pregunta: '¿Quién proclamó la Independencia del Perú en Lima?',
    opciones: [
      'Miguel Grau',
      'José de San Martín',
      'Ramón Castilla',
    ],
    correcta: 'José de San Martín',
  },
  {
    pregunta: '¿Qué etapa terminó con el proceso de independencia?',
    opciones: [
      'El dominio colonial español',
      'La República',
      'El Imperio incaico',
    ],
    correcta: 'El dominio colonial español',
  },
],

    'Perú republicano': [
  {
    pregunta: '¿Qué etapa comenzó después de la independencia?',
    opciones: [
      'El Virreinato',
      'La República',
      'El Tahuantinsuyo',
    ],
    correcta: 'La República',
  },
  {
    pregunta: '¿Qué documento establece las principales normas de organización de un Estado?',
    opciones: [
      'Constitución',
      'Carta personal',
      'Novela',
    ],
    correcta: 'Constitución',
  },
  {
    pregunta: '¿Qué caracteriza a la historia republicana del Perú?',
    opciones: [
      'El inicio del Imperio romano',
      'La construcción de las pirámides',
      'Cambios políticos, sociales y económicos',
    ],
    correcta: 'Cambios políticos, sociales y económicos',
  },
],
  }

  const preguntasActualesHistoria =
    preguntasMiniHistoria[temaRuta] ||
    preguntasMiniHistoria['Civilizaciones antiguas']

  const pregunta = preguntasActualesHistoria[preguntaMini]

  const responderMiniHistoria = (respuesta) => {
    const esCorrecta = respuesta === pregunta.correcta

    const nuevosAciertos = esCorrecta
      ? aciertosMini + 1
      : aciertosMini

    if (esCorrecta) {
      setAciertosMini(nuevosAciertos)
    }

    if (preguntaMini < preguntasActualesHistoria.length - 1) {
      setPreguntaMini(preguntaMini + 1)
    } else {
  setAciertosMini(nuevosAciertos)

  if (nuevosAciertos >= 2) {
    setTemasDominadosHistoria((anteriores) => {
      if (anteriores.includes(temaRuta)) {
        return anteriores
      }

      return [...anteriores, temaRuta]
    })
  }

  setPantalla('resultado-mini-historia')
}
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-historia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Mini evaluación</span>

          <h1>{temaRuta || 'Civilizaciones antiguas'}</h1>

          <p>
            Pregunta {preguntaMini + 1} de {preguntasActualesHistoria.length}
          </p>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderMiniHistoria(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini-historia') {
  const temaDominado = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-historia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado</span>

          <h1>Resultado de {temaRuta || 'Civilizaciones antiguas'}</h1>

          <p>
            Obtuviste {aciertosMini} de 3 respuestas correctas.
          </p>

          <h2>
            {temaDominado
              ? '✅ Tema dominado'
              : '📚 Sigue practicando'}
          </h2>
        </div>

        <button
  className="primary-button"
  onClick={() => {
    const siguienteTema = temasHistoria.find(
      (tema) => !temasDominadosHistoria.includes(tema)
    )

    if (siguienteTema) {
      setTemaRuta(siguienteTema)
    }

    setPantalla('ruta-historia')
  }}
>
  Volver a mi ruta →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'geografia-diagnostico') {
  const pregunta = preguntasGeografia[preguntaActual]

  const responderGeografia = (respuesta) => {
    const nuevoResultado = {
      tema: pregunta.tema,
      correcta: respuesta === pregunta.correcta,
    }

    setResultadosGeografia((anteriores) => [
      ...anteriores,
      nuevoResultado,
    ])

    if (preguntaActual < preguntasGeografia.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setPantalla('resultado-geografia')
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('inicio')}
        >
          Volver
        </button>
      </header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Diagnóstico de Geografía</span>

          <h1>
            Pregunta {preguntaActual + 1} de {preguntasGeografia.length}
          </h1>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderGeografia(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-geografia') {
  const aciertosGeografia = resultadosGeografia.filter(
    (resultado) => resultado.correcta
  ).length

  const primerTemaFallado = resultadosGeografia.find(
    (resultado) => !resultado.correcta
  )

  const temaRecomendadoGeografia =
    primerTemaFallado?.tema || temasGeografia[0]

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('inicio')}
        >
          Inicio
        </button>
      </header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado del diagnóstico</span>

          <h1>Tu nivel de Geografía</h1>

          <p>
            Obtuviste {aciertosGeografia} de {preguntasGeografia.length} respuestas correctas.
          </p>

          <h2>Te recomendamos empezar por:</h2>

          <h1>{temaRecomendadoGeografia}</h1>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setTemaRuta(temaRecomendadoGeografia)
            setPantalla('ruta-geografia')
          }}
        >
          Continuar con mi ruta →
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-geografia') {
  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-geografia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>Geografía · {temaRuta || 'Relieve'}</h1>

          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
        </div>
<div className="progress-card">
  <h3>Tu progreso</h3>

  <p>
    {temasDominadosGeografia.length} de {temasGeografia.length} temas dominados
  </p>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{
        width: `${Math.round(
          (temasDominadosGeografia.length / temasGeografia.length) * 100
        )}%`,
      }}
    ></div>
  </div>

  <strong>
    {Math.round(
      (temasDominadosGeografia.length / temasGeografia.length) * 100
    )}%
  </strong>
</div>
        <div className="learning-path">
          <div
            className="path-step clickable"
            onClick={() => setPantalla('repaso-geografia')}
          >
            <span>1</span>
            <div>
              <strong>📖 Repaso breve</strong>
              <p>Conceptos principales de {temaRuta || 'Relieve'}.</p>
            </div>
          </div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>
            <div>
              <strong>Mini evaluación</strong>
              <p>Comprueba si ya dominas el tema.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-geografia') {
  const repasosGeografia = {
    'Relieve': [
      {
        titulo: '⛰️ Formas del relieve',
        texto: 'El relieve está formado por las distintas formas de la superficie terrestre.',
        ejemplo: 'Montañas, valles, mesetas y llanuras son formas del relieve.',
      },
      {
        titulo: '🌋 Formación',
        texto: 'El relieve puede formarse por movimientos internos de la Tierra y por la erosión.',
        ejemplo: 'Los volcanes y las placas tectónicas pueden modificar el relieve.',
      },
      {
        titulo: '🗺️ Importancia',
        texto: 'El relieve influye en el clima, los ríos y las actividades humanas.',
        ejemplo: 'Las montañas pueden dificultar el transporte.',
      },
    ],

    'Clima': [
      {
        titulo: '🌤️ Clima',
        texto: 'El clima representa las condiciones atmosféricas habituales de un lugar durante largos periodos.',
        ejemplo: 'Una región puede tener clima cálido, templado o frío.',
      },
      {
        titulo: '🌡️ Factores',
        texto: 'La altitud, latitud y cercanía al mar pueden influir en el clima.',
        ejemplo: 'En zonas altas suele hacer más frío.',
      },
      {
        titulo: '🌧️ Elementos',
        texto: 'La temperatura, las precipitaciones y el viento son elementos del clima.',
        ejemplo: 'La lluvia es una forma de precipitación.',
      },
    ],

    'Hidrografía': [
      {
        titulo: '🌊 Hidrografía',
        texto: 'La hidrografía estudia los cuerpos y corrientes de agua de la superficie terrestre.',
        ejemplo: 'Ríos, lagos y océanos forman parte de la hidrografía.',
      },
      {
        titulo: '🏞️ Ríos',
        texto: 'Los ríos transportan agua desde zonas altas hacia zonas más bajas.',
        ejemplo: 'El río Amazonas es uno de los más importantes del mundo.',
      },
      {
        titulo: '💧 Cuencas',
        texto: 'Una cuenca hidrográfica es el territorio cuyas aguas desembocan en un mismo río o cuerpo de agua.',
        ejemplo: 'Los afluentes forman parte de una cuenca.',
      },
    ],

    'Población': [
      {
        titulo: '👥 Población',
        texto: 'La población es el conjunto de personas que viven en un territorio.',
        ejemplo: 'Una ciudad puede tener millones de habitantes.',
      },
      {
        titulo: '🏙️ Densidad',
        texto: 'La densidad de población indica cuántos habitantes existen por unidad de superficie.',
        ejemplo: 'Las grandes ciudades suelen tener una densidad elevada.',
      },
      {
        titulo: '🚶 Migración',
        texto: 'La migración ocurre cuando las personas se trasladan de un lugar a otro para vivir.',
        ejemplo: 'Una persona puede migrar del campo a la ciudad.',
      },
    ],

    'Regiones del Perú': [
      {
        titulo: '🏖️ Costa',
        texto: 'La Costa se encuentra junto al océano Pacífico y presenta zonas desérticas y valles.',
        ejemplo: 'Lima se encuentra en la Costa.',
      },
      {
        titulo: '🏔️ Sierra',
        texto: 'La Sierra está atravesada por la cordillera de los Andes.',
        ejemplo: 'Cusco se encuentra en la región andina.',
      },
      {
        titulo: '🌳 Selva',
        texto: 'La Selva presenta abundante vegetación, ríos y gran biodiversidad.',
        ejemplo: 'Loreto forma parte de la Amazonía peruana.',
      },
    ],
  }

  const contenidoGeografia =
    repasosGeografia[temaRuta] || repasosGeografia['Relieve']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta-geografia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Relieve'}</h1>

          <p>Repasa los conceptos principales antes de continuar.</p>
        </div>

        <div className="geometry-review">
          {contenidoGeografia.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <strong>{item.ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('leccion-geografia')}
>
  Continuar con mi lección →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-geografia') {
  const leccionesGeografia = {
    'Relieve': {
      titulo: 'Relieve',
      explicacion:
        'El relieve es el conjunto de formas que presenta la superficie terrestre y se modifica por procesos internos y externos de la Tierra.',
      ejemplos: [
        'Las montañas son elevaciones naturales del terreno.',
        'Los valles suelen encontrarse entre montañas.',
        'La erosión puede modificar el relieve con el tiempo.',
      ],
    },

    'Clima': {
      titulo: 'Clima',
      explicacion:
        'El clima describe las condiciones atmosféricas habituales de un lugar durante largos periodos y depende de distintos factores geográficos.',
      ejemplos: [
        'La altitud puede hacer que una zona sea más fría.',
        'La cercanía al mar puede moderar las temperaturas.',
        'Las precipitaciones varían según la región.',
      ],
    },

    'Hidrografía': {
      titulo: 'Hidrografía',
      explicacion:
        'La hidrografía estudia la distribución y características de las aguas de la superficie terrestre, como ríos, lagos y océanos.',
      ejemplos: [
        'Los ríos transportan agua hacia zonas más bajas.',
        'Los lagos acumulan agua en depresiones del terreno.',
        'Una cuenca reúne aguas que desembocan en un mismo lugar.',
      ],
    },

    'Población': {
      titulo: 'Población',
      explicacion:
        'La geografía de la población estudia cómo se distribuyen las personas en el territorio y cómo cambian mediante fenómenos como la migración.',
      ejemplos: [
        'Las ciudades concentran grandes cantidades de población.',
        'La densidad compara habitantes con superficie.',
        'La migración cambia la distribución de la población.',
      ],
    },

    'Regiones del Perú': {
      titulo: 'Regiones del Perú',
      explicacion:
        'Tradicionalmente, el territorio peruano se estudia mediante tres grandes regiones geográficas: Costa, Sierra y Selva, cada una con características diferentes.',
      ejemplos: [
        'La Costa se ubica junto al océano Pacífico.',
        'La Sierra está marcada por la cordillera de los Andes.',
        'La Selva forma parte de la región amazónica.',
      ],
    },
  }

  const leccionActualGeografia =
    leccionesGeografia[temaRuta] || leccionesGeografia['Relieve']

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-geografia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
       <div className="result-header">
  <span className="result-badge">
    📘 Lección
  </span>

  <h1>
    Lección de {leccionActualGeografia.titulo}
  </h1>

  <p>
    Aprende los conceptos principales y revisa los ejemplos antes de comenzar la práctica.
  </p>
</div>

<div className="lesson-box">
  <h3>📖 Explicación</h3>
  <p>{leccionActualGeografia.explicacion}</p>
</div>

        <div className="geometry-review">
          {leccionActualGeografia.ejemplos.map((ejemplo, index) => (
            <div className="review-card" key={index}>
              <h3>Ejemplo {index + 1}</h3>
              <strong>{ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('practica-geografia')}
>
  Ir a práctica →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'practica-geografia') {
  const practicasGeografia = {
    'Relieve': {
      pregunta: '¿Cuál de estas opciones es una forma del relieve?',
      opciones: [
        'Montaña',
        'Temperatura',
        'Población',
      ],
      correcta: 'Montaña',
      ayuda: 'Las montañas, valles, mesetas y llanuras son formas del relieve.',
    },

    'Clima': {
      pregunta: '¿Qué factor puede influir en el clima de una región?',
      opciones: [
        'Altitud',
        'Cantidad de autos',
        'Nombre de la ciudad',
      ],
      correcta: 'Altitud',
      ayuda: 'La altitud influye en la temperatura y en otras condiciones climáticas.',
    },

    'Hidrografía': {
      pregunta: '¿Cuál de estos elementos forma parte de la hidrografía?',
      opciones: [
        'Río',
        'Montaña',
        'Desierto',
      ],
      correcta: 'Río',
      ayuda: 'La hidrografía estudia ríos, lagos, océanos y otros cuerpos de agua.',
    },

    'Población': {
      pregunta: '¿Qué indica la densidad de población?',
      opciones: [
        'Habitantes por unidad de superficie',
        'Cantidad de lluvias',
        'Altura del terreno',
      ],
      correcta: 'Habitantes por unidad de superficie',
      ayuda: 'La densidad relaciona la cantidad de habitantes con el área del territorio.',
    },

    'Regiones del Perú': {
      pregunta: '¿Cuál de estas es una región geográfica tradicional del Perú?',
      opciones: [
        'Sierra',
        'Atlántico',
        'Europa',
      ],
      correcta: 'Sierra',
      ayuda: 'Las tres regiones tradicionales son Costa, Sierra y Selva.',
    },
  }

  const practicaActualGeografia =
    practicasGeografia[temaRuta] || practicasGeografia['Relieve']

  return (
    <main className="diagnostic-page">
    <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-geografia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Práctica</span>

          <h1>Práctica de {temaRuta || 'Relieve'}</h1>

          <p>{practicaActualGeografia.pregunta}</p>
        </div>

        <div className="answer-grid">
          {practicaActualGeografia.opciones.map((opcion) => (
            <button
              key={opcion}
              className="answer-button"
              onClick={() => {
                if (opcion === practicaActualGeografia.correcta) {
                  alert('✅ ¡Correcto! Muy bien.')
                } else {
                  alert(
                    `❌ Inténtalo otra vez. ${practicaActualGeografia.ayuda}`
                  )
                }
              }}
            >
              {opcion}
            </button>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => {
    setPreguntaMini(0)
    setAciertosMini(0)
    setPantalla('mini-geografia')
  }}
>
  Ir a mini evaluación →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'mini-geografia') {
  const preguntasMiniGeografia = {
    'Relieve': [
  {
    pregunta: '¿Cuál de estas opciones es una forma del relieve?',
    opciones: [
      'Clima',
      'Montaña',
      'Población',
    ],
    correcta: 'Montaña',
  },
  {
    pregunta: '¿Qué proceso puede modificar el relieve con el tiempo?',
    opciones: [
      'Migración',
      'Urbanización',
      'Erosión',
    ],
    correcta: 'Erosión',
  },
  {
    pregunta: '¿Cuál de estas opciones es un valle?',
    opciones: [
      'Una zona baja entre elevaciones',
      'Una región muy poblada',
      'Una corriente de agua',
    ],
    correcta: 'Una zona baja entre elevaciones',
  },
],

    'Clima': [
  {
    pregunta: '¿Qué factor influye en el clima de una región?',
    opciones: [
      'Altitud',
      'Cantidad de autos',
      'Número de edificios',
    ],
    correcta: 'Altitud',
  },
  {
    pregunta: '¿Cuál es un elemento del clima?',
    opciones: [
      'Idioma',
      'Población',
      'Temperatura',
    ],
    correcta: 'Temperatura',
  },
  {
    pregunta: '¿Qué suele ocurrir con la temperatura al aumentar la altitud?',
    opciones: [
      'Siempre aumenta',
      'Disminuye',
      'No cambia nunca',
    ],
    correcta: 'Disminuye',
  },
],

   'Hidrografía': [
  {
    pregunta: '¿Qué estudia la hidrografía?',
    opciones: [
      'Las montañas',
      'Las ciudades',
      'Los cuerpos y corrientes de agua',
    ],
    correcta: 'Los cuerpos y corrientes de agua',
  },
  {
    pregunta: '¿Cuál de estos es un cuerpo de agua?',
    opciones: [
      'Lago',
      'Meseta',
      'Valle',
    ],
    correcta: 'Lago',
  },
  {
    pregunta: '¿Qué es una cuenca hidrográfica?',
    opciones: [
      'Una zona exclusivamente desértica',
      'Un territorio cuyas aguas desembocan en un mismo lugar',
      'Una región de alta densidad poblacional',
    ],
    correcta: 'Un territorio cuyas aguas desembocan en un mismo lugar',
  },
],

    'Población': [
  {
    pregunta: '¿Qué es la población?',
    opciones: [
      'La cantidad de montañas',
      'El conjunto de personas que viven en un territorio',
      'La temperatura de un lugar',
    ],
    correcta: 'El conjunto de personas que viven en un territorio',
  },
  {
    pregunta: '¿Qué indica la densidad de población?',
    opciones: [
      'Cantidad de ríos',
      'Habitantes por unidad de superficie',
      'Altura de una región',
    ],
    correcta: 'Habitantes por unidad de superficie',
  },
  {
    pregunta: '¿Qué es la migración?',
    opciones: [
      'El movimiento de los ríos',
      'El cambio del clima',
      'El traslado de personas de un lugar a otro',
    ],
    correcta: 'El traslado de personas de un lugar a otro',
  },
],

    'Regiones del Perú': [
  {
    pregunta: '¿Cuáles son las tres regiones tradicionales del Perú?',
    opciones: [
      'Costa, Sierra y Selva',
      'Norte, Centro y Sur',
      'Pacífico, Andes y Europa',
    ],
    correcta: 'Costa, Sierra y Selva',
  },
  {
    pregunta: '¿Qué región está atravesada por la cordillera de los Andes?',
    opciones: [
      'Costa',
      'Selva',
      'Sierra',
    ],
    correcta: 'Sierra',
  },
  {
    pregunta: '¿Qué región destaca por su gran biodiversidad amazónica?',
    opciones: [
      'Costa',
      'Selva',
      'Sierra',
    ],
    correcta: 'Selva',
  },
],
  }

  const preguntasActualesGeografia =
    preguntasMiniGeografia[temaRuta] ||
    preguntasMiniGeografia['Relieve']

  const pregunta = preguntasActualesGeografia[preguntaMini]

  const responderMiniGeografia = (respuesta) => {
    const esCorrecta = respuesta === pregunta.correcta

    const nuevosAciertos = esCorrecta
      ? aciertosMini + 1
      : aciertosMini

    if (esCorrecta) {
      setAciertosMini(nuevosAciertos)
    }

    if (preguntaMini < preguntasActualesGeografia.length - 1) {
      setPreguntaMini(preguntaMini + 1)
    } else {
  setAciertosMini(nuevosAciertos)

  if (nuevosAciertos >= 2) {
    setTemasDominadosGeografia((anteriores) => {
      if (anteriores.includes(temaRuta)) {
        return anteriores
      }

      return [...anteriores, temaRuta]
    })
  }

  setPantalla('resultado-mini-geografia')
}
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-geografia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Mini evaluación</span>

          <h1>{temaRuta || 'Relieve'}</h1>

          <p>
            Pregunta {preguntaMini + 1} de {preguntasActualesGeografia.length}
          </p>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderMiniGeografia(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini-geografia') {
  const temaDominado = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-geografia')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado</span>

          <h1>Resultado de {temaRuta || 'Relieve'}</h1>

          <p>
            Obtuviste {aciertosMini} de 3 respuestas correctas.
          </p>

          <h2>
            {temaDominado
              ? '✅ Tema dominado'
              : '📚 Sigue practicando'}
          </h2>
        </div>

        <button
  className="primary-button"
  onClick={() => {
    const siguienteTema = temasGeografia.find(
      (tema) => !temasDominadosGeografia.includes(tema)
    )

    if (siguienteTema) {
      setTemaRuta(siguienteTema)
    }

    setPantalla('ruta-geografia')
  }}
>
  Volver a mi ruta →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'dpsc-diagnostico') {
  const pregunta = preguntasDPSC[preguntaActual]

  const responderDPSC = (respuesta) => {
    const nuevoResultado = {
      tema: pregunta.tema,
      correcta: respuesta === pregunta.correcta,
    }

    setResultadosDPSC((anteriores) => [
      ...anteriores,
      nuevoResultado,
    ])

    if (preguntaActual < preguntasDPSC.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      setPantalla('resultado-dpsc')
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('inicio')}
        >
          Volver
        </button>
      </header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Diagnóstico de DPSC</span>

          <h1>
            Pregunta {preguntaActual + 1} de {preguntasDPSC.length}
          </h1>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderDPSC(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-dpsc') {
  const aciertosDPSC = resultadosDPSC.filter(
    (resultado) => resultado.correcta
  ).length

  const primerTemaFallado = resultadosDPSC.find(
    (resultado) => !resultado.correcta
  )

  const temaRecomendadoDPSC =
    primerTemaFallado?.tema || temasDPSC[0]

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('inicio')}
        >
          Inicio
        </button>
      </header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado del diagnóstico</span>

          <h1>Tu nivel de DPSC</h1>

          <p>
            Obtuviste {aciertosDPSC} de {preguntasDPSC.length} respuestas correctas.
          </p>

          <h2>Te recomendamos empezar por:</h2>

          <h1>{temaRecomendadoDPSC}</h1>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setTemaRuta(temaRecomendadoDPSC)
            setPantalla('ruta-dpsc')
          }}
        >
          Continuar con mi ruta →
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-dpsc') {
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-dpsc')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>DPSC · {temaRuta || 'Identidad personal'}</h1>

          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
        </div>
<div className="progress-card">
  <h3>Progreso del curso</h3>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{
        width: `${Math.round(
          (temasDominadosDPSC.length / temasDPSC.length) * 100
        )}%`,
      }}
    ></div>
  </div>

  <p>
    {Math.round(
      (temasDominadosDPSC.length / temasDPSC.length) * 100
    )}% completado
  </p>

  <p>
    {temasDominadosDPSC.length} de {temasDPSC.length} temas dominados
  </p>
</div>
        <div className="learning-path">
          <div
            className="path-step clickable"
            onClick={() => setPantalla('repaso-dpsc')}
          >
            <span>1</span>

            <div>
              <strong>📖 Repaso breve</strong>

              <p>
                Conceptos principales de {temaRuta || 'Identidad personal'}.
              </p>
            </div>
          </div>

          <div className="path-step">
            <span>2</span>

            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>

            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>

            <div>
              <strong>Mini evaluación</strong>
              <p>Comprueba si ya dominas el tema.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'repaso-dpsc') {
  const repasosDPSC = {
    'Identidad personal': [
      {
        titulo: '🧍 Identidad',
        texto: 'La identidad personal está formada por nuestras características, experiencias, valores y decisiones.',
        ejemplo: 'Nuestros gustos, metas y forma de pensar forman parte de quiénes somos.',
      },
      {
        titulo: '💭 Autoconocimiento',
        texto: 'Conocernos nos ayuda a reconocer nuestras fortalezas y aspectos por mejorar.',
        ejemplo: 'Identificar qué hacemos bien puede ayudarnos a tomar mejores decisiones.',
      },
      {
        titulo: '🌱 Desarrollo personal',
        texto: 'Nuestra identidad puede desarrollarse y cambiar a lo largo de la vida.',
        ejemplo: 'Nuevas experiencias pueden cambiar nuestros intereses y objetivos.',
      },
    ],

    'Emociones y autoestima': [
      {
        titulo: '😊 Emociones',
        texto: 'Las emociones son respuestas que experimentamos ante diferentes situaciones.',
        ejemplo: 'Podemos sentir alegría, tristeza, miedo o enojo.',
      },
      {
        titulo: '💙 Autoestima',
        texto: 'La autoestima es la valoración que tenemos de nosotros mismos.',
        ejemplo: 'Reconocer nuestras capacidades ayuda a fortalecer la autoestima.',
      },
      {
        titulo: '🧠 Manejo emocional',
        texto: 'Aprender a reconocer y expresar nuestras emociones favorece nuestro bienestar.',
        ejemplo: 'Hablar sobre cómo nos sentimos puede ayudarnos a resolver un problema.',
      },
    ],

    'Convivencia': [
      {
        titulo: '🤝 Respeto',
        texto: 'El respeto permite convivir reconociendo los derechos y opiniones de otras personas.',
        ejemplo: 'Escuchar sin interrumpir demuestra respeto.',
      },
      {
        titulo: '💬 Diálogo',
        texto: 'El diálogo ayuda a resolver conflictos de manera pacífica.',
        ejemplo: 'Dos compañeros pueden conversar para encontrar una solución.',
      },
      {
        titulo: '🫂 Empatía',
        texto: 'La empatía consiste en intentar comprender cómo se sienten otras personas.',
        ejemplo: 'Apoyar a un compañero preocupado demuestra empatía.',
      },
    ],

    'Derechos y deberes': [
      {
        titulo: '⚖️ Derechos',
        texto: 'Los derechos protegen la dignidad y el bienestar de todas las personas.',
        ejemplo: 'Los niños y adolescentes tienen derecho a la educación.',
      },
      {
        titulo: '📋 Deberes',
        texto: 'Los deberes son responsabilidades que debemos cumplir para convivir adecuadamente.',
        ejemplo: 'Respetar las normas de convivencia es un deber.',
      },
      {
        titulo: '🌍 Responsabilidad',
        texto: 'Ejercer nuestros derechos también implica respetar los derechos de los demás.',
        ejemplo: 'Podemos expresar una opinión sin agredir a otra persona.',
      },
    ],

    'Ciudadanía y participación': [
      {
        titulo: '🏛️ Ciudadanía',
        texto: 'La ciudadanía implica formar parte de una comunidad con derechos y responsabilidades.',
        ejemplo: 'Cuidar los espacios públicos es una acción ciudadana.',
      },
      {
        titulo: '🙋 Participación',
        texto: 'Participar significa involucrarnos en decisiones y actividades de nuestra comunidad.',
        ejemplo: 'Proponer mejoras para el colegio es una forma de participación.',
      },
      {
        titulo: '🗳️ Democracia',
        texto: 'La democracia promueve la participación, el diálogo y el respeto por las decisiones colectivas.',
        ejemplo: 'Elegir representantes escolares mediante votación es una práctica democrática.',
      },
    ],
  }

  const contenidoDPSC =
    repasosDPSC[temaRuta] || repasosDPSC['Identidad personal']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('ruta-dpsc')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Repaso breve</span>

          <h1>{temaRuta || 'Identidad personal'}</h1>

          <p>Repasa los conceptos principales antes de continuar.</p>
        </div>

        <div className="geometry-review">
          {contenidoDPSC.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <strong>{item.ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('leccion-dpsc')}
>
  Continuar con mi lección →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'leccion-dpsc') {
  const leccionesDPSC = {
    'Identidad personal': {
      titulo: 'Identidad personal',
      explicacion:
        'La identidad personal se construye a partir de nuestras características, experiencias, valores, decisiones y relaciones con otras personas.',
      ejemplos: [
        'Nuestros gustos y metas forman parte de nuestra identidad.',
        'Las experiencias pueden ayudarnos a conocernos mejor.',
        'Nuestros valores influyen en las decisiones que tomamos.',
      ],
    },

    'Emociones y autoestima': {
      titulo: 'Emociones y autoestima',
      explicacion:
        'Reconocer nuestras emociones y valorar nuestras capacidades nos ayuda a desarrollar una autoestima saludable y a relacionarnos mejor con los demás.',
      ejemplos: [
        'Identificar que estamos enojados puede ayudarnos a calmarnos antes de actuar.',
        'Reconocer nuestras fortalezas mejora la confianza en nosotros mismos.',
        'Aceptar los errores como oportunidades de aprendizaje fortalece la autoestima.',
      ],
    },

    'Convivencia': {
      titulo: 'Convivencia',
      explicacion:
        'La convivencia requiere respeto, empatía, diálogo y responsabilidad para resolver conflictos de manera pacífica y mantener relaciones saludables.',
      ejemplos: [
        'Escuchar las opiniones de otros favorece el respeto.',
        'El diálogo puede ayudar a solucionar un desacuerdo.',
        'Ponerse en el lugar de otra persona demuestra empatía.',
      ],
    },

    'Derechos y deberes': {
      titulo: 'Derechos y deberes',
      explicacion:
        'Todas las personas tienen derechos que deben ser respetados y también deberes que ayudan a mantener una convivencia justa y responsable.',
      ejemplos: [
        'Tenemos derecho a recibir educación.',
        'Tenemos el deber de respetar los derechos de otras personas.',
        'Cumplir las normas de convivencia es una responsabilidad.',
      ],
    },

    'Ciudadanía y participación': {
      titulo: 'Ciudadanía y participación',
      explicacion:
        'Ser ciudadano implica participar responsablemente en nuestra comunidad, respetar las normas y contribuir al bienestar colectivo.',
      ejemplos: [
        'Participar en una elección escolar es una forma de participación.',
        'Proponer soluciones para mejorar el colegio demuestra ciudadanía activa.',
        'Cuidar los espacios públicos beneficia a toda la comunidad.',
      ],
    },
  }

  const leccionActualDPSC =
    leccionesDPSC[temaRuta] || leccionesDPSC['Identidad personal']

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('repaso-dpsc')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
       <div className="result-header">
  <span className="result-badge">
    📘 Lección
  </span>

  <h1>
    Lección de {leccionActualDPSC.titulo}
  </h1>

  <p>
    Aprende los conceptos principales y revisa los ejemplos antes de comenzar la práctica.
  </p>
</div>

<div className="lesson-box">
  <h3>📖 Explicación</h3>
  <p>{leccionActualDPSC.explicacion}</p>
</div>

        <div className="geometry-review">
          {leccionActualDPSC.ejemplos.map((ejemplo, index) => (
            <div className="review-card" key={index}>
              <h3>Ejemplo {index + 1}</h3>
              <strong>{ejemplo}</strong>
            </div>
          ))}
        </div>
        <button
  className="primary-button"
  onClick={() => setPantalla('practica-dpsc')}
>
  Ir a práctica →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'practica-dpsc') {
  const practicasDPSC = {
    'Identidad personal': {
      pregunta: '¿Cuál de estas acciones ayuda al autoconocimiento?',
      opciones: [
        'Reconocer nuestras fortalezas y aspectos por mejorar',
        'Compararnos constantemente con otras personas',
        'Evitar pensar en nuestras decisiones',
      ],
      correcta: 'Reconocer nuestras fortalezas y aspectos por mejorar',
      ayuda:
        'El autoconocimiento consiste en comprender nuestras características, capacidades y aspectos que podemos mejorar.',
    },

    'Emociones y autoestima': {
      pregunta: '¿Qué podemos hacer ante una emoción intensa?',
      opciones: [
        'Reconocerla y pensar antes de actuar',
        'Ignorarla siempre',
        'Reaccionar inmediatamente sin pensar',
      ],
      correcta: 'Reconocerla y pensar antes de actuar',
      ayuda:
        'Reconocer una emoción nos permite regular mejor nuestra reacción y tomar decisiones más responsables.',
    },

    'Convivencia': {
      pregunta: '¿Qué ayuda a resolver un conflicto de manera adecuada?',
      opciones: [
        'Dialogar con respeto',
        'Responder con agresividad',
        'Evitar escuchar a la otra persona',
      ],
      correcta: 'Dialogar con respeto',
      ayuda:
        'El diálogo permite escuchar diferentes puntos de vista y buscar soluciones pacíficas.',
    },

    'Derechos y deberes': {
      pregunta: '¿Cuál de estas afirmaciones es correcta?',
      opciones: [
        'Los derechos van acompañados de responsabilidades',
        'Las personas solamente tienen derechos',
        'Los deberes no tienen relación con la convivencia',
      ],
      correcta: 'Los derechos van acompañados de responsabilidades',
      ayuda:
        'Ejercer nuestros derechos también implica respetar los derechos de los demás y cumplir responsabilidades.',
    },

    'Ciudadanía y participación': {
      pregunta: '¿Cuál es un ejemplo de participación ciudadana?',
      opciones: [
        'Colaborar responsablemente en asuntos de la comunidad',
        'Ignorar los problemas de nuestro entorno',
        'Evitar participar en cualquier decisión colectiva',
      ],
      correcta: 'Colaborar responsablemente en asuntos de la comunidad',
      ayuda:
        'La participación ciudadana significa involucrarse responsablemente en acciones y decisiones que benefician a la comunidad.',
    },
  }

  const practicaActualDPSC =
    practicasDPSC[temaRuta] || practicasDPSC['Identidad personal']

  const responderPracticaDPSC = (respuesta) => {
    if (respuesta === practicaActualDPSC.correcta) {
      alert('✅ ¡Correcto!')
    } else {
      alert(`❌ Aún no. ${practicaActualDPSC.ayuda}`)
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('leccion-dpsc')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Práctica</span>

          <h1>{temaRuta || 'Identidad personal'}</h1>
        </div>

        <div className="question-card">
          <h2>{practicaActualDPSC.pregunta}</h2>

          <div className="answer-grid">
            {practicaActualDPSC.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderPracticaDPSC(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
        <button
  className="primary-button"
  onClick={() => {
    setPreguntaMini(0)
    setAciertosMini(0)
    setPantalla('mini-dpsc')
  }}
>
  Ir a mini evaluación →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'mini-dpsc') {
  const preguntasMiniDPSC = {
    'Identidad personal': [
  {
    pregunta: '¿Qué forma parte de nuestra identidad personal?',
    opciones: [
      'Solo nuestra edad',
      'Nuestros valores y experiencias',
      'Solo nuestra apariencia',
    ],
    correcta: 'Nuestros valores y experiencias',
  },
  {
    pregunta: '¿Qué favorece el autoconocimiento?',
    opciones: [
      'Reconocer fortalezas y aspectos por mejorar',
      'Compararnos siempre con otras personas',
      'Evitar reflexionar sobre nosotros mismos',
    ],
    correcta: 'Reconocer fortalezas y aspectos por mejorar',
  },
  {
    pregunta: '¿Nuestra identidad puede cambiar con el tiempo?',
    opciones: [
      'Solo cambia nuestra apariencia',
      'No, nunca cambia',
      'Sí, puede desarrollarse con nuevas experiencias',
    ],
    correcta: 'Sí, puede desarrollarse con nuevas experiencias',
  },
],

   'Emociones y autoestima': [
  {
    pregunta: '¿Qué es la autoestima?',
    opciones: [
      'Pensar que somos mejores que todos',
      'No aceptar nuestros errores',
      'La valoración que tenemos de nosotros mismos',
    ],
    correcta: 'La valoración que tenemos de nosotros mismos',
  },
  {
    pregunta: '¿Qué ayuda a manejar una emoción intensa?',
    opciones: [
      'Ignorarla siempre',
      'Reconocerla antes de actuar',
      'Reaccionar inmediatamente',
    ],
    correcta: 'Reconocerla antes de actuar',
  },
  {
    pregunta: '¿Qué fortalece una autoestima saludable?',
    opciones: [
      'Reconocer nuestras capacidades',
      'No aceptar ninguna crítica',
      'Compararnos constantemente',
    ],
    correcta: 'Reconocer nuestras capacidades',
  },
],

   'Convivencia': [
  {
    pregunta: '¿Qué favorece una buena convivencia?',
    opciones: [
      'La agresividad',
      'El respeto',
      'Ignorar a los demás',
    ],
    correcta: 'El respeto',
  },
  {
    pregunta: '¿Cómo podemos resolver un conflicto?',
    opciones: [
      'Mediante insultos',
      'Evitando escuchar',
      'Mediante el diálogo',
    ],
    correcta: 'Mediante el diálogo',
  },
  {
    pregunta: '¿Qué significa tener empatía?',
    opciones: [
      'Intentar comprender cómo se siente otra persona',
      'Pensar únicamente en nosotros',
      'Estar siempre de acuerdo con todos',
    ],
    correcta: 'Intentar comprender cómo se siente otra persona',
  },
],

    'Derechos y deberes': [
  {
    pregunta: '¿Qué protegen los derechos?',
    opciones: [
      'La dignidad y bienestar de las personas',
      'Solo los intereses de los adultos',
      'Únicamente las normas escolares',
    ],
    correcta: 'La dignidad y bienestar de las personas',
  },
  {
    pregunta: '¿Qué son los deberes?',
    opciones: [
      'Beneficios que recibimos',
      'Decisiones opcionales sin importancia',
      'Responsabilidades que debemos cumplir',
    ],
    correcta: 'Responsabilidades que debemos cumplir',
  },
  {
    pregunta: '¿Cuál es una relación correcta entre derechos y deberes?',
    opciones: [
      'Los derechos eliminan todos los deberes',
      'Debemos ejercer nuestros derechos respetando los de los demás',
      'Los deberes solo corresponden a adultos',
    ],
    correcta:
      'Debemos ejercer nuestros derechos respetando los de los demás',
  },
],

    'Ciudadanía y participación': [
  {
    pregunta: '¿Qué significa participar como ciudadano?',
    opciones: [
      'Ignorar los problemas comunes',
      'Evitar todas las decisiones colectivas',
      'Involucrarse responsablemente en la comunidad',
    ],
    correcta: 'Involucrarse responsablemente en la comunidad',
  },
  {
    pregunta: '¿Cuál es una acción de ciudadanía responsable?',
    opciones: [
      'Cuidar los espacios públicos',
      'No respetar las normas',
      'Dañar los bienes de la comunidad',
    ],
    correcta: 'Cuidar los espacios públicos',
  },
  {
    pregunta: '¿Cuál es un ejemplo de participación democrática?',
    opciones: [
      'Imponer una decisión sin escuchar a nadie',
      'Elegir representantes mediante una votación',
      'Evitar participar en cualquier actividad',
    ],
    correcta: 'Elegir representantes mediante una votación',
  },
],
  }

  const preguntasActualesDPSC =
    preguntasMiniDPSC[temaRuta] || preguntasMiniDPSC['Identidad personal']

  const pregunta = preguntasActualesDPSC[preguntaMini]

  const responderMiniDPSC = (respuesta) => {
    const esCorrecta = respuesta === pregunta.correcta
    const nuevosAciertos = aciertosMini + (esCorrecta ? 1 : 0)

    setAciertosMini(nuevosAciertos)

    if (preguntaMini < preguntasActualesDPSC.length - 1) {
  setPreguntaMini(preguntaMini + 1)
} else {
  if (nuevosAciertos >= 2) {
    setTemasDominadosDPSC((anteriores) => {
      if (anteriores.includes(temaRuta)) {
        return anteriores
      }

      return [...anteriores, temaRuta]
    })
  }

  setPantalla('resultado-mini-dpsc')
}
  }

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('practica-dpsc')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="diagnostic-container">
        <div className="diagnostic-header">
          <span className="result-badge">Mini evaluación</span>

          <h1>
            Pregunta {preguntaMini + 1} de {preguntasActualesDPSC.length}
          </h1>
        </div>

        <div className="question-card">
          <h2>{pregunta.pregunta}</h2>

          <div className="answer-grid">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                className="answer-button"
                onClick={() => responderMiniDPSC(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-mini-dpsc') {
  const aprobadoDPSC = aciertosMini >= 2

  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('mini-dpsc')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Resultado</span>

          <h1>
            Obtuviste {aciertosMini} de 3
          </h1>

          {aprobadoDPSC ? (
            <>
              <h2>✅ ¡Tema dominado!</h2>
              <p>
                Has demostrado un buen dominio de {temaRuta}.
              </p>
            </>
          ) : (
            <>
              <h2>📚 Sigue practicando</h2>
              <p>
                Te recomendamos repasar nuevamente {temaRuta}.
              </p>
            </>
          )}
        </div>

        <button
  className="primary-button"
  onClick={() => {
    const siguienteTema = temasDPSC.find(
      (tema) => !temasDominadosDPSC.includes(tema)
    )

    if (siguienteTema) {
      setTemaRuta(siguienteTema)
    }

    setPantalla('ruta-dpsc')
  }}
>
  Continuar con mi ruta →
</button>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-mate') {
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-mate')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>Matemática · {temaRuta || 'Matemática'}</h1>
{temasDominados.includes('Geometría') && (
  <div className="result-badge">
    ✅ Geometría dominada
  </div>
)}
          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
       <div className="course-progress">
  <div className="progress-info">
    <strong>Progreso de Matemática</strong>
    <span>
  {Math.round((temasDominados.length / temasMate.length) * 100)}%
</span>
  </div>

  <div className="progress-track">
    <div
      className="progress-fill"
      style={{
  width: `${Math.round(
    (temasDominados.length / temasMate.length) * 100
  )}%`,
}}
    ></div>
  </div>

  <p>
    {temasDominados.length} de {temasMate.length} temas dominados
  </p>
</div>
        </div>

        <div className="learning-path">
          <div
  className="path-step clickable"
  onClick={() => setPantalla('repaso-tema')}
>
  <span>1</span>
  <div>
    <strong>📖 Repaso breve</strong>
    <p>Conceptos principales de {temaRuta || 'Matemática'}.</p>
  </div>
</div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
  <span>
    {temasDominados.includes('Geometría') ? '✓' : '4'}
  </span>

  <div>
    <strong>
      {temasDominados.includes('Geometría')
        ? 'Mini evaluación completada'
        : 'Mini evaluación'}
    </strong>

    <p>
      {temasDominados.includes('Geometría')
        ? '¡Excelente! Has demostrado que dominas Geometría.'
        : 'Comprueba si ya dominas el tema.'}
    </p>
  </div>
</div>
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'ruta-ingles') {
  return (
    <main className="diagnostic-page">
     <header className="navbar">
  <div className="brand">
    🏠 EDUAI
  </div>

  <div className="navbar-actions">
    <button
      className="login-button"
      onClick={volverInicio}
    >
      🏠 Inicio
    </button>

    <button
      className="login-button"
      onClick={() => setPantalla('resultado-ingles')}
    >
      ← Volver
    </button>
  </div>
</header>

      <section className="result-container">
        <div className="result-header">
          <span className="result-badge">Ruta recomendada</span>

          <h1>Inglés · {temaRuta || 'Present Simple'}</h1>
<div className="course-progress">
  <div className="progress-info">
    <strong>Progreso de Inglés</strong>

    <span>
      {Math.round(
        (temasDominadosIngles.length / temasIngles.length) * 100
      )}%
    </span>
  </div>

  <div className="progress-track">
    <div
      className="progress-fill"
      style={{
        width: `${Math.round(
          (temasDominadosIngles.length / temasIngles.length) * 100
        )}%`,
      }}
    ></div>
  </div>

  <p>
    {temasDominadosIngles.length} de {temasIngles.length} temas dominados
  </p>
</div>
          <p>
            Esta ruta fue seleccionada según los resultados de tu diagnóstico.
          </p>
        </div>

        <div className="learning-path">
          <div
            className="path-step clickable"
            onClick={() => setPantalla('repaso-ingles')}
          >
            <span>1</span>
            <div>
              <strong>📖 Repaso breve</strong>
              <p>Conceptos principales de {temaRuta || 'Present Simple'}.</p>
            </div>
          </div>

          <div className="path-step">
            <span>2</span>
            <div>
              <strong>Lección</strong>
              <p>Aprende paso a paso con ejemplos sencillos.</p>
            </div>
          </div>

          <div className="path-step">
            <span>3</span>
            <div>
              <strong>Práctica</strong>
              <p>Resuelve ejercicios para comprobar lo aprendido.</p>
            </div>
          </div>

          <div className="path-step">
            <span>4</span>
            <div>
              <strong>Mini evaluación</strong>
              <p>Comprueba si ya dominas el tema.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
  if (pantalla === 'mate-diagnostico') {
    return (
      <main className="diagnostic-page">
        <header className="navbar">
          <div className="brand">EDUAI</div>

          <button
            className="login-button"
            onClick={() => setPantalla('diagnostico')}
          >
            Volver
          </button>
        </header>

        <section className="question-container">
          <p className="question-progress">
            Pregunta {preguntaActual + 1} de {preguntasMate.length}
          </p>

          <h1>
            {preguntasMate[preguntaActual].pregunta}
          </h1>

          <div className="answer-grid">
            {preguntasMate[preguntaActual].opciones.map(
              (opcion) => (
                <button
                  key={opcion}
                  onClick={() => responder(opcion)}
                >
                  {opcion}
                </button>
              )
            )}
          </div>
        </section>
      </main>
    )
  }
if (pantalla === 'diagnostico-ingles') {
  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <button
          className="login-button"
          onClick={() => setPantalla('diagnostico')}
        >
          Volver
        </button>
      </header>

      <section className="diagnostic-container">
        <span className="tag">English Diagnostic</span>

        <h1>Diagnóstico de Inglés</h1>

        <p>
          Responde algunas preguntas para identificar qué temas dominas
          y cuáles necesitas reforzar.
        </p>

        <div className="result-message">
          <strong>Temas que evaluaremos</strong>

          {temasIngles.map((tema) => (
            <p key={tema}>🇬🇧 {tema}</p>
          ))}
        </div>

        <button
          className="primary-button"
          onClick={() => setPantalla('preguntas-ingles')}
        >
          Comenzar diagnóstico →
        </button>
      </section>
    </main>
  )
}
if (pantalla === 'preguntas-ingles') {
  const pregunta = preguntasIngles[preguntaIngles]

  const responderIngles = (opcion) => {
    const esCorrecta = opcion === pregunta.correcta

    if (esCorrecta) {
      setAciertosIngles((anteriores) => anteriores + 1)
    }

    setResultadosIngles((anteriores) => [
      ...anteriores,
      {
        tema: pregunta.tema,
        correcta: esCorrecta,
      },
    ])

    if (preguntaIngles < preguntasIngles.length - 1) {
      setPreguntaIngles((anterior) => anterior + 1)
    } else {
      setPantalla('resultado-ingles')
    }
  }

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>
      </header>

      <section className="diagnostic-container">
        <span className="tag">
          Pregunta {preguntaIngles + 1} de {preguntasIngles.length}
        </span>

        <h1>{pregunta.tema}</h1>

        <p>{pregunta.pregunta}</p>

        <div className="answer-grid">
          {pregunta.opciones.map((opcion) => (
            <button
              key={opcion}
              className="answer-button"
              onClick={() => responderIngles(opcion)}
            >
              {opcion}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
if (pantalla === 'resultado-ingles') {
  const temasPorReforzar = resultadosIngles
    .filter((resultado) => !resultado.correcta)
    .map((resultado) => resultado.tema)

  const temaRecomendado =
    temasPorReforzar[0] || temasIngles[0]

  return (
    <main className="diagnostic-page">
      <header className="navbar">
        <div className="brand">EDUAI</div>
      </header>

      <section className="diagnostic-container">
        <span className="tag">Resultado del diagnóstico</span>

        <h1>Tu nivel de Inglés</h1>

        <p>
          Obtuviste {aciertosIngles} de {preguntasIngles.length} respuestas correctas.
        </p>

        <div className="result-message">
          <strong>Te recomendamos empezar por:</strong>
          <h2>{temaRecomendado}</h2>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setTemaRuta(temaRecomendado)
            setPantalla('ruta-ingles')
          }}
        >
          Continuar con mi ruta →
        </button>
      </section>
    </main>
  )
}
  if (pantalla === 'diagnostico') {
    return (
      <main className="diagnostic-page">
        <header className="navbar">
          <div className="brand">EDUAI</div>

          <button
            className="login-button"
            onClick={() => setPantalla('inicio')}
          >
            Volver
          </button>
        </header>

        <section className="diagnostic-container">
          <span className="tag">Evaluación inicial</span>

          <h1>¿Qué curso quieres evaluar?</h1>

          <p>
            Realiza un diagnóstico para conocer tus fortalezas,
            los temas que necesitas reforzar y crear tu ruta personalizada.
          </p>

          <div className="diagnostic-grid">
            <button
              className="diagnostic-card"
              onClick={iniciarMate}
            >
              <span>🧮</span>
              <strong>Matemática</strong>
              <small>Iniciar diagnóstico</small>
            </button>

            <button className="diagnostic-card">
              <span>📖</span>
              <strong>Comunicación</strong>
              <small>Próximamente</small>
            </button>

           <button
  className="diagnostic-card"
  onClick={() => {
    setCursoActual('Inglés')
    setPantalla('diagnostico-ingles')
  }}
>
  <span>🗣️</span>
  <strong>Inglés</strong>
  <small>Iniciar diagnóstico</small>
</button>

            <button className="diagnostic-card">
              <span>🔬</span>
              <strong>Ciencias</strong>
              <small>Próximamente</small>
            </button>

            <button className="diagnostic-card">
              <span>🏛️</span>
              <strong>Historia</strong>
              <small>Próximamente</small>
            </button>

            <button className="diagnostic-card">
              <span>🌎</span>
              <strong>Geografía</strong>
              <small>Próximamente</small>
            </button>

            <button className="diagnostic-card">
              <span>🤝</span>
              <strong>DPSC</strong>
              <small>Próximamente</small>
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="home">
      <header className="navbar">
        <div className="brand">EDUAI</div>

        <nav>
          <a href="#cursos">Cursos</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#progreso">Progreso</a>
        </nav>

        <button className="login-button">
          Iniciar sesión
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <span className="tag">
            Aprendizaje personalizado con IA
          </span>

          <h1>
            Aprende a tu ritmo.
            <br />
            Mejora con cada paso.
          </h1>

          <p>
            Descubre tu nivel, aprende con contenido seleccionado
            y recibe recomendaciones personalizadas según tu progreso.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => setPantalla('diagnostico')}
            >
              Comenzar diagnóstico
            </button>

            <button className="secondary-button">
              Explorar cursos
            </button>
          </div>
        </div>

        <div className="demo-card">
          <p className="small-title">Tu progreso</p>

          <h2>Matemática</h2>

          <div className="progress-info">
            <span>Diagnóstico inicial</span>
            <strong>58%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="progress-info">
            <span>Nivel actual</span>
            <strong>76%</strong>
          </div>

          <div className="improvement">
            ↑ +18 puntos
          </div>

          <div className="recommendation">
            <strong>Recomendación IA</strong>

            <p>
              Refuerza ecuaciones antes de continuar
              con el siguiente tema.
            </p>
          </div>
        </div>
      </section>

      <section
        className="courses-section"
        id="cursos"
      >
        <h2>Explora tus cursos</h2>

        <div className="course-grid">
          <article onClick={iniciarMate}>
  🧮 Matemática
</article>
          <article
  onClick={() => {
    setPreguntaActual(0)
    setResultadosComunicacion([])
    setPantalla('comunicacion-diagnostico')
  }}
>
  💬 Comunicación
</article>
         <article>🗣️ Inglés</article>
          <article
  onClick={() => {
    setPreguntaActual(0)
    setResultadosCiencias([])
    setPantalla('ciencias-diagnostico')
  }}
>
  🧪 Ciencias
</article>
          <article
  onClick={() => {
    setPreguntaActual(0)
    setResultadosHistoria([])
    setPantalla('historia-diagnostico')
  }}
>
  🏛️ Historia
</article>
          <article
  onClick={() => {
    setPreguntaActual(0)
    setResultadosGeografia([])
    setPantalla('geografia-diagnostico')
  }}
>
  🌎 Geografía
</article>
          <article
  onClick={() => {
    setPreguntaActual(0)
    setResultadosDPSC([])
    setPantalla('dpsc-diagnostico')
  }}
>
  🤝 DPSC
</article>
        </div>
      </section>
    </main>
  )
}

export default App