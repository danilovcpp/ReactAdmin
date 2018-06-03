import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Panel, Tabs, Tab } from 'react-bootstrap';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
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
            <Panel>
                <Tabs defaultActiveKey={1} animation={false} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Главная">
                        <h3>Основная информация</h3>
                        <form>
                            <div className="form-group">
                                <label>Полное название организации</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите полное название организации" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                                <div className="form-group">
                                    <label>Краткое название организации</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите краткое название организации" />
                                        <small id="emailHelp" className="form-text text-muted">Данное название будет отображаться в предварительной записи</small>
                        </div>

                                    <div className="form-group">
                                        <label>Тип организации</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                        <fieldset className="form-group">
                                        <legend>Radio buttons</legend>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                                                    Option one is this and that&mdash;be sure to include why it's great
                            </label>
                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                                        Option two can be something else and selecting it will deselect option one
                            </label>
                            </div>
                                                <div className="form-check disabled">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
                                                            Option three is disabled
                            </label>
                            </div>
                        </fieldset>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" />
                                                            Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Сохранить</button>
                        
                        </form>





                    </Tab>
                    <Tab eventKey={2} title="Специалисты">Tab 2 content</Tab>
                    <Tab eventKey={3} title="Услуги">Tab 3 content</Tab>
                    <Tab eventKey={4} title="Расписание">Tab 3 content</Tab>
                    <Tab eventKey={5} title="Посетители">Tab 3 content</Tab>
                    <Tab eventKey={6} title="Настройки">Tab 3 content</Tab>
                </Tabs>
            </Panel>
            
        </div>;
    }
}
