import ClientComponent from "../components/client-component";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientComponent />
        {children}
      </body>
    </html>
  );
}
