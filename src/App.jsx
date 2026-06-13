import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/Scroll";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <AppRoutes />
      <ScrollToTop />
      <ScrollProgress/>
      <Scroll />
    </div>
  );
}

export default App;
