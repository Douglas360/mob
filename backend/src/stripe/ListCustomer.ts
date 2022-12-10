import { Request, Response } from "express"

import { stripe } from "./stripe"

class ListCustomer {
    async customerList(req: Request, res: Response) {

        try {
            const { name, email } = req.body
            const customer = await stripe.customers.list({

            })



            return res.json(customer)



        } catch (error) {
            console.log(error)
        }

    }
    async customerSearch(req: Request, res: Response) {

        try {
            const { email } = req.body
            const customer = await stripe.customers.search({
                query: `email:\'${email}\'`

            })

            return res.json(customer)

        } catch (error) {
            console.log(error)
        }

    }
}
export { ListCustomer }