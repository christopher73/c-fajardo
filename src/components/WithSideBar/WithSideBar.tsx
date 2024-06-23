import SideBar from "../SideBar/SideBar";

export function WithSideBar({ children }: { children: React.ReactNode }) {
  const styles = {
    // allow to sidebar to on the left side of the screen and the content on the right side
    root: {
      display: "flex",
      flexDirection: "row",
    },
    children: {
      width: "100%",
    },
  };

  return (
    <div>
      <SideBar />
      <div
        className="sm:ml-64"
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
}
