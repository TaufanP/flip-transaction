import { defaultValue as dv } from "../../constants";

const ft = dv.filterType;

const dummyFilter = [
  {
    id: ft.none,
    label: "URUTKAN",
  },
  {
    id: ft.nameAsc,
    label: "Nama A-Z",
  },
  {
    id: ft.nameDsc,
    label: "Nama Z-A",
  },
  {
    id: ft.newest,
    label: "Tanggal Terbaru",
  },
  {
    id: ft.oldest,
    label: "Tanggal Terlama",
  },
];

export { dummyFilter };
