import { Backdrop } from "@mui/material"
import { MouseEventHandler } from "react";
import { Loading } from "./Loading"

type OverlayLoadingProps = {
  open: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * OverlayLoading
 *
 * @param open
 * @param onClick
 * @returns
 */
export const OverlayLoading = ({open, onClick}: OverlayLoadingProps) => {
  return <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={onClick}
>
  <Loading />
</Backdrop>
}