import { Link, Typography } from "@mui/material";
import { useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import { dateFormatWithHours } from "../../functions/formatters";

export function CopyrightDashboard(props) {
  const { user } = useContext(AuthContext)
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https:/supertips.com.br/">
          Super Tips 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'} | Acesso liberado até {dateFormatWithHours(user.validate)}
      </Typography>
    );
  }