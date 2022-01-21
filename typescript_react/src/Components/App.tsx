import React, {Component} from 'react';

type PropType = {};
type StateType = {};

export default class App extends Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
}