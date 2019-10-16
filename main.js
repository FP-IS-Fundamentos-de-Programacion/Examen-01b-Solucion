var btnAcceso = document.querySelector('#btnAcceso')
var btnCircula = document.querySelector('#btnCircula')
var btnBoletos = document.querySelector('#btnBoletos')

btnBoletos = document.addEventListener('click', () => {
  const C_1_10 = 50
  const C_11_20 = 60
  const C_21_30 = 70
  const C_31 = 80
  const DESCUENTO = 0.1

  let asiento = Number(document.querySelector('#asiento').value)
  let dia = document.querySelector('#diaSemana').value.toLowerCase()
  let res = document.querySelector('#resultado3')

  let costo = 0

  if (asiento <= 10) {
    costo = C_1_10
  } else if (asiento <= 20) {
    costo = C_11_20
  } else if (asiento <= 30) {
    costo = C_21_30
  } else {
    costo = C_31
  }

  let desc = 0

  if (dia === 'lunes' || dia === 'miércoles') {
    desc = costo * DESCUENTO
  }

  res.value = costo - desc
})

btnCircula.addEventListener('click', () => {
  let dia = document.querySelector('#dia').value.toLowerCase()
  let placa = Number(document.querySelector('#placa').value)
  let res = document.querySelector('#resultado2')

  let circula = false

  if (placa === 0) {
    if (dia === 'lunes') {
      circula = true
    } else {
      circula = false
    }
  } else if (placa === 1) {
    if (dia === 'martes') {
      circula = true
    } else {
      circula = false
    }
  } else if (placa === 2) {
    if (dia === 'miércoles') {
      circula = true
    } else {
      circula = false
    }
  } else {
    circula = true
  }

  if (circula === true) {
    res.value = 'Puede circular'
  } else {
    res.value = 'no puede circular'
  }
})

btnAcceso.addEventListener('click', () => {
  let usr = document.querySelector('#usuario').value
  let clv = document.querySelector('#clave').value

  if (usr === 'admin@ucol.mx' && clv === '12345') {
    alert('Bienvenido')
  } else {
    alert('Datos de acceso incorrectos')
  }
})
