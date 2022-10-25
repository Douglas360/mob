import {Router, Request, Response} from 'express'

import { ListResultController } from './controllers/Jogo/ListResultController'
import { CreateUserController } from './controllers/User/CreateUserController'
import { AuthUserController } from './controllers/User/AuthUserController'

import { auth } from './middlewares/auth'


const router = Router()


router.post('/create', new CreateUserController().handle)
router.get('/confirmation/:token', new CreateUserController().verifyEmail)
router.post('/session', new AuthUserController().handle)

router.use(auth)
router.get('/result', new ListResultController().handle)



export {router}