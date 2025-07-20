import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.jsx'

const client = new ApolloClient({
    uri: 'http://localhost:5050/graphql',
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(

    <ApolloProvider client={client} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
)
