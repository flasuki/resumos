// Dados das matérias para busca
const materias = [
  {
    titulo: "Classes Gramaticais",
    descricao: "Resumo sobre classes variáveis e invariáveis, com exemplos e definições.",
    url: "portugues/Classes Gramaticais.html"
  },
  {
    titulo: "substantivo",
    descricao: "Resumo dos tipos de substantivo",
    url: "portugues/substantivo.html"
  },
  {
    titulo: "Ciências",
    descricao: "Resumo dos conteúdos de física, química e biologia.",
    url: "ciencias/ciencias.html"
  },
  {
    titulo: "História",
    descricao: "Resumo sobre história do Brasil e do mundo.",
    url: "historia/historia.html"
  },
  {
    titulo: "Geografia",
    descricao: "Resumo de geografia física e humana.",
    url: "geografia/geografia.html"
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
