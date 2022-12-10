import { Request, Response } from "express"

const stripe = require('stripe')('sk_test_51MCsigDXO8lGdsO055v4StRAuJvuMloJpnbrzPBdPNz7Mx310tglUPwtKFY8ugG8CDfe25BSZGvE7d5xk4QO5UKc00P6hktfdt');
const YOUR_DOMAIN = 'http://localhost:3000/';
class ListCustomer {
    async execute(req:Request, res:Response) {
        
        try {
            const {name, email} = req.body
            const customer = await stripe.customers.list({
               
            })

            
           
            return res.json(customer)
          


        } catch (error) {
            console.log(error)
        }

    }
    async search(req:Request, res:Response) {
        
        try {
            const {name, email} = req.body
            const customer = await stripe.customers.search({
                query:`email:\'${email}\'`
               
            })

            
           
            return res.json(customer)
          


        } catch (error) {
            console.log(error)
        }

    }

    
}
export { ListCustomer }