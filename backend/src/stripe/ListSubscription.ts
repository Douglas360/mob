import { Request, Response } from "express";

import { stripe } from "./stripe"

class ListSubscription {
    async subscriptionList(req: Request, res: Response) {

        try {

            const subscription = await stripe.subscriptions.list({

            });



            return res.json(subscription)
            //console.log(subscription)



        } catch (error) {
            console.log(error)
        }


    }

    async subscriptionSearch(req: Request, res: Response) {
        const {email} = req.body 
        

        try {

            const subscription = await stripe.subscriptions.search({
                //query: `metadata[\'email\']:\'${email}\'`,
                query:'metadata[\'email\']:\'douglas123@email.com\''
                
            });



            return res.json(subscription)
            //console.log(subscription)



        } catch (error) {
            console.log(error)
        }


    }

}
export { ListSubscription }