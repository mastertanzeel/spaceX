import Cover from "./Cover";
import MissionTable from "./table";

export default function Home(){
    return (
        <div>
            <Cover />
            {/* <h1 style={{paddingLeft: '10px', color: '#FBE23D'}}>Missions:</h1> */}
            <MissionTable />
        </div>
    )
}

