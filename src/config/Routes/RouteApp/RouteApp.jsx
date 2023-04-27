import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  CalculateCassete,
  FullDashboard,
  Home,
  Login,
  StatusMachineH0,
  StatusMachineH1,
  ReportReplenishment,
  StatusTransaksi,
  KartuTertelan,
  EjBrowser,
  DetailSearch,
  MappingCode,
  MappingKey,
  UserManagement,
  RoleAccess,
  BatchTimeUpdate,
  MapBinKartu,
  ListOpCode,
  MapJenisTransaksi,
  AuditTrail,
  ChangePassword,
} from "../../../pages/Page";
import MainApp from "../MainApp/MainApp";
import NotFound from "../../../pages/404/NotFound";

function RouteApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") || false
  );

  return (
    <Routes>
      <Route
        path="login"
        element={
          isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />

      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
        element={
          isAuthenticated ? (
            <MainApp setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <Navigate to="login" />
          )
        }
      >
        <Route index element={<Home />} />
        {/* <Route path="full-dashboard" element={<FullDashboard />} /> */}

        {/* Status Machine */}
        <Route path="StatMach0" element={<StatusMachineH0 />} />
        <Route path="StatMach1" element={<StatusMachineH1 />} />
        <Route path="calculate-cassete" element={<CalculateCassete />} />
        <Route path="report-replenishment" element={<ReportReplenishment />} />

        <Route path="status-transaksi" element={<StatusTransaksi />} />
        <Route path="kartu-tertelan" element={<KartuTertelan />} />
        <Route path="ej-browser" element={<EjBrowser />} />
        <Route path="detail-search" element={<DetailSearch />} />

        {/* Menu Admin */}
        <Route path="Admin/Mappingcode" element={<MappingCode />} />
        <Route path="Admin/MappingKey" element={<MappingKey />} />
        <Route path="Admin/UserManagement" element={<UserManagement />} />
        <Route path="Admin/Role" element={<RoleAccess />} />
        <Route path="Admin/BatchTimeUpdate" element={<BatchTimeUpdate />} />
        <Route path="Admin/Mappingcard" element={<MapBinKartu />} />
        <Route path="Admin/ListOPCode" element={<ListOpCode />} />
        <Route path="Admin/Transaction" element={<MapJenisTransaksi />} />
        <Route path="Admin/Audittrail" element={<AuditTrail />} />

        <Route path="change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
}

export default RouteApp;
