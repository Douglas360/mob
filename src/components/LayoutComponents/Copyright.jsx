import { Link, Typography } from "@mui/material";

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https:/supertips.com.br/">
          Super Tips
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        {'v1.1.3'}
      </Typography>
    );
  }