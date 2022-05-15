import { useNavigate, useLocation } from "react-router-dom";
function Location () {
    let navigate = useNavigate();
    const locate = [
        {
            id:1, 
            name: 'America',
            latitude: '37.090240',
            longitude: '-95.712891',
            tel: '0123456',
            fax: '0123456'
        },
        {
            id:2, 
            name: 'Canada',
            latitude: '56.130367',
            longitude: '-85.712891',
            tel: '987654',
            fax: '987654'
        },
        {
            id:3, 
            name: 'Japan',
            latitude: '35.130367',
            longitude: '-51.712891',
            tel: '456789',
            fax: '456789'
        },
        {
            id:4, 
            name: 'Korea',
            latitude: '43.130367',
            longitude: '-72.712891',
            tel: '123456',
            fax: '123456'
        },
        {
            id:5, 
            name: 'France',
            latitude: '92.130367',
            longitude: '-65.712891',
            tel: '789321',
            fax: '789321'
        }
    ]

    const onClickFunc = (e,i) => {
        console.log(locate[i]);
        navigate('/location/detail', {state: locate[i]});

    }
    return (
        <>
            <h1>Company Location</h1>
            <ul>
                {locate.map((x,i) => 
                    <li>{x.name}<input type='button' value="click" onClick={(e)=>onClickFunc(e,i)}/></li>)}
            </ul>
        </>
    );
}

function LocationDetail () {
    const location = useLocation();
    console.log('location',location)
    return (
    <div style={{textAlign:'center'}}>
        <h2>Location Details</h2>
        <div>
            <p>Warehouse ID : {location.state.id}</p>
            <p>Warehouse Name : {location.state.name}</p>
            <p>Latitude : {location.state.latitude}</p>
            <p>Longitude : {location.state.longitude}</p>
            <p>Tel no. : {location.state.tel}</p>
            <p>Fax : {location.state.fax}</p>
        </div>
        
    </div>
    );
}
export {Location, LocationDetail};