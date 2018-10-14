import * as React from "react";
import Hello from "./Hello";

interface IHelloBoxProps {
    compiler: string;
    framework: string;
}

export class HelloBox extends React.Component<IHelloBoxProps> {
    constructor(props: IHelloBoxProps) {
        super(props);
    }
    public render() {
        return (
            <div>
                <Hello
                    compiler={this.props.compiler}
                    framework={this.props.framework}
                />
            </div>
        );
    }
}
