import Navigation from "../Navigation"



export const metadata = {
  title: "EduTask",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navigation/>
      
     
   
        {children}
        
      </body>
    </html>
  );
}