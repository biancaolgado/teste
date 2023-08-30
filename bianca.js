//Variáveis
let nomeAluno = "bianca";
let sobrenomeAluno = "Olgado";
let anoNascimentoAluno;
let idadeAluno;

//Constantes
const NOME_ESCOLA = "Senai";
const ANO_ATUAL = 2023;

//Receber informações do usuário
nomeAluno = prompt("Digite seu primeiro nome:");
sobrenomeAluno = prompt("Digite seu sobrenome:");
let nomeAlunoCompleto = nomeAluno + " " + sobrenomeAluno;
anoNascimentoAluno = parseInt(prompt("Digite o ano do seu nascimento"));
idadeAluno = ANO_ATUAL - anoNascimentoAluno;


alert("Seu nome é " + nomeAlunoCompleto + " e você estuda no " + NOME_ESCOLA + ", sua idade é " + idadeAluno + "ano(s).");
