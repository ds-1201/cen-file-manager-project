export const links = [
  {
    label: "file-1.1",
    type: "File",
  },
  {
    label: "file-1.2",
    type: "File",
  },
  {
    label: "folder-1.1",
    type: "Folder",
    children: [
      {
        label: "file-2.1",
        type: "File",
      },
      {
        label: "file-2.2",
        type: "File",
      },
      {
        label: "folder-2.1",
        type: "Folder",
        children: [],
      },
    ],
  },
  {
    label: "folder-1.2",
    type: "Folder",
    children: [
      {
        label: "file-2.3",
        type: "File",
      },
      {
        label: "file-2.4",
        type: "File",
      },
      {
        label: "folder-2.2",
        type: "Folder",
        children: [],
      },
    ],
  },
];
