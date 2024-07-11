// // import React, { useState } from 'react';

// // const PDFViewer = () => {
// //   const [isViewerOpen, setIsViewerOpen] = useState(false);

// //   const toggleViewer = () => {
// //     setIsViewerOpen(!isViewerOpen);
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center">
// //       <div>
// //         <button
// //           className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
// //           onClick={toggleViewer}
// //         >
// //           Open PDF
// //         </button>
// //       </div>

// //       {isViewerOpen && (
// //         <div className="w-[90vw] max-w-[800px] rounded-md mt-4 bg-white">
// //           <div className="flex justify-between items-center p-4 border-b">
// //             <div className="font-semibold">PDF Viewer</div>
// //             <div
// //               className="cursor-pointer"
// //               onClick={toggleViewer}
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 className="h-5 w-5"
// //               >
// //                 <path d="M18 6L6 18"></path>
// //                 <path d="M6 6L18 18"></path>
// //               </svg>
// //             </div>
// //           </div>
// //           <div className="flex justify-center p-6">
// //             <div
// //               dir="ltr"
// //               className="relative overflow-hidden w-full h-[70vh] rounded-md border"
// //               style={{ overflow: 'auto' }}
// //             >
// //               <div style={{ minWidth: '100%', display: 'table' }}>
// //                 <div className="p-4">
// //                   {/* PDF content will go here */}
// //                   <div>PDF Content goes here...</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PDFViewer;


// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import samplePDF from './../Assets/pdf/final_resume.pdf';
// import worker from './../Assets/pdf/pdf.worker.mjs'

// // Set the workerSrc for PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = './../Assets/pdf/pdf.worker.mjs';

// const PDFViewer = () => {
//   const [isViewerOpen, setIsViewerOpen] = useState(false);
//   const [numPages, setNumPages] = useState(null);
  
//   const toggleViewer = () => {
//     setIsViewerOpen(!isViewerOpen);
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div>
//         <button
//           className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
//           onClick={toggleViewer}
//         >
//           Open PDF
//         </button>
//       </div>

//       {isViewerOpen && (
//         <div className="w-[90vw] max-w-[800px] rounded-md mt-4 bg-white">
//           <div className="flex justify-between items-center p-4 border-b">
//             <div className="font-semibold">PDF Viewer</div>
//             <div
//               className="cursor-pointer"
//               onClick={toggleViewer}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//               >
//                 <path d="M18 6L6 18"></path>
//                 <path d="M6 6L18 18"></path>
//               </svg>
//             </div>
//           </div>
//           <div className="flex justify-center p-6">
//             <div
//               dir="ltr"
//               className="relative overflow-hidden w-full h-[70vh] rounded-md border"
//               style={{ overflow: 'auto' }}
//             >
//               <div style={{ minWidth: '100%', display: 'table' }}>
//                 <div className="p-4">
//                   <Document
//                     file={samplePDF}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                   >
//                     {Array.from(new Array(numPages), (el, index) => (
//                       <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//                     ))}
//                   </Document>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PDFViewer;



