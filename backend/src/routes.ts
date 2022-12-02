import {Router, Request, Response} from 'express'

import { ForgotPasswordController } from './controllers/User/ForgotPasswordController'
import { CreateUserController } from './controllers/User/CreateUserController'
import { ListResultController } from './controllers/Jogo/ListResultController'
import { AuthUserController } from './controllers/User/AuthUserController'
import { HealthCheck } from './config/healthCheck'



import { auth } from './middlewares/auth'

const router = Router()


router.get('/forgot', new ForgotPasswordController().handle)
router.post('/reset_password/:token', new ForgotPasswordController().resetPassword)
router.get('/confirmation/:token', new CreateUserController().verifyEmail)
router.post('/profile/update', new CreateUserController().updateUser)
router.post('/create', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)


router.get('/healthcheck', new HealthCheck().handle)
router.get('/result/euro/:minuto', new ListResultController().handle_euro)
router.get('/result/copa/:minuto', new ListResultController().handle_copa)
router.get('/result/premier/:minuto', new ListResultController().handle_premier)
router.get('/result/super/:minuto', new ListResultController().handle_super)



export {router}