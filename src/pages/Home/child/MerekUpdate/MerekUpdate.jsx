import React from "react";
import { Card, Divider, Table } from "antd";
import { Column } from "@ant-design/plots";

import style from "./MerekUpdate.module.css";

function MerekUpdate() {
  const data = [
    {
      name: "Update",
      merk: "WINCOR",
      jumlah: 8583,
    },
    {
      name: "Update",
      merk: "NCR",
      jumlah: 1163,
    },
    {
      name: "Update",
      merk: "HITACHI",
      jumlah: 301,
    },
    {
      name: "Update",
      merk: "OKI",
      jumlah: 1630,
    },
    {
      name: "Update",
      merk: "DIEBOLD.",
      jumlah: 1161,
    },
    {
      name: "Tidak Update",
      merk: "WINCOR",
      jumlah: 292,
    },
    {
      name: "Tidak Update",
      merk: "NCR",
      jumlah: 8,
    },
    {
      name: "Tidak Update",
      merk: "HITACHI",
      jumlah: 1,
    },
    {
      name: "Tidak Update",
      merk: "OKI",
      jumlah: 3,
    },
    {
      name: "Tidak Update",
      merk: "DIEBOLD.",
      jumlah: 13,
    },
  ];
  const configColumn = {
    data,
    isGroup: true,
    xField: "merk",
    yField: "jumlah",
    seriesField: "name",
    color: ["#0F2B5B", "#FCD116"],
    label: {
      position: "top",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };

  const dataSourceTable = [
    {
      key: "1",
      status: "Update",
      wincor: 8583,
      ncr: 1163,
      hitachi: 301,
      oki: 1630,
      diebold: 1161,
    },
    {
      key: "2",
      status: "Tidak Update",
      wincor: 292,
      ncr: 8,
      hitachi: 1,
      oki: 3,
      diebold: 13,
    },
  ];

  const columnsTable = [
    {
      title: "Status EJ",
      dataIndex: "status",
      key: "status",
      align: "center",
      className: 'table_a',
    },
    {
      title: "WINCOR",
      dataIndex: "wincor",
      key: "wincor",
      align: "center",
    },
    {
      title: "NCR",
      dataIndex: "ncr",
      key: "ncr",
      align: "center",
    },
    {
      title: "HITACHI",
      dataIndex: "hitachi",
      key: "hitachi",
      align: "center",
    },
    {
      title: "OKI",
      dataIndex: "oki",
      key: "oki",
      align: "center",
    },
    {
      title: "DIEBOLD",
      dataIndex: "diebold",
      key: "diebold",
      align: "center",
    },
  ];

  return (
    <Card
      size="small"
      // title="Status Mesin Berdasarkan Merek"
      headStyle={{
        // padding:0
        textAlign: "center",
        fontSize: '15px'
      }}
      bodyStyle={{
        padding: "0 1rem 1rem 1rem",
        display:'flex',
        flexDirection: 'column'
      }}
      className={style.card}
      hoverable
    >
      <div style={{
          fontSize: '12px',
          padding:'10px',
      }}>
        <h1 style={{
           fontWeight: '500'
        }}>Status Mesin Berdasarkan Mesin</h1>
      </div>
      <Column
        className={style.chartbar}
        {...configColumn}
        // style={{
        //   height: "380px",
        //   overflow: "hidden",
        // }}
      />
      <Table
        className={style.table}
        // bordered="true"
        size="small"
        pagination={false}
        dataSource={dataSourceTable}
        columns={columnsTable}
      />
    </Card>
  );
}

export default MerekUpdate;
