let fechaActual = new Date();

  let semanaActual = fechaActual.getDay();
    let opcionesDias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let diaSemana = opcionesDias[semanaActual];

    console.log(diaSemana);