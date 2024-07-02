export default class ValidaCpf {
  constructor(cpfEnviado) {
    this.cpfLimpo = String(cpfEnviado).replace(/\D+/g, '');
  }

  valida() {
    if (!this.cpfLimpo) return false; // Verifica se cpfLimpo é falsy (undefined, null, empty string, etc.)
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
  }

  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); // Retorna como string para manter a consistência
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}
