import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numerosDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente (novoCliente) {
        if(novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente () { 
        return this._cliente; 
    }

    get saldo () { 
        return this._saldo; 
    }

    constructor (agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numerosDeContas += 1;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, cliente) {
        const valorSacado = this.sacar(valor);
        cliente.depositar(valorSacado);
    }
}