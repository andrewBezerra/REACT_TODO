import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Todo from './components/Todo';

//import '../node_modules/uikit/dist/js/uikit';
//import '../node_modules/uikit/dist/js/uikit-icons';
//import '../node_modules/uikit/dist/css/uikit.min.css';
//import '../node_modules/uikit/dist/css/uikit-core.min.css';
import './custom.css';



export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/todo'  >
                    <Todo />
                </Route>
            </Layout>
        );
    }
}
