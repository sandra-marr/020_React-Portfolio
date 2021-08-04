import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    };

export default function MyResume() {
    
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Container className="pdfContainer">
      <Document className="pdfDocument"
        file='./SRMResume.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page  pageNumber={pageNumber} className="pdfPage"/>
      </Document>
      <div>
        <p className="pdfContainer">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </Container>
  );
}
