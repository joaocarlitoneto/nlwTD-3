const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-25.5838143",
    lng: "-49.4200019",
    name: "Lar dos meninos",
    whatsapp: "41999999999",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
      "https://images.unsplash.com/photo-1562790519-bc8a4a47cd0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h até as 18h",
    open_on_weekends: "1"
  })

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // consultar somente 1 orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage)

  // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})