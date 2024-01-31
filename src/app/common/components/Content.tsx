import Container from "@mui/material/Container";
import { createUseStyles } from "react-jss";
import reactLogo from '../../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useState } from "react";

const useStyles = createUseStyles({
    container: {
      marginTop: '60px'
    }
  });

export const Content = () => {
    const [count, setCount] = useState(0);
    const styles = useStyles();
    
    return (
        <Container maxWidth="md" className={styles.container}>
            <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
        </Container>
    );
}