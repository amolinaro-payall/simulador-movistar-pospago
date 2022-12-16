import Express from "express";
import querystring from 'querystring';
const app = Express();
app.use(Express.json());
const timeout = 30000;
const puerto = 8070;
let n = 0;

app.get("/gecko/api/payall/term/:username/hash/:hash", (request, response) =>
{
    console.log("--------Peticion consulta--------")
    console.log(request.query)
    console.log("--------Fin peticion consulta--------" )

    response.status(200).send(
        {
            "resultados": 3,
            "items": [
                {
                    "id": "6986",
                    "username": "oclean66",
                    "email": "ocle*****66@gmail.com",
                    "phone": "+58-******2475",
                    "document": "18989861"
                },
                {
                    "id": "37329",
                    "username": "oclean66aaa",
                    "email": "asda*****sd@asd.com",
                    "phone": "+132******2586",
                    "document": null
                },
                {
                    "id": "37332",
                    "username": "oclean66awss",
                    "email": "asda*****sd@asrd.com",
                    "phone": "+573******2586",
                    "document": null
                }
            ],
            "term": "oclean66"
        }        
    )
})

app.post("/gecko/api/payall/payin/:user/hash/:token", (request, response) =>
{
    console.log("--------Peticion pago--------")
    console.log(request.body.monto)
    console.log("--------Fin peticion pago--------")

    if (request.method === 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                request.connection.destroy();
        });
        request.on('end', function () {
            var post = querystring.parse(body);
            console.log(post);
        });
    }
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