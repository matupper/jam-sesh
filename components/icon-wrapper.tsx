import * as React from "react";
import { LucideProps } from "lucide-react";

interface IconWrapperProps extends LucideProps {
  icon: React.ComponentType<LucideProps>;
}

export function IconWrapper({ icon: Icon, ...props }: IconWrapperProps) {
  return (
    <Icon
      // apply your defaults here
      size={24}
      color="currentColor"
      strokeWidth={2}
      {...props}
    />
  );
}
