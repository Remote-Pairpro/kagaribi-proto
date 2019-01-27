import Drower from "@material-ui/core/Drawer";
import React from "react";
import TopAppBarDrowerContents from "./TopAppBarDrowerContents";

interface ITopAppBarDrowerProps {
    isDrowerOpen: boolean;
    toggleDrower: any;
}

class TopAppBarDrower extends React.Component<ITopAppBarDrowerProps> {
    constructor(topAppBarDrowerProps: ITopAppBarDrowerProps) {
        super(topAppBarDrowerProps);
    }

    public render() {
        return (
            <div>
                <Drower
                    open={this.props.isDrowerOpen}
                    onClose={this.props.toggleDrower(false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.toggleDrower(false)}
                        onKeyDown={this.props.toggleDrower(false)}
                    >
                        <TopAppBarDrowerContents />
                    </div>
                </Drower>
            </div>
        );
    }
}

export default TopAppBarDrower;
