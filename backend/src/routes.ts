import { Router, Request, Response } from 'express'

import { ForgotPasswordController } from './controllers/User/ForgotPasswordController'
import { CreateUserController } from './controllers/User/CreateUserController'
import { ListResultController } from './controllers/JogoBet365/ListResultController'
import { ListResultControllerBetfair } from './controllers/JogoBetfair/ListResultController'
import { AuthUserController } from './controllers/User/AuthUserController'
import { VerifyUserController } from './controllers/User/VerifyUserController'
import { HealthCheck } from './config/healthCheck'

import { CheckoutController } from './controllers/Checkout/CheckoutController'
import { ListCustomer } from './stripe/ListCustomer'
import { ListSubscription } from './stripe/ListSubscription'


import { auth } from './middlewares/auth'

const router = Router()


router.get('/healthcheck', new HealthCheck().handle)

router.post('/forgot', new ForgotPasswordController().handle)
router.post('/reset_password/:token', new ForgotPasswordController().resetPassword)
router.get('/confirmation/:token', new CreateUserController().verifyEmail)
router.post('/profile/update', new CreateUserController().updateUser)
router.post('/create', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/send_email', new CreateUserController().sendEmail)
router.post('/verifyuser', auth, new VerifyUserController().handle)


router.get('/result/euro/:minuto', new ListResultController().handle_euro)
router.get('/result/copa/:minuto', new ListResultController().handle_copa)
router.get('/result/premier/:minuto', new ListResultController().handle_premier)
router.get('/result/super/:minuto', new ListResultController().handle_super)

router.get('/result/betfair/euro/:minuto', new ListResultControllerBetfair().handle_euro)
router.get('/result/betfair/copa/:minuto', new ListResultControllerBetfair().handle_copa)
router.get('/result/betfair/premier/:minuto', new ListResultControllerBetfair().handle_premier)
router.get('/result/betfair/seriea/:minuto', new ListResultControllerBetfair().handle_serieA)
router.get('/result/betfair/champions/:minuto', new ListResultControllerBetfair().handle_champions)



router.post('/create-checkout-session', new CheckoutController().execute)
router.get('/v1/customers', new ListCustomer().customerList)
router.get('/v1/customers/search', new ListCustomer().customerSearch)
router.get('/v1/subscriptions', new ListSubscription().subscriptionList)
router.get('/v1/subscriptions/search', new ListSubscription().subscriptionSearch)




export { router }