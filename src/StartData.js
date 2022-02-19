export const links = [
  {
    id: Math.random().toString(),
    label: "file-1.1",
    type: "File",
  },
  {
    id: Math.random().toString(),
    label: "file-1.2",
    type: "File",
  },
  {
    id: Math.random().toString(),
    label: "folder-1.1",
    type: "Folder",
    children: [
      {
        id: Math.random().toString(),
        label: "file-2.1",
        type: "File",
      },
      {
        id: Math.random().toString(),
        label: "file-2.2",
        type: "File",
      },
      {
        id: Math.random().toString(),
        label: "folder-2.1",
        type: "Folder",
        children: [],
      },
    ],
  },
  {
    id: Math.random().toString(),
    label: "folder-1.2",
    type: "Folder",
    children: [
      {
        id: Math.random().toString(),
        label: "file-2.3",
        type: "File",
      },
      {
        id: Math.random().toString(),
        label: "file-2.4",
        type: "File",
      },
      {
        id: Math.random().toString(),
        label: "folder-2.2",
        type: "Folder",
        children: [],
      },
    ],
  },
];
