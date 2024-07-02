const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinusculo = () => String.fromCharCode(rand(97, 122));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;/?~^][{}-=+?!@#$%¨&*()<>';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maiusculas,
  minusculas,
  numeros,
  simbolos,
) {
  const senhaArray = [];
  qtd = Number(qtd);

  while (senhaArray.length < qtd) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinusculo());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }
  return senhaArray.slice(0, qtd).join('');
}
