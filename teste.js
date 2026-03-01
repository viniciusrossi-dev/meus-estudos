const equipe = [
  { nome: "Vinicius", cargo: "Gerente de Tecnologia", anoInicio: 2010 },
  { nome: "João", cargo: "Desenvolvedor", anoInicio: 2022 },
  { nome: "Maria", cargo: "Product Manager", anoInicio: 2015 }
]

equipe.forEach(function(pessoa) {
  const anos = 2025 - pessoa.anoInicio

  if (anos >= 10) {
    console.log(`${pessoa.nome} é SÊNIOR - ${anos} anos de experiência`)
  } else if (anos >= 5) {
    console.log(`${pessoa.nome} é PLENO - ${anos} anos de experiência`)
  } else {
    console.log(`${pessoa.nome} é JÚNIOR - ${anos} anos de experiência`)
  }
})