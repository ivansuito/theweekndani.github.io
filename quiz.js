const preguntas = [
    {
        pregunta: '¿Cuál es el nombre real de The Weeknd?',
        opciones: ['Abel Makkonen Tesfaye', 'Michael Jackson', 'Kanye West'],
        respuestaCorrecta: 'Abel Makkonen Tesfaye'
    },
    {
        pregunta: '¿En qué año lanzó The Weeknd su álbum "Starboy"?',
        opciones: ['2015', '2016', '2018'],
        respuestaCorrecta: '2016'
    },
    {
        pregunta: '¿Cuál de estas canciones no es de The Weeknd?',
        opciones: ['Blinding Lights', 'Sicko Mode', 'Can\'t Feel My Face'],
        respuestaCorrecta: 'Sicko Mode'
    },
    {
        pregunta: '¿Dónde nació The Weeknd?',
        opciones: ['Toronto, Canadá', 'Los Ángeles, EE. UU.', 'Londres, Reino Unido'],
        respuestaCorrecta: 'Toronto, Canadá'
    },
    {
        pregunta: '¿Cuál es el nombre de la primera mixtape de The Weeknd?',
        opciones: ['Trilogy', 'Starboy', 'House of Balloons'],
        respuestaCorrecta: 'House of Balloons'
    },
    {
        pregunta: '¿En qué año actuó The Weeknd en el Super Bowl?',
        opciones: ['2020', '2021', '2022'],
        respuestaCorrecta: '2021'
    },
    {
        pregunta: '¿Cuál es el nombre del sello discográfico fundado por The Weeknd?',
        opciones: ['XO', 'Republic Records', 'Def Jam Recordings'],
        respuestaCorrecta: 'XO'
    },
    {
        pregunta: '¿Cuál de estas canciones no pertenece al álbum "Beauty Behind the Madness"?',
        opciones: ['Earned It', 'The Hills', 'Starboy'],
        respuestaCorrecta: 'Starboy'
    },
    {
        pregunta: '¿Cómo se llama la colaboración de The Weeknd con Daft Punk?',
        opciones: ['Pray for Me', 'Starboy', 'Blinding Lights'],
        respuestaCorrecta: 'Starboy'
    },
    {
        pregunta: '¿Cuántos premios Grammy ha ganado The Weeknd hasta 2022?',
        opciones: ['3', '10', '0'],
        respuestaCorrecta: '3'
    },
    {
        pregunta: '¿Cuál es el título de la canción de The Weeknd utilizada en la película "Fifty Shades of Grey"?',
        opciones: ['Earned It', 'Love Me Harder', 'Can\'t Feel My Face'],
        respuestaCorrecta: 'Earned It'
    },
    {
        pregunta: '¿En qué año lanzó The Weeknd su álbum "After Hours"?',
        opciones: ['2019', '2020', '2021'],
        respuestaCorrecta: '2020'
    },
    {
        pregunta: '¿Cuál es el nombre del primer mixtape de The Weeknd lanzado en 2011?',
        opciones: ['Trilogy', 'Starboy', 'House of Balloons'],
        respuestaCorrecta: 'House of Balloons'
    },
    {
        pregunta: '¿En qué año The Weeknd lanzó su álbum debut "Kiss Land"?',
        opciones: ['2012', '2013', '2014'],
        respuestaCorrecta: '2013'
    },
    {
        pregunta: '¿Cuál de estas canciones fue lanzada primero?',
        opciones: ['Can\'t Feel My Face', 'The Hills', 'Starboy'],
        respuestaCorrecta: 'Can\'t Feel My Face'
    },
    {
        pregunta: '¿Cuál es el nombre del personaje interpretado por The Weeknd en la película "Uncut Gems"?',
        opciones: ['Howard Ratner', 'Kevin Garnett', 'Demany'],
        respuestaCorrecta: 'Demany'
    },
    {
        pregunta: '¿Cuál es el título de la canción principal de la película "Black Panther" en la que participó The Weeknd?',
        opciones: ['Pray for Me', 'All the Stars', 'Love Me Harder'],
        respuestaCorrecta: 'Pray for Me'
    },
    {
        pregunta: '¿Cuál de estos álbumes de The Weeknd fue lanzado primero?',
        opciones: ['Starboy', 'After Hours', 'Trilogy'],
        respuestaCorrecta: 'Trilogy'
    },
    {
        pregunta: '¿Cuál de estas canciones tiene una versión remix con Rosalía?',
        opciones: ['Blinding Lights', 'Save Your Tears', 'In the Night'],
        respuestaCorrecta: 'Blinding Lights'
    },
    {
        pregunta: '¿En qué año nació The Weeknd?',
        opciones: ['1989', '1990', '1991'],
        respuestaCorrecta: '1990'
    },
    {
        pregunta: '¿Cuál es el nombre del álbum debut de The Weeknd?',
        opciones: ['Kiss Land', 'Trilogy', 'Starboy'],
        respuestaCorrecta: 'Kiss Land'
    },
    {
        pregunta: '¿Qué canción de The Weeknd ganó el Oscar a la Mejor Canción Original?',
        opciones: ['Blinding Lights', 'Can\'t Feel My Face', 'Earned It'],
        respuestaCorrecta: 'Earned It'
    },
    {
        pregunta: '¿Cuál es el nombre del personaje principal en el videoclip de "Blinding Lights"?',
        opciones: ['John Wick', 'The Joker', 'The Weeknd'],
        respuestaCorrecta: 'The Weeknd'
    },
    {
        pregunta: '¿En qué año lanzó The Weeknd su mixtape "Echoes of Silence"?',
        opciones: ['2010', '2011', '2012'],
        respuestaCorrecta: '2011'
    },
    {
        pregunta: '¿Cuál es el título de la canción de The Weeknd que apareció en la serie "Game of Thrones"?',
        opciones: ['Pray for Me', 'Power is Power', 'Starboy'],
        respuestaCorrecta: 'Power is Power'
    },
    {
        pregunta: '¿Cuántas canciones tiene el álbum "Starboy"?',
        opciones: ['12', '14', '18'],
        respuestaCorrecta: '18'
    },
    {
        pregunta: '¿En qué año The Weeknd ganó el Premio Polar Music?',
        opciones: ['2017', '2018', '2019'],
        respuestaCorrecta: '2017'
    },
    {
        pregunta: '¿Cuál es el nombre del personaje de The Weeknd en la película "Uncut Gems"?',
        opciones: ['Demany', 'Howard Ratner', 'Kevin Garnett'],
        respuestaCorrecta: 'Demany'
    },
    {
        pregunta: '¿Qué álbum de The Weeknd incluye la canción "Wicked Games"?',
        opciones: ['After Hours', 'Trilogy', 'Beauty Behind the Madness'],
        respuestaCorrecta: 'Trilogy'
    }
];

