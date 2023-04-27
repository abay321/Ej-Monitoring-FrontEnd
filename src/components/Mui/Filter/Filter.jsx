import { Card } from "antd";
import { Autocomplete, TextField } from "@mui/material";

function Filter() {
  return (
    <div
      style={{
        display: "flex",
        // textAlign: 'center'
        justifyContent: "center",
      }}
    >
      <Card
        bodyStyle={{
          padding: "0 2rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        style={{
          width: "100%",
        }}
      >
        <div
          className="title-filter"
          style={{
            padding: "0rem 0.5rem",
          }}
        >
          <h4
            style={{
              fontWeight: 500,
            }}
          >
            Cari Berdasarkan :
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={status}
            sx={{ width: 270 }}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 270 }}
            renderInput={(params) => <TextField {...params} label="Wilayah" />}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 270 }}
            renderInput={(params) => <TextField {...params} label="Area" />}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={jenisPengelola}
            sx={{ width: 270 }}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Pengelola" />
            )}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 270 }}
            renderInput={(params) => (
              <TextField {...params} label="Nama Pengelola" />
            )}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={jenisMesin}
            sx={{ width: 270 }}
            renderInput={(params) => (
              <TextField {...params} label="Jenis Mesin" />
            )}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 270 }}
            renderInput={(params) => <TextField {...params} label="Merk" />}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={jarkom}
            sx={{ width: 270 }}
            renderInput={(params) => <TextField {...params} label="Jarkom" />}
          />
        </div>
      </Card>
    </div>
  );
}

export default Filter;
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
const status = [{ label: "Update" }, { label: "Tidak Update" }];
const jenisMesin = [
  { label: "ATM" },
  { label: "MOBILE-ATM" },
  { label: "CRM" },
];
const jenisPengelola = [{ label: "Vendor" }, { label: "Branch" }];
const jarkom = [
  { label: "UNKNOWN" },
  { label: "VSAT" },
  { label: "MPLS" },
  { label: "LEASED-LINE" },
  { label: "MAMO" },
];
