import { useData } from "nextra/data";
import { Resizable } from "re-resizable";

export const DemoPreview = () => {
  const { type, html } = useData();

  return (
    <Resizable
      bounds="parent"
      minWidth="320px"
      handleStyles={{
        right: {
          right: "initial",
          left: "100%",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
          width: "auto",
          cursor: "ew-resize",
        },
      }}
      handleClasses={{
        right: "hidden sm:flex items-center",
      }}
      handleComponent={{
        right: <div className="h-8 w-1.5 rounded-full bg-stone-100" />,
      }}
    >
      <div>
        <iframe
          className="w-full rounded-md"
          style={{
            height: getIframeHeight(type),
          }}
          id="Basic Usage"
          title="Basic Usage"
          srcDoc={html}
        />
      </div>
    </Resizable>
  );
};

const getIframeHeight = (type: string): number => {
  switch (type) {
    case "badge":
      return 120;
    case "button":
      return 160;
    case "divider":
      return 230;
    case "text":
      return 340;
    default:
      return 350;
  }
};
