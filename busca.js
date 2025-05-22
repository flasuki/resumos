// Dados das matérias para busca
const materias = [
  {
    titulo: "Classes Gramaticais",
    descricao: "Resumo sobre classes variáveis e invariáveis, com exemplos e definições.",
    url: "portugues/Classes Gramaticais.html"
  },
  {
    titulo: "Substantivo",
    descricao: "Resumo dos tipos de substantivo.",
    url: "portugues/substantivo.html"
  },
  {
    titulo: "Verbo",
    descricao: "Resumo sobre o verbo e tipos de verbo.",
    url: "portugues/verbos.html"
  },
  {
    titulo: "Conjugação Verbal",
    descricao: "Resumo sobre Conjugação Verbal.",
    url: "portugues/Conjugação Verbal.html"
  },
  {
    titulo: "Flexão na Língua Portuguesa",
    descricao: "Resumo de Flexão na Língua Portuguesa.",
    url: "portugues/Flexão na Língua Portuguesa.html"
  },
  {
    titulo: "Análise Sintática",
    descricao: "Resumo sobre Análise Sintática.",
    url: "portugues/Análise Sintática.html"
  },
  {
    titulo: "Frase",
    descricao: "Resumo sobre Frase.",
    url: "portugues/Frase.html"
  },
  {
    titulo: "Concordância Verbal",
    descricao: "Resumo sobre Concordância Verbal.",
    url: "portugues/Concordância Verbal.html"
  },
  {
    titulo: "Concordância Nominal",
    descricao: "Resumo sobre Concordância Nominal.",
    url: "portugues/Concordância Nominal.html"
  },
  {
    titulo: "Regência Verbal",
    descricao: "Resumo sobre Regência Verbal.",
    url: "portugues/Regência Verbal.html"
  },
  {
    titulo: "Regência Nominal",
    descricao: "Resumo sobre Regência Nominal.",
    url: "portugues/Regência Nominal.html"
  },
  {
    titulo: "Crase",
    descricao: "Resumo sobre Crase.",
    url: "portugues/Crase.html"
  },
  {
    titulo: "Semântica",
    descricao: "Resumo sobre Semântica.",
    url: "portugues/Semântica.html"
    
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
  {
    titulo: "",
    descricao: "Resumo sobre .",
    url: "portugues/.html"
  },
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
    a.textContent = `${item.titulo} — ${item.descricao}`;
    a.target = "_self"; // abre na mesma aba
    li.appendChild(a);
    resultados.appendChild(li);
  });
});

resultadosBusca.forEach(({ item }) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.url;
  a.target = "_self";
  a.innerHTML = `<i class="fas fa-book"></i> ${item.titulo} — ${item.descricao}`;
  li.appendChild(a);
  resultados.appendChild(li);
});
