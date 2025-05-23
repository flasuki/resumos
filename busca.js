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
