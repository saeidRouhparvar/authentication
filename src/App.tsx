import { ChakraBaseProvider } from "@chakra-ui/react";
import { useRoutes } from "react-router-dom";
import Welcome from "./pages/login/Wellcome";
import OtpVerification from "./pages/login/OtpVerification";
import OtpCode from "./pages/login/OtpCode";
import { AuthProvider } from "./contexts/Auth";
import Dashboard from "./pages/dashboard";


function App() {
 
  const routes = useRoutes([
    {path:'/',element: <Welcome/>},
    {path:'/otp',element: <OtpVerification/>},
    {path:'/otp_code',element: <OtpCode/>},
    {path:'/dashboard',element: <Dashboard/>},

  ])
  return (
    <ChakraBaseProvider>
      <AuthProvider>
          {routes}
      </AuthProvider>
    </ChakraBaseProvider>
  );
}

export default App;
