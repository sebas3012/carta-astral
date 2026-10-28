// Día del mes en que empieza el signo siguiente (enero a diciembre)
const CORTES = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
const SIGNOS = ['Capricornio', 'Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis',
  'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario'];
const FRASES = {
  Aries: 'Valiente y apasionado, siempre listo para el próximo desafío.',
  Tauro: 'Paciente y leal, disfrutás de los placeres simples de la vida.',
  'Géminis': 'Curioso y versátil, tu mente nunca deja de explorar.',
  'Cáncer': 'Protector y sensible, tu hogar es tu refugio.',
  Leo: 'Generoso y carismático, brillás con luz propia.',
  Virgo: 'Detallista y servicial, encontrás orden en el caos.',
  Libra: 'Diplomático y encantador, buscás el equilibrio en todo.',
  Escorpio: 'Intenso y magnético, sentís todo con profundidad.',
  Sagitario: 'Aventurero y optimista, el mundo es tu camino.',
  Capricornio: 'Disciplinado y ambicioso, construís tus sueños paso a paso.',
  Acuario: 'Original e independiente, pensás siempre en el futuro.',
  Piscis: 'Soñador y compasivo, tu intuición te guía.'
};

function signoSolar(mes, dia) {
  return dia < CORTES[mes - 1] ? SIGNOS[mes - 1] : SIGNOS[mes % 12];
}

document.getElementById('calcular').addEventListener('click', () => {
  const [, mes, dia] = document.getElementById('fecha').value.split('-').map(Number);
  const signo = signoSolar(mes, dia);
  document.getElementById('resultado').textContent = `Tu signo solar es ${signo}. ${FRASES[signo]}`;
});