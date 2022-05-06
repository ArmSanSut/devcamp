import { Row, Col } from 'antd';
import TableComp from './Table';
function ContentComp (){
    return (<>
        <div style={{alignItems: 'center' }}>
        <Row>
            <Col span={24}>
                <TableComp />
            </Col>
        </Row>
        
        </div>
    </>
        
    );
}
export default ContentComp;