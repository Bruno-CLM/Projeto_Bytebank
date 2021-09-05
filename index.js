import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Irineu",11111111111,111111111);

const cliente2 = new Cliente("Jair",11111111111,111111111);

const ContaCorrenteIrineu = new ContaCorrente(1100,cliente1);
ContaCorrenteIrineu.depositar(2500);

const ContaCorrenteJair = new ContaCorrente(1100,cliente2);
ContaCorrenteJair.depositar(2500);

ContaCorrenteIrineu.transferir(1000, ContaCorrenteJair);

console.log(ContaCorrenteIrineu, "\n Seu Saldo é:" + ContaCorrenteIrineu.saldo);
console.log(ContaCorrenteJair, "\n Seu Saldo é:" + ContaCorrenteJair.saldo);
console.log(ContaCorrente.numerosDeContas)






