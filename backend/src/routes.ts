import {Router, Request, Response} from 'express'

import { ListResultController } from './controllers/Jogo/ListResultController'
import { CreateUserController } from './controllers/User/CreateUserController'
import { AuthUserController } from './controllers/User/AuthUserController'

import { auth } from './middlewares/auth'

const router = Router()


router.post('/create', new CreateUserController().handle)
router.get('/confirmation/:token', new CreateUserController().verifyEmail)
router.post('/session', new AuthUserController().handle)


router.get('/result/euro/:minuto', new ListResultController().handle_euro)
router.get('/result/copa', new ListResultController().handle_copa)
router.get('/result/premier', new ListResultController().handle_premier)
router.get('/result/super', new ListResultController().handle_super)



export {router}