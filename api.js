import fetch from 'node-fetch'

async function buscarPais(nome) {
  const resposta = await fetch(`https://restcountries.com/v3.1/name/${nome}`)
  const dados = await resposta.json()
  
  const pais = dados[0]
  console.log(`País: ${pais.name.common}`)
  console.log(`Capital: ${pais.capital[0]}`)
  console.log(`População: ${pais.population.toLocaleString()}`)
  console.log(`Região: ${pais.region}`)
}

const paises = ["brazil", "argentina", "portugal"]

paises.forEach(function(pais) {
  buscarPais(pais)
})