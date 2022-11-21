import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Divider } from '@mui/material';

import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

export function SideBar() {
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleDashboard = () => {
        return navigate("/dashboard")
    }

    const handleProfile = () => {
        return navigate("/profile")
    }

    const handleSubscription = () => {
        return navigate("/subscription")
    }

    const handleLogout = () => {
        logout()
    }
    return (
        <div className="w-60 h-96 bg-slate-900 shadow-sm m-2 rounded-md text-white"  >
            <ListItemButton component="a" onClick={() => handleProfile()}>
                <ListItemIcon>
                    <PermIdentityIcon className="text-white" />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItemButton>

            <ListItemButton component="a" onClick={() => handleSubscription()}>
                <ListItemIcon>
                    <AssignmentIcon className="text-white" />
                </ListItemIcon>
                <ListItemText primary="Minha Assinatura" />
            </ListItemButton>

            <ListItemButton component="a" onClick={() => handleDashboard()}>
                <ListItemIcon>
                    <DashboardIcon className="text-white" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>

            <Divider />

            <ListItemButton component="a" onClick={() => handleLogout()}>
                <ListItemIcon>
                    <ExitToAppIcon className="text-white" />
                </ListItemIcon>
                <ListItemText primary="Sair" />
            </ListItemButton>




        </div>
    )
}