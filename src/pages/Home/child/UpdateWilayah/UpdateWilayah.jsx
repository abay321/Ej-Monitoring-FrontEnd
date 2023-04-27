import React from "react";
import { Card, Divider, Table } from "antd";
import { Column, Pie } from "@ant-design/plots";

import style from "./UpdateWilayah.module.css";

function UpdateWilayah() {
  const data = [
    {
      name: "Update",
      merk: "REG01",
      jumlah: 1178,
    },
    {
      name: "Update",
      merk: "REG02",
      jumlah: 823,
    },
    {
      name: "Update",
      merk: "REG03",
      jumlah: 1690,
    },
    {
      name: "Update",
      merk: "REG04",
      jumlah: 1562,
    },
    {
      name: "Update",
      merk: "REG05",
      jumlah: 1442,
    },
    {
      name: "Update",
      merk: "REG06",
      jumlah: 1177,
    },
    {
      name: "Update",
      merk: "REG07",
      jumlah: 1170,
    },
    {
      name: "Update",
      merk: "REG08",
      jumlah: 1617,
    },
    {
      name: "Update",
      merk: "REG09",
      jumlah: 727,
    },
    {
      name: "Update",
      merk: "REG10",
      jumlah: 665,
    },
    {
      name: "Update",
      merk: "REG11",
      jumlah: 515,
    },
    {
      name: "Update",
      merk: "REG12",
      jumlah: 255,
    },
    {
      name: "Update",
      merk: "UNKNOWN",
      jumlah: 17,
    },
    {
      name: "Tidak Update",
      merk: "REG01",
      jumlah: 34,
    },
    {
      name: "Tidak Update",
      merk: "REG02",
      jumlah: 25,
    },
    {
      name: "Tidak Update",
      merk: "REG03",
      jumlah: 41,
    },
    {
      name: "Tidak Update",
      merk: "REG04",
      jumlah: 28,
    },
    {
      name: "Tidak Update",
      merk: "REG05",
      jumlah: 18,
    },
    {
      name: "Tidak Update",
      merk: "REG06",
      jumlah: 34,
    },
    {
      name: "Tidak Update",
      merk: "REG07",
      jumlah: 41,
    },
    {
      name: "Tidak Update",
      merk: "REG08",
      jumlah: 44,
    },
    {
      name: "Tidak Update",
      merk: "REG09",
      jumlah: 23,
    },
    {
      name: "Tidak Update",
      merk: "REG10",
      jumlah: 17,
    },
    {
      name: "Tidak Update",
      merk: "REG11",
      jumlah: 11,
    },
    {
      name: "Tidak Update",
      merk: "REG12",
      jumlah: 1,
    },
    {
      name: "Tidak Update",
      merk: "UNKNOWN",
      jumlah: 0,
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
      statusEj: "Update",
      reg01: 32,
      reg02: 32,
      reg03: 32,
      reg04: 32,
      reg05: 32,
      reg06: 32,
      reg07: 32,
      reg08: 32,
      reg09: 32,
      reg10: 32,
      reg11: 32,
      reg12: 32,
      unknown: 3,
    },
    {
      key: "2",
      statusEj: "Tidak Update",
      reg01: 32,
      reg02: 32,
      reg03: 32,
      reg04: 32,
      reg05: 32,
      reg06: 32,
      reg07: 32,
      reg08: 32,
      reg09: 32,
      reg10: 32,
      reg11: 32,
      reg12: 32,
      unknown: 3,
    },
  ];

  const columnsTable = [
    {
      title: "Status EJ",
      dataIndex: "statusEj",
      key: "statusEj",
      align: "center",
      fixed: "left",
      className: "table_a",
    },
    {
      title: "REG01",
      dataIndex: "reg01",
      key: "reg01",
      align: "center",
    },
    {
      title: "REG02",
      dataIndex: "reg02",
      key: "reg02",
      align: "center",
    },
    {
      title: "REG03",
      dataIndex: "reg03",
      key: "reg03",
      align: "center",
    },
    {
      title: "REG04",
      dataIndex: "reg04",
      key: "reg04",
      align: "center",
    },
    {
      title: "REG05",
      dataIndex: "reg05",
      key: "reg05",
      align: "center",
    },
    {
      title: "REG06",
      dataIndex: "reg06",
      key: "reg06",
      align: "center",
    },
    {
      title: "REG07",
      dataIndex: "reg07",
      key: "reg07",
      align: "center",
    },
    {
      title: "REG08",
      dataIndex: "reg08",
      key: "reg08",
      align: "center",
    },
    {
      title: "REG09",
      dataIndex: "reg09",
      key: "reg09",
      align: "center",
    },
    {
      title: "REG10",
      dataIndex: "reg10",
      key: "reg10",
      align: "center",
    },
    {
      title: "REG11",
      dataIndex: "reg11",
      key: "reg11",
      align: "center",
    },
    {
      title: "REG12",
      dataIndex: "reg12",
      key: "reg12",
      align: "center",
    },
    {
      title: "UNKNOWN",
      dataIndex: "unknown",
      key: "unknown",
      align: "center",
    },
  ];

  return (
    <Card
      className={style.card}
      hoverable
      bodyStyle={{
        padding: "0 1rem 1rem 1rem",
        display: "flex",
        flexDirection: "column",
      }}
      // title="Status Mesin Berdasarkan Wilayah"
      // headStyle={{
      //   fontSize: "20px",
      //   textAlign: "center",
      // }}
      // style={{
      //   margin: "1rem auto",
      //   borderRadius: "30px",
      //   width: "100%",
      //   border: "1px solid #ccc",
      //   padding: "1rem",
      //   overflow: "hidden",
      // }}
    >
      <div
        style={{
          fontSize: "12px",
          padding: "10px",
        }}
      >
        <h1
          style={{
            fontWeight: "500",
          }}
        >
          Status Mesin Berdasarkan Wilayah
        </h1>
      </div>
      <Column
        className={style.chartbar}
        {...configColumn}
        // style={{
        //   width: "100%",
        //   height: "400px",
        //   overflow: "hidden",
        // }}
      />
      <Divider />
      <div
        className={style.table_container}
        // style={{ width: "100%", overflow: "auto" }}
      >
        <Table
          // bordered
          className={style.table}
          dataSource={dataSourceTable}
          columns={columnsTable}
          pagination={false}
          size="small"
          // style={{width: '100%'}}
        />
      </div>
    </Card>
  );
}

export default UpdateWilayah;
