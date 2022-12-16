import Express from "express";
const app = Express();
app.use(Express.json());
const timeout = 30000;
const puerto = 8070;
let n = 0;

app.get("/gecko/api/payall/term/:username/hash/:hash", (request, response) =>
{
    console.log("--------Peticion consulta--------")
    console.log(request.body)
    console.log("--------Fin peticion consulta--------" )
    
    response.status(200).send(
        {
            "resultados": 2,
            "items":
            [
                {
                    "id": "13717",
                    "username": "adrian2005",
                    "email": "adri*****26@gmail.com",
                    "phone": "+580******9804",
                    "document": "25000000"
                },
                {
                    "id": "28124",
                    "username": "manuel23",
                    "email": "manu*****ma@gmail.com",
                    "phone": "+580******9095",
                    "document": "25000000"
                }
            ],
                "term": "04247539"
        }
    )
})
app.post("/gecko/api/payall/payin/:user/hash/:token", (request, response) =>
{
    console.log("--------Peticion consulta--------")
    console.log(request.body)
    console.log("--------Fin peticion consulta--------")
    response.status(200).send(
        {
            "method": "payin",
            "transaction_id": "0X1234",
            "user_id": "3536",
            "amount": "10",
            "currency": "USD",
            "notas": "Gracias",
            "date": "2022-07-20 23:36",
            "payin": "3536",
            "hash": "eb6c9fa9ca021704c3ccc27abc42346a",
            "data": "Se ha procesado con Exito",
            "info": "Usuario: mostasa Saldo: $1,149.93",
            "reference": "350522",
            "status": "200"
        }
    )
})

app.listen(puerto, () => console.log("Escuchando por el puerto "+ puerto))