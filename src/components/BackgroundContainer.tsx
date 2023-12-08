import { FC, PropsWithChildren } from "react"

export const BackgroundContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="background-container">{children}</div>
}
