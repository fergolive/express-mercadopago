const express = require('express');
const cors = require('cors');
const {MercadoPagoConfig} = require('mercadopago');
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

//MP

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-3690631158483152-020913-ef84b51c5578dd9159b86972b7d98d8e-355413452' });

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.post('/create_preference',async (req,res)=>{
    try {
            const body={
                items:[{
                    title:req.body.title,
                    quantity:Number(req.body.quantity),
                    unit_price:Number(req.body.price),
                    currency_id:"UYU"
                }],
                back_urls:{
                    success:"https://givmeatip.web.app",
                    failure:"https://givmeatip.web.app/failure-pay",
                    pending:"https://givmeatip.web.app/failure-pay"
                },
                auto_return:"approved",
            }
    } catch (error) {
        
    }
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});