import './App.css'
import { MainPage } from './pages/MainPage';
import {fontAtom} from "./store/state.ts";
import {useAtomValue} from "jotai";

function App() {
    const currentFont = useAtomValue(fontAtom);
  return (
      // I removed router, but here is the link how to deploy SPA to gh-pages
      // https://github.com/rafgraph/spa-github-pages?tab=readme-ov-file
    <div style={{ fontFamily: currentFont }}>
        <MainPage/>
    </div>
  );
}

export default App
