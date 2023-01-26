import Express from "express";
const app = Express();
app.use(Express.json());
const timeout = 20000;
const puerto = 8502;

app.post("/oauth/authorize", (request, response) =>
{
    console.log("--------Peticion consulta--------")
    console.log(request)
    console.log("--------Fin peticion consulta--------" )
    response.status(200).send(
        {
            "access_token": "a5c16650-eb14-11ea-8344-fd5fa8aexxxx",
            "expires_in": 1799,
            "token_type": "BEARER"
        }        
    )
})
app.post("/service_pay/consultation", (request, response) =>
{
    console.log("--------Peticion pago--------")
    console.log(request)
    console.log("--------Fin peticion pago--------")
    response.status(200).send(
        {
            "name": "Prueba",
            "balance": 300.00
        }
    )
})
app.post("/service_pay/payment", (request, response) =>
{
    console.log("--------Peticion pago--------")
    console.log(request)
    console.log("--------Fin peticion pago--------")
    response.status(200).send(
        {
            "int_date": 20225,
            "id": "05f0c2c0-d54f-11ec-8efd-8b6aae6c69aa",
            "sequence": 1724,
            "amount": 1,
            "service": "MOVISTAR_POSTPAID",
            "account_number": "167747625",
            "operation": "PAYMENT",
            "service_client_name":"",
            "approved_number": "0000000000",
            "created_at" : "2022-05-18T19:33:12.044905486Z",    
            "status": "SUCCESS"
        }
    )
})
app.listen(puerto, () => console.log("Escuchando por el puerto "+ puerto))