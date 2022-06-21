import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
    console.log("ok!")
})

// Exercício 1

//a)  O raw devolve exatamente o que o banco MySQL devolveu.

//b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0]
}
getActorByName("Juliana Paes")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

// c)
const countGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}';
    `)
    const count = result[0][0].count;
    return count;
}
countGender("female")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })



// Exercício 2
//a)
const updateSalary = async (salary: number, id: string): Promise<any> => {
    await connection("Actor")
        .update({ salary: salary })
        .where("id", id)
}

updateSalary(700000, "001" )
.then(result => {
  console.log("Salário atualizado.")
})
.catch(err => {
  console.log(err)
});

// b
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)
};

deleteActor("001")
.then(result => {
  console.log("Ator deletado.")
})
.catch(err => {
  console.log(err)
});

// c)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  avgSalary("female")
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    });


// Exercício 3
//a)

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = "${id}"
    `);

      res.status(200).send(result[0])
    
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });

  //b)

  app.get("/actor?gender", async (req: Request, res: Response) => {
    try {
    const result = await connection("Actor").count().where({ gender: req.query.gender });
    res.status(200).send(result);
    
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });


// Exercício 4
// a)
app.put("/actor", async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const salary = req.body.salary;
        await updateSalary(salary, id);

        res.status(200).send({ message:"Salary changed" })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteActor(id);

        res.status(200).send({ message: "Actor deleted" })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});