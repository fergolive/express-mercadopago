import { MercadoPagoConfig, Payment } from 'mercadopago';
import { MERCADOPAGO_API_KEY } from "../config.js";
import ytdl  from 'ytdl-core';


export const processPayment = async (req, res) => {

  const client = new MercadoPagoConfig({ accessToken: MERCADOPAGO_API_KEY });

  try {
    
    const payment = new Payment(client);
    
    payment.create({ body: req.body })
    .then((result)=>{
   
        console.log(result);
        res.json(result);

    })
    .catch((error)=>{ 
        console.log(error);
    });

  

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};