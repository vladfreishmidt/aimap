import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
   <Router>
      <QueryClientProvider client={queryClient} contextSharing={true}>
         <App/>
      </QueryClientProvider>
   </Router>
   ,
   document.getElementById('root')
);



