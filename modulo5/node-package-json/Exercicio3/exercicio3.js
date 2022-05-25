const tasks = [
    "estudar",
    "trabalhar",
    "ler livro"
  ]
  
  const task = process.argv[2]
  
  tasks.push(task)
  
  console.log(`Task ${task} added successfuly`)
  console.log("tasks:", tasks.toString()) 