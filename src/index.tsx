import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/counter';
import {Provider} from 'react-redux';
import {store} from './redux/store';
class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Counter name="messi"/>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


