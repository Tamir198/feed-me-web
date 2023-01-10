import { useEffect, useState } from "react";
import TipItem from "../../components/TipItem/TipItem";
import { Api } from "../../services/api";
import styles from "./Tips.module.css"

function Tips() {

  const [tips, setTips] = useState([])

  async function getTips(){
    const res = await Api.get("foodTips/getTips");
    setTips(res.data)
  }

  // calling to the getTips function, once the component is loaded
  useEffect(() => {
    getTips()
  }, []);

  return (
    <div>
      {tips.allTips && tips.allTips.map(tip => <TipItem description = {tip.foodTip}/>)}
    </div>
  );
}

export default Tips;
