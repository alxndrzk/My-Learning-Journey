import React from "react";
import {createRoot} from "react-dom/client";

const heading = React.createElement("h1", {}, "Biodata Perusahaan");

const listItem1 = React.createElement("li", {}, "Nama Perusahaan: PT. Maju Mundur");
const listItem2 = React.createElement("li", {}, "Bidang: Edukasi");
const listItem3 = React.createElement("li", {}, "Tagline: Learn Once, Code Anywhere");

const unorderedList = React.createElement("ul", {}, [listItem1, listItem2, listItem3]);

const container = React.createElement("div", {}, [heading, unorderedList]);

const root = createRoot(document.getElementById("root"));
root.render(container);
