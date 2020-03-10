// Mapeamento dos Temas
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

// Seleciona o Item da lista de Temas
const theme = localStorage.getItem("theme");

// Coloca o body.classList dentro de uma Variável
const bodyClass = document.body.classList;

// 
theme && bodyClass.add(theme) || (bodyClass.add("dark"), localStorage.setItem("theme", "dark"));

// Função para alterar os Temas
function toggleTheme() {
  // Seleciona o Tema atual
  const current = localStorage.getItem("theme");
  // Seleciona o valor do Tema dentro de ThemeMap
  const next = themeMap[current];

  // Modifica o tema
  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

// Verifica se o elemento "themeButton" foi clicado e 
// realiza a mudança do Tema
document.getElementById("themeButton").onclick = toggleTheme;