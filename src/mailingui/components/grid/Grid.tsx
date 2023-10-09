import * as React from "react";
import { Column, Row } from "@react-email/components";

const BREAKPOINT = 480;
const GAP = 4;

type CellProps = {
  width?: number;
  breakpoint?: number;
  gap?: number;
};

const Cell: React.FC<React.PropsWithChildren<CellProps>> = ({
  width = 50,
  breakpoint = BREAKPOINT,
  children,
}) => {
  const minWidth = width > 100 ? 100 : width;
  return (
    <Column
      style={{
        display: "inline-block",
        minWidth: `${minWidth}%`,
        maxWidth: "100%",
        width: `calc(${breakpoint ** 2}px - ${breakpoint * 100}%)`,
      }}
    >
      {children}
    </Column>
  );
};

const Divider: React.FC<Omit<CellProps, "gap">> = ({
  width = GAP,
  breakpoint = BREAKPOINT,
}) => {
  return (
    <Column
      style={{
        height: 0,
        display: "inline-block",
        minWidth: `${width}%`,
        maxWidth: "100%",
        width: `calc(${breakpoint ** 2}px - ${breakpoint * 100}%)`,
      }}
    />
  );
};

const Grid: React.FC<
  React.PropsWithChildren<{ breakpoint?: number; gap?: number }>
> = ({ breakpoint = BREAKPOINT, gap = GAP, children }) => {
  // Create an array to hold the final list of children with dividers
  const childrenWithDividers: React.ReactNode[] = [];
  let cellCount = 0;
  let gapCount = 0;

  // Loop through the children and add dividers as needed
  React.Children.forEach(children, (child, index) => {
    childrenWithDividers.push(child);
    cellCount++;
    // Add a Divider after each Cell except for the last one
    if (index < React.Children.count(children) - 1 && gap) {
      childrenWithDividers.push(
        <Divider width={gap} key={`divider-${index}`} />
      );
      gapCount++;
    }
  });

  // Clone and modify the props of children components if needed
  const childrenWithModifiedProps = React.Children.map(
    childrenWithDividers,
    (child) => {
      // Check if the child is a Cell and modify its props
      if (React.isValidElement(child) && child.type === Cell) {
        const propWidth: number = child.props.width ?? (1 / cellCount) * 100;
        const width = propWidth - (gap * gapCount) / cellCount;
        return React.cloneElement(child as React.ReactElement<CellProps>, {
          breakpoint,
          width,
        });
      }

      // If not a Cell, return it as is
      return child;
    }
  );

  return <Row>{childrenWithModifiedProps}</Row>;
};

export { Cell, Grid };
