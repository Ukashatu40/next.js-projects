import { ReactNode } from "react";

const EcommerceLayout = ({
  children,
  product,
}: {
  children: ReactNode;
  product: ReactNode;
}) => {
  return (
    <div>
      {product}
      {children}
    </div>
  );
};

export default EcommerceLayout;
