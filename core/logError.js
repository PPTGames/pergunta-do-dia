module.exports = function logError(err, more) {
  const errorTime = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  console.error(`\nErro às ${errorTime}.\n${err.stack || err}${more ? `\nMais: ${more}` : ``}\n`);
}