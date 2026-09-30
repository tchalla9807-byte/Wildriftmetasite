/*
 * WILD RIFT META — CONFIGURAÇÃO
 *
 * Este arquivo concentra as configurações que podem ser alteradas sem mexer
 * na interface principal. Para uma atualização semanal real, publique o site
 * e coloque uma URL HTTPS no campo remoteDataUrl.
 */
const APP_CONFIG = {
  version: '4.0',

  // Intervalo da atualização automática em dias.
  updateIntervalDays: 7,

  // Ativa/desativa a tentativa de atualização automática.
  autoUpdate: true,

  // URL do dados.json remoto. Deixe vazio para usar os dados locais.
  // Exemplo: 'https://seuusuario.github.io/wildrift-meta/dados.json'
  remoteDataUrl: '',

  // Tempo máximo de espera por uma fonte remota (milissegundos).
  requestTimeoutMs: 10000,

  // Se a fonte remota falhar, mantém os dados locais atuais.
  keepLocalDataOnError: true,

  // Fontes de referência exibidas na área de atualização.
  sources: {
    patch: 'https://wildrift.leagueoflegends.com/pt-br/news/game-updates/wild-rift-patch-notes-7-3a/',
    koreaStats: 'https://riftcamp.gg/pt-BR/data/win-rate'
  }
};
