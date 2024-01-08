const canciones = [
    // Kiss Land (2013)
    'Kiss Land',
    'Wanderlust',
    'Belong to the World',
    'Live For',
    'Adaptation',
    'Tears in the Rain',
    'Coming Down',
    'Odd Look',
    'Professional',

    // Beauty Behind the Madness (2015)
    'Earned It',
    'The Hills',
    'Can\'t Feel My Face',
    'Acquainted',
    'Shameless',
    'Prisoner',
    'In the Night',
    'Tell Your Friends',
    'Dark Times',

    // Starboy (2016)
    'Starboy',
    'False Alarm',
    'Reminder',
    'Rockin\'',
    'Secrets',
    'Die for You',
    'Acquainted (Remix)',
    'Party Monster',
    'I Feel It Coming',

    // After Hours (2020)
    'Heartless',
    'Blinding Lights',
    'After Hours',
    'Faith',
    'In Your Eyes',
    'Save Your Tears',
    'Repeat After Me (Interlude)',
    'Escape from LA',
    'Until I Bleed Out',
    'Too Late',
    'Snowchild',
    'Adaptation',
    'Alone Again',
    'After Hours (Dawn FM Remix)',

    // Dawn FM (2022)
    'Dawn FM',
    'Gasoline',
    'How Do I Make You Love Me?',
    'Take My Breath',
    'Sacrifice',
    'Out of Time',
    'Less Than Zero',
    'Here We Go... Again',
    'Best Friends',
    'Is There Someone Else?',
    'Starry Eyes',
    'Sacrifice (Remix)',
    'Moth to a Flame',

    // Unreleased
    'The Morning',
    'Loft Music',
    'Wicked Games',
    'High For This',
    'Rolling Stone',
    'The Birds',
    'Montreal',
    'Valerie',
    'Crew Love',
    'Or Nah',
    'The Zone',
    'Tell Your Friends (Remix)',
    'Reminder (Remix)',
    'In Your Eyes (Remix)',
    'Save Your Tears (Remix)',
    'Take My Breath (Remix)',
    'Out of Time (Remix)',
    'Best Friends (Remix)',
    'Is There Someone Else? (Remix)'
    // Agrega más canciones si es necesario
];

function mostrarCancionAleatoria() {
    const cancionAleatoria = obtenerElementoAleatorio(canciones);
    mostrarResultado(`${cancionAleatoria}`);
}

function obtenerElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
}