let preguntasRestantes = [...preguntas];
let numeroPreguntaActual = 0;


function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
}

function cargarPregunta() {
    console.log('Cargando pregunta...');
    if (numeroPreguntaActual < preguntas.length) {
        const preguntaActual = preguntasRestantes[numeroPreguntaActual];
        const opcionesAleatorias = obtenerElementosAleatorios(preguntaActual.opciones, 3);

        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `<div id="numero-pregunta">Pregunta ${numeroPreguntaActual + 1}/${preguntas.length}</div>`;
        quizContainer.innerHTML += `<div class="pregunta">${preguntaActual.pregunta}<br></div>`;
        console.log('Botón Calificar:', document.getElementById('calificar-btn'));
        console.log('Botón Siguiente Pregunta:', document.getElementById('siguiente-btn'));

        opcionesAleatorias.forEach(opcion => {
            quizContainer.innerHTML += `<input type="radio" name="respuesta" value="${opcion}"> ${opcion}<br>`;
        });

        // Limpia el resultado anterior
        mostrarResultado('');

        // Habilita el botón de siguiente pregunta después de cargar la pregunta
        document.getElementById('siguiente-btn').disabled = false;
        document.getElementById('calificar-btn').disabled = false;
    } else {
        mostrarResultado('¡Has completado el quiz!');
        // Deshabilita el botón de siguiente pregunta al completar el quiz
        document.getElementById('siguiente-btn').disabled = true;
    }
    console.log('Pregunta cargada.');
}

function siguientePregunta() {
    numeroPreguntaActual++;
    cargarPregunta();
}

function calificarQuiz() {
    console.log('Calificando respuesta...');
    const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
    if (respuestaSeleccionada) {
        const respuestaUsuario = respuestaSeleccionada.value;
        const preguntaActual = preguntasRestantes[numeroPreguntaActual];

        if (respuestaUsuario === preguntaActual.respuestaCorrecta) {
            mostrarResultado('Je, has asertao. Pa la siguiente.');
            // Deshabilita el botón de calificar después de una respuesta correcta
            document.getElementById('calificar-btn').disabled = true;
        } else {
            mostrarResultado('Noooooo has fallao. Pasa a la siguiente mejo.');
            // Deshabilita el botón de siguiente pregunta después de una respuesta incorrecta
            document.getElementById('calificar-btn').disabled = true;
            return; // Evita cargar la siguiente pregunta si la respuesta es incorrecta
        }

        // Elimina la pregunta actual de las preguntas restantes
        preguntasRestantes.splice(numeroPreguntaActual, 1);

        // Habilita el botón de siguiente pregunta después de calificar
        document.getElementById('siguiente-btn').disabled = false;
    } else {
        mostrarResultado('Selecciona una respuesta antes de calificar.');
    }
    console.log('Calificación completada.');
}

function obtenerElementosAleatorios(array, cantidad) {
    const elementosAleatorios = [];
    while (elementosAleatorios.length < cantidad) {
        const elemento = obtenerElementoAleatorio(array);
        if (!elementosAleatorios.includes(elemento)) {
            elementosAleatorios.push(elemento);
        }
    }
    return elementosAleatorios;
}

function obtenerElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}
cargarPregunta();

// Cargar la primera pregunta al cargar la página
window.onload = function () {

};