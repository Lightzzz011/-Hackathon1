import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Home from "./pages/Home"; // Ensure this matches the file name
import Reservations from "./pages/Reservations"; // Ensure this matches the file name
import Settings from "./pages/Settings"; // Ensure this matches the file name
import ContactUs from "./pages/ContactUs"; // Ensure this matches the file name
import Sidebar from "./components/Sidebar"; // Ensure this matches the file name
import { supabase } from "./lib/supabase"; // Ensure this matches the file name

const App = () => {
  const [, setUser] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Listen for Supabase auth state changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Apply dark mode class to the root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen flex ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        {/* Sidebar */}
        <Sidebar isDarkMode={isDarkMode} />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <Routes location={useLocation()} key={useLocation().pathname}>
              {/* Home Route */}
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              {/* Reservations Route */}
              <Route
                path="/reservations"
                element={
                  <motion.div
                    key="reservations"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Reservations />
                  </motion.div>
                }
              />
              {/* Settings Route */}
              <Route
                path="/settings"
                element={
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Settings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  </motion.div>
                }
              />
              {/* Contact Us Route */}
              <Route
                path="/contact-us"
                element={
                  <motion.div
                    key="contact-us"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ContactUs />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
};

export default App;