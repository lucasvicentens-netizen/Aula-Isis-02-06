require('dotenv').config();

const NOME_DO_MAPA = process.env.NOME_DO_MAPA;
const MULTILICADOR_XP = process.env.MULTILICADOR_XP;
const MODO_DE_JOGO = process.env.MODO_DE_JOGO;

console.log('\n=== SERVIDOR ONLINE ===');
console.log(`Mapa atual: ${NOME_DO_MAPA}`);

if (MODO_DE_JOGO === "MANUTENCAO"){
    console.log("SATUS: O servidor está em manutenção. Por favor, tente novamente mais tarde.");
} else if (MODO_DE_JOGO === "EVENTO"){
    console.log(`STATUS: EVENTO ATIVO! Seu XP total será modificado será: ${MULTILICADOR_XP * 2}`)
} else {
    console.log(`STATUS: O servidor está rodando normalmente. Seu XP será: ${MULTILICADOR_XP}`)
}
