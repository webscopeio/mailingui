import { Resizable } from "re-resizable";

export const Preview = ({ html, height }: { html: string, height?: number }) => {
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
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
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
            height: height ?? 400,
          }}
          id="Basic Usage"
          title="Basic Usage"
          srcDoc={html}
        />
      </div>
    </Resizable>
  );
};