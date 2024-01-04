import React, { useEffect, useState } from "react";
import { Spin, Watermark } from "antd";
import styles from "@/styles/dashboard/modules/_fullpage_spinner.module.scss";

function FullpageSpinner({loading,text='Loading'}) {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    if (loading === true) {
        setSpin(true);
    }else{
        setSpin(false)
    }
  }, [loading]);
  

  if (spin) {
    return (
      <div className={styles.fullpageSpinner}>
        <div className={styles.items}>
          <Spin size="large" spinning={spin}>
            <div className="content">
              <div className={styles.textArea}>{text}</div>
            </div>
          </Spin>
        </div>
      </div>
    );
  }else{
    return (<></>)
  }
      
}

export default FullpageSpinner;
