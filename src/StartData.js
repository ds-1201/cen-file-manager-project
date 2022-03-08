export const links = [
  {
    id: Math.random().toString(),
    label: "Hello World",
    type: "File",
    content: "Hello World",
  },
  {
    id: Math.random().toString(),
    label: "Test File",
    type: "File",
    content: "Dhruv Shah",
  },
  {
    id: Math.random().toString(),
    label: "Test folder",
    type: "Folder",
    children: [
      {
        id: Math.random().toString(),
        label: "file-2.1",
        type: "File",
        content: "",
      },
      {
        id: Math.random().toString(),
        label: "file-2.2",
        type: "File",
        content: "",
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
        content: "",
      },
      {
        id: Math.random().toString(),
        label: "file-2.4",
        type: "File",
        content: "",
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
