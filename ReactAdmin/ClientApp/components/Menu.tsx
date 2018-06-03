import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export class Menu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <style type="text/css">{`
                .panel-heading {
                    background-color: #623b2a !important;
                    color: #c39367 !important;
                    border-color: #623b2a !important;
                }
                .panel-body {
                    background-color: #dbbea4 !important;
                }
            `}</style>
            <Panel header="Мои организации">

                <ListGroup>
                    <ListGroupItem href="/counter">123
                    </ListGroupItem>
                    <ListGroupItem href="#" active>Организация 2</ListGroupItem>
                    <ListGroupItem href="#">Организация 3</ListGroupItem>
                </ListGroup>

                <Button type="button" className="btn btn-block btn-success">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Новая организация
                </Button>
            </Panel>
        </div>;
    }
}
