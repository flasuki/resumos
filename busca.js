// Dados das matérias para busca
const materias = [
  {
    titulo: "Classes Gramaticais",
    descricao: "Resumo sobre classes gramaticais variáveis e invariáveis, com exemplos de substantivos, verbos, adjetivos, advérbios, pronomes e mais.",
    url: "portugues/Classes Gramaticais.html"
  },
  {
    titulo: "Substantivo",
    descricao: "Tipos de substantivo: comum, próprio, coletivo, simples, composto, concreto e abstrato, com exemplos e regras.",
    url: "portugues/substantivo.html"
  },
  {
    titulo: "Verbo",
    descricao: "Definição e classificação dos verbos, modos, tempos, vozes e conjugações na língua portuguesa.",
    url: "portugues/verbos.html"
  },
  {
    titulo: "Conjugação Verbal",
    descricao: "Regras para conjugação verbal, tempos verbais, modos indicativo, subjuntivo e imperativo, com exemplos práticos.",
    url: "portugues/Conjugação Verbal.html"
  },
  {
    titulo: "Flexão na Língua Portuguesa",
    descricao: "Explicação sobre flexão de gênero, número, pessoa, tempo e modo nos diferentes tipos de palavras.",
    url: "portugues/Flexão na Língua Portuguesa.html"
  },
  {
    titulo: "Análise Sintática",
    descricao: "Conceitos básicos de análise sintática, funções sintáticas como sujeito, predicado, objetos e adjuntos.",
    url: "portugues/Análise Sintática.html"
  },
  {
    titulo: "Frase",
    descricao: "Definição de frase, tipos de frases, elementos essenciais e acessórios, e exemplos para compreensão.",
    url: "portugues/Frase.html"
  },
  {
    titulo: "Concordância Verbal",
    descricao: "Regras da concordância verbal, concordância com sujeito simples, composto, e casos especiais.",
    url: "portugues/Concordância Verbal.html"
  },
  {
    titulo: "Concordância Nominal",
    descricao: "Regras para concordância nominal entre substantivos, adjetivos, artigos, pronomes e numerais.",
    url: "portugues/Concordância Nominal.html"
  },
  {
    titulo: "Regência Verbal",
    descricao: "Estudo da regência verbal, verbos transitivos diretos e indiretos, e preposições exigidas por cada verbo.",
    url: "portugues/Regência Verbal.html"
  },
  {
    titulo: "Regência Nominal",
    descricao: "Regência nominal, relação entre nomes e seus complementos, uso correto das preposições.",
    url: "portugues/Regência Nominal.html"
  },
  {
    titulo: "Crase",
    descricao: "Explicação sobre o uso da crase, regras para identificar a fusão da preposição 'a' com o artigo feminino 'a'.",
    url: "portugues/Crase.html"
  },
  {
    titulo: "Semântica",
    descricao: "Estudo do significado das palavras e frases, tipos de semântica e relações semânticas como homografas, homofonas, sinonímia, antonímia e polissemia.",
    url: "portugues/Semântica.html"
  },
 {
  titulo: "Colocação Pronominal",
  descricao: "Entenda as regras da colocação pronominal, que definem a posição dos pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos) em relação ao verbo. Saiba quando usar próclise, ênclise e mesóclise, com exemplos práticos e dicas importantes.",
  url: "portugues/Colocação Pronominal.html"
},
{
  titulo: "Emprego de Certas Palavras Comuns e Dúvidas Frequentes",
  descricao: "Aprenda o uso correto de palavras comuns que geram dúvidas, como mau/mal, senão/se não, por que/por quê/porque/porquê, há/a, senhor/senhorio, e dicas para evitar erros comuns na escrita.",
  url: "portugues/Emprego de Certas Palavra.html"
},
{
  titulo: "Pontuação",
  descricao: "Aprenda o que é pontuação, seus principais sinais como ponto final, vírgula, dois pontos, ponto e vírgula, reticências, aspas, travessão e mais, com exemplos claros e dicas para usar corretamente.",
  url: "portugues/Pontuacao.html"
},
{
  titulo: "Gêneros Jornalísticos",
  descricao: "Conheça os principais generos jornalísticos: informativos, interpretativos, opinativos e de entretenimento. Saiba a estrutura da notícia e a função do jornalista na redação clara e objetiva.",
  url: "portugues/Gêneros jornalísticos.html"
},
{
  titulo: "Tipos Textuais",
  descricao: "Aprenda os principais tipos textuais: descritivo, narrativo, dissertativo, injuntivo e expositivo, com exemplos, características e estrutura para facilitar o estudo.",
  url: "portugues/Tipos Textuais.html"
},
{
  titulo: "Texto Dissertativo-Argumentativo e Dissertativo-Expositivo",
  descricao: "Aprenda a estrutura, características e exemplos dos textos dissertativo-argumentativo e dissertativo-expositivo, tipos textuais muito cobrados em provas e vestibulares.",
  url: "portugues/Texto Dissertativo.html"
},
{
  titulo: "Progressão Textual",
  descricao: "Aprenda o que é progressão textual, os pilares coerência e coesão, e como garantir que seu texto avance de forma lógica, clara e organizada.",
  url: "portugues/prograsao textual.html"
},
{
  titulo: "Intertextualidade",
  descricao: "Saiba o que é intertextualidade, seus tipos como citação, paráfrase, paródia e alusão, suas funções e exemplos em textos, filmes, memes e mais.",
  url: "portugues/Intertextualidade.html"
},
{
  titulo: "Estrutura da Notícia – Pirâmide Invertida",
  descricao: "Aprenda a estrutura da notícia segundo o modelo da pirâmide invertida, suas partes principais e vantagens para o jornalismo e leitura rápida.",
  url: "portugues/Estrutura da Notícia.html"
},
{
  titulo: "Coerência e Coesão",
  descricao: "Entenda os conceitos de coerência e coesão, essenciais para a produção de textos claros, organizados e com ideias bem conectadas.",
  url: "portugues/Coerência e Coesão.html"
},
{
  titulo: "Clareza, Concisão e Estilo",
  descricao: "Aprenda a escrever textos claros, concisos e com estilo próprio para uma comunicação eficaz e direta.",
  url: "portugues/Clareza, Concisão e Estilo.html"
},
{
  titulo: "Norma Culta vs Norma Popular ",
  descricao: "Conheça as diferenças entre norma culta e norma popular, seus contextos de uso, características e a importância do respeito à diversidade linguística.",
  url: "portugues/Norma Culta vs Norma Popular.html"
},
{
  titulo: "Funções da Linguagem ",
  descricao: "Conheça as 6 principais funções da linguagem, seus focos, objetivos e exemplos para entender melhor a comunicação.",
  url: "portugues/Funções da Linguagem.html"
}

];

// Configurações do Fuse.js
const options = {
  keys: ['titulo', 'descricao'],
  threshold: 0.3,
  includeScore: true
};


const fuse = new Fuse(materias, options);

// Elementos DOM
const searchInput = document.getElementById('search');
const resultados = document.getElementById('resultados');

// Função para mostrar resultados
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();

  resultados.innerHTML = '';

  if (query === '') return;

  const resultadosBusca = fuse.search(query);

  if (resultadosBusca.length === 0) {
    resultados.innerHTML = '<li>Nenhum resultado encontrado.</li>';
    return;
  }

  resultadosBusca.forEach(({ item }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url;
    a.target = "_self"; // abre na mesma aba
    a.innerHTML = `<i class="fas fa-book"></i> <strong>${item.titulo}</strong> — ${item.descricao}`;
    li.appendChild(a);
    resultados.appendChild(li);
  });
});
