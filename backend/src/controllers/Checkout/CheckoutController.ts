import { Request, Response } from "express"

const stripe = require('stripe')('sk_test_51MCsigDXO8lGdsO055v4StRAuJvuMloJpnbrzPBdPNz7Mx310tglUPwtKFY8ugG8CDfe25BSZGvE7d5xk4QO5UKc00P6hktfdt');
const YOUR_DOMAIN = 'https://supertips.com.br';
class CheckoutController {
    async execute(req:Request, res:Response) {
        
        try {
            const {name, email} = req.body
            const customer = await stripe.customers.create({
                email: email,
                name: name,
            })

            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: 'price_1MCt3BDXO8lGdsO0fOnoSyyF',
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                customer: customer.id,
                success_url: `${YOUR_DOMAIN}/success/${email}`,
                cancel_url: `${YOUR_DOMAIN}?canceled=true`,


            });

           // console.log(name, email)
           
            res.json({ url: session.url })
          


        } catch (error) {
            console.log(error)
        }

    }
}
export { CheckoutController }