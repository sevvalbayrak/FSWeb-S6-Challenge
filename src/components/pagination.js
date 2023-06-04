import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Page = (props) => {
  const { handlePageChange, getPreviousPage } = props;

  return (
    <Pagination className="page">
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem onClick={getPreviousPage}>
        <PaginationLink href="#" previous />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={handlePageChange}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={handlePageChange}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={handlePageChange}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={handlePageChange}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={handlePageChange}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" last />
      </PaginationItem>
    </Pagination>
  );
};

export default Page;
