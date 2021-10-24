import { defaultValue as dv } from "../../constants";

const { none, nameAsc, nameDsc, oldest, newest } = dv.sortType;

const dummySorts = [
  {
    id: none,
    label: "URUTKAN",
  },
  {
    id: nameAsc,
    label: "Nama A-Z",
  },
  {
    id: nameDsc,
    label: "Nama Z-A",
  },
  {
    id: newest,
    label: "Tanggal Terbaru",
  },
  {
    id: oldest,
    label: "Tanggal Terlama",
  },
];

export { dummySorts };
