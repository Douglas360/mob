import { Header } from "../../components/LayoutComponents/Header"
import { SideBar } from "../../components/LayoutComponents/SideBar"
import { Copyright } from "../../components/LayoutComponents/Copyright"

export function UserSubscription() {

    return (


        <div className="min-h-full text-white">
            <Header />

            <div className="flex">
                <SideBar />

                <div className="w-3/4 h-96 m-2 bg-slate-900 rounded-md p-2"> My Subscription

                    <Copyright />
                </div>

            </div>


        </div>


    )
}