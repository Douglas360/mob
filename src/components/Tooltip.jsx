import { styled, Tooltip as MUITooltip, tooltipClasses } from '@mui/material';

const BootstrapTooltip = styled(({ className, ...props }) => (
  <MUITooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export function Tooltip({ children, title, placement }) {
  return (
    <BootstrapTooltip placement={placement} title={title}>
      {children}
    </BootstrapTooltip>
  );
}
