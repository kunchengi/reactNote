// 引入React.Component
import { Component } from 'react';
// 引入Hello组件，如果Hello文件夹有index.jsx，则直接引入文件夹名即可
import Hello from './compoents/Hello';

class APP extends Component {
    render() {
        return (
            <div>
                < Hello name="react" />
            </div>
        )
    }
}

export default APP;