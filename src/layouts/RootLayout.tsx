type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="root-layout">
      {/* <Navbar /> */}

      <main className="outlet-container">{children}</main>

      {/* <footer> */}
    </div>
  );
};

export default RootLayout;
