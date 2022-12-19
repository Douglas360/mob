import { Header } from "../../components/LayoutComponents/Header"
import { SideBar } from "../../components/LayoutComponents/SideBar"
import { Copyright } from "../../components/LayoutComponents/Copyright"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth";

export function UserSubscription() {
    const { user } = useContext(AuthContext)

    return (


        <div className="min-h-full text-white">
            <Header />

            <div className="flex">
                <SideBar />

                <div className="w-3/4 h-96 m-2 bg-slate-900 rounded-md p-2"> <a href='https://billing.stripe.com/p/login/3cs16x1OI0e6gkU144'>Informações da minha assin valid until: {user.validate}atura</a>

                    <Copyright />
                </div>

            </div>


        </div>


    )
}