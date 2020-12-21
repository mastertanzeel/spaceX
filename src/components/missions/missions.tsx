import React, { useState, useEffect } from "react";
import { useMissionNamesQuery } from "../../generated/graphql";

import Table from "../table"

const Missions = () => {
  const [missionFetched, setMissionFetched] = useState<boolean>(false);
  const [missions, setMissions] = useState<any>([]);
  const { data, loading, error } = useMissionNamesQuery();

  useEffect(() => {
    if (!loading) {
      setMissionFetched(true);
    }
  }, [loading, data]);

  return (
    <div>
      <Table data={data} />
      {/* {
        missionFetched === false ? <h1 style={{ marginTop: '150px' }}>Loading.....</h1> : !!data &&
          data?.missions?.map(
            (missionName, index) => {
              return (
               <Table />
              )
            }
          )
      } */}
    </div>

  );
};

export default Missions;
