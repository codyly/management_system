import React from 'react';
import ReactDOM from 'react-dom';
import {Statistic, Row, Col, Card, Timeline, Icon, Calendar } from 'antd';
function onPanelChange(value, mode) {
    console.log(value, mode);
}
class DashText extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "#ffffff"}}>
                <Row>
                    <Col span={8} style={{margin: "12px"}}>
                        <Card title="系统通知">
                            <p style={{color: "#3c3c3c"}}>
                            <Icon type="notification"/><label>&nbsp;&nbsp;</label>
                                关于股票管理系统于2019-1-23的维护通知
                            </p>
                            <p style={{color: "#3c3c3c"}}>
                            <Icon type="notification"/><label>&nbsp;&nbsp;</label>
                                周股市总结
                            </p>
                            <p style={{color: "#3c3c3c"}}>
                            <Icon type="notification"/><label>&nbsp;&nbsp;</label>
                                今日股市总结
                            </p>
                            <p style={{color: "red"}}>
                                <Icon type="notification"/><label>&nbsp;&nbsp;</label>
                                [热]新管理系统上线！
                            </p>
                            
                        </Card>
                        <Card title="捷径" style={{marginTop: "24px", paddingLeft: "12px", display: "inline-blocks"}}>
                            <Row>
                            <Col span={6}>
                            <div style={{color: "#7c7c7c"}}>
                            <Icon type="mail" style={{fontSize: "48px"}}/><br></br>
                            <label>&nbsp;&nbsp;邮箱</label>    
                            </div>
                            </Col>
                            <Col span={6}>
                            <div style={{color: "#7c7c7c"}}>
                            <Icon type="video-camera" style={{fontSize: "48px"}}/><br></br>
                            <label>&nbsp;&nbsp;视频</label>    
                            </div>
                            </Col>
                            <Col span={6}>
                            <div style={{color: "#7c7c7c"}}>
                            <Icon type="cloud" style={{fontSize: "48px"}}/><br></br>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;云</label>    
                            </div>
                            </Col>
                            <Col span={6}>
                            <div style={{color: "#7c7c7c"}}>
                            <Icon type="contacts" style={{fontSize: "48px"}}/><br></br>
                            <label>&nbsp;联系人</label>    
                            </div>
                            </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={7} style={{margin: "12px"}}>
                        <Card title="任务线" >
                            <Timeline>
                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="red">
                                <p>Solve initial network problems 1</p>
                                <p>Solve initial network problems 2</p>
                                <p>Solve initial network problems 3 2015-09-01</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                                </Timeline.Item>
                            </Timeline>
                        </Card>
                    </Col>
                    <Col span={7} style={{margin: "12px"}}>
                        <Card title="日历">
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </Card> 
                    </Col>
                </Row>
            
 
            
            </div>
        );
    }
}

export default DashText;