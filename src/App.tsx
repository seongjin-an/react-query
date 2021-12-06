import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./components/reactQuery/Example";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import QuickStart from "./components/reactQuery/QuickStart";
import Pagination from "./components/reactQuery/Pagination";
import InfiniteScroll from "./components/reactQuery/InfiniteScroll";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools/>
        {/*<Example/>*/}
        {/*<QuickStart/>*/}
        {/*<Pagination/>*/}
        <InfiniteScroll/>
    </QueryClientProvider>
  );
}

export default App;
