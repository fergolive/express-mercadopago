import express from "express";
import morgan from "morgan";
import path from "path";
import cors from 'cors';


import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(cors({
  origin: '*'//['http://localhost:4200', 'http://localhost:4201']  //origin: ['https://www.section.io', 'https://www.google.com/']   origin: '*'
  //info cors -->
  //https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

}));

app.use(paymentRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(3000);
console.log("Server on port", 3000);








/* 
const client = new MercadoPagoConfig({ accessToken: 'TEST-3690631158483152-020913-ef84b51c5578dd9159b86972b7d98d8e-355413452' });

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
*/