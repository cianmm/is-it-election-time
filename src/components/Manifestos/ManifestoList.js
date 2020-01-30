import React from "react";
import ManifestoItem from "./ManifestoItem";
import UnorderedList from "../UnorderedList";

const ManifestoList = () => {
  return (
    <UnorderedList>
      <ManifestoItem href="https://www.fiannafail.ie/wp-content/uploads/2020/01/Fianna-Fail-General-Election-Manifesto-2020.pdf">
        Fianna Fáil
      </ManifestoItem>
      <ManifestoItem href="https://election2020.finegael.ie/pdf/FG_GE20_Manifesto.pdf">
        Fine Gael
      </ManifestoItem>
      <ManifestoItem href="https://manifesto.pbp.ie/wp-content/uploads/2020/01/Paople-Before-Profit-General-Election-Manifesto-2020.pdf">
        People before Profit
      </ManifestoItem>
      <ManifestoItem href="https://www.greenparty.ie/wp-content/uploads/2020/01/GP-manifesto-2020-FINAL.pdf">
        Green Party
      </ManifestoItem>
      <ManifestoItem href="https://www.sinnfein.ie/files/2020/SF_GE2020_Manifesto.pdf">
        Sinn Féin
      </ManifestoItem>
      <ManifestoItem href="https://www.labour.ie/manifesto/labour-manifesto-2020/">
        Labour
      </ManifestoItem>
      <ManifestoItem href="https://www.socialdemocrats.ie/what-we-stand-for/">
        Social Democrats
      </ManifestoItem>
    </UnorderedList>
  );
};

export default ManifestoList;
