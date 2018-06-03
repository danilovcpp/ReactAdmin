import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Menu } from './Menu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            <NavMenu />
            <div className='container'>
                <div className='col-sm-3'>
                    <Menu />
                </div>
                <div className='col-sm-9'>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
