import { Header } from "../../../components/LayoutComponents/Header"
import betano from '../../../assets/betano-logo.png'
import { CopyrightDashboard } from "../../../components/LayoutComponents/CopyrightDashboard"
export function Betano() {
    return (
        <div className="min-h-full ">
            <Header />
            <main className="max-w-7xl mr-auto ml-auto items-center justify-center text-6xl bg-slate-700 mt-2 rounded-lg pb-4">
                <div className="flex flex-col  p-4 gap-4 text-white text-center items-center">
                    <strong>Aguarde ! <br/>Em desenvolvimento :)</strong><br/>
                    <img src={betano} alt="Super Tips" width={'300px'}/>
                </div>
                <CopyrightDashboard/>
            </main>
        </div>
    )
}