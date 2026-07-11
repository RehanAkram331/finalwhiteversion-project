import { Theme } from './settings/types';
import { HomepageDirectionAPremiumCleanSaaS } from './components/generated/HomepageDirectionAPremiumCleanSaaS';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <HomepageDirectionAPremiumCleanSaaS />
    </>);
  // %EXPORT_STATEMENT%
}

export default App;