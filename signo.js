// Día del mes en que empieza el signo siguiente (enero a diciembre)
const CORTES = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
const SIGNOS = ['Capricornio', 'Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis',
  'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario'];

function signoSolar(mes, dia) {
  return dia < CORTES[mes - 1] ? SIGNOS[mes - 1] : SIGNOS[mes % 12];
}

document.getElementById('calcular').addEventListener('click', () => {
  const [, mes, dia] = document.getElementById('fecha').value.split('-').map(Number);
  document.getElementById('resultado').textContent = `Tu signo solar es ${signoSolar(mes, dia)}`;
});