export const links = [
  {
    label: "file-1.1",
    type: "File",
    path: "/ link",
  },
  {
    label: "file-1.2",
    type: "File",
    path: "/ link2",
  },
  {
    label: "folder-1.1",
    type: "Folder",
    children: [
      {
        label: "file-2.1",
        type: "File",
        path: "/ child",
      },
      {
        label: "file-2.2",
        type: "File",
        path: "/ child",
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
        path: "/child",
        type: "File",
      },
      {
        label: "file-2.4",
        path: "/child",
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

// export const links = [
//   {
//     label: "Link",
//     path: "/link",
//   },
//   {
//     label: "Link2",
//     path: "/link2",
//   },
//   {
//     label: "Parent",
//     children: [
//       {
//         label: "Child",
//         path: "/child",
//       },
//       {
//         label: "Child2",
//         path: "/child",
//       },
//       {
//         label: "Child with Children",
//         children: [
//           {
//             label: "GrandChild 1",
//             path: "/c1",
//           },
//           {
//             label: "GrandChild 2",
//             children: [
//               {
//                 label: "GreatGrandChild",
//                 path: "/gc1",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Parent2",
//     children: [
//       {
//         label: "Parent2Child",
//         path: "/child",
//       },
//       {
//         label: "Parent2Child2",
//         path: "/child",
//       },
//     ],
//   },
// ];
