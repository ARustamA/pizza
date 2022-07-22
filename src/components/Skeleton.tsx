import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
   <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <circle cx="133" cy="116" r="114" />
      <rect x="43" y="267" rx="0" ry="0" width="168" height="27" />
      <rect x="19" y="318" rx="0" ry="0" width="232" height="75" />
      <rect x="19" y="416" rx="0" ry="0" width="66" height="27" />
      <rect x="133" y="416" rx="16" ry="16" width="127" height="31" />
      <rect x="201" y="430" rx="0" ry="0" width="9" height="4" />
   </ContentLoader>
)

export default Skeleton