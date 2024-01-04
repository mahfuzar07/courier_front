import React from 'react'
import styles from "@/styles/dashboard/modules/_widget_box.module.scss";
import { Card, Col, Statistic } from 'antd';

function WidgetBox({title, prefix, icon, value}) {
  return (
    <Card bordered={true} className={styles.widgetTopBox}>
      <div className={styles.contentWrapper}>
        <Statistic
          // className={styles.widgetTopBox.title}
          title={<div className={styles.title}>{title}</div>}
          value={value}
          //   precision={2}
          valueStyle={{
            color: "#fff",
          }}
          prefix={<div className={styles.prefix}>{prefix}</div>}
          //   suffix="%"
        />
        <div className={styles.iconArea}>{icon}</div>
      </div>
    </Card>
  );
}

export default WidgetBox