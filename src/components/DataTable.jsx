import { useState, useMemo } from "react";

const DataTable = ({
  data,
  columns,
  itemsPerPageOptions = [5, 10, 25, 50],
  defaultItemsPerPage = 10,
  searchPlaceholder = "Search...",
  showSearch = true,
  customFilters = null,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting function
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Sorted and filtered data
  const processedData = useMemo(() => {
    let filtered = [...data];

    // Apply search filter
    if (searchTerm && showSearch) {
      filtered = filtered.filter((item) =>
        columns.some((col) => {
          const value = item[col.key];
          if (value === null || value === undefined) return false;
          return String(value).toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;

        let comparison = 0;
        if (typeof aVal === "number" && typeof bVal === "number") {
          comparison = aVal - bVal;
        } else {
          comparison = String(aVal).localeCompare(String(bVal));
        }

        return sortConfig.direction === "asc" ? comparison : -comparison;
      });
    }

    return filtered;
  }, [data, searchTerm, sortConfig, columns, showSearch]);

  // Pagination
  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = processedData.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, itemsPerPage]);

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return (
        <span className="sort-icon-container">
          <span className="sort-icon neutral">▲</span>
          <span className="sort-icon neutral">▼</span>
        </span>
      );
    }
    if (sortConfig.direction === "asc") {
      return (
        <span className="sort-icon-container">
          <span className="sort-icon active">▲</span>
          <span className="sort-icon neutral">▼</span>
        </span>
      );
    }
    return (
      <span className="sort-icon-container">
        <span className="sort-icon neutral">▲</span>
        <span className="sort-icon active">▼</span>
      </span>
    );
  };

  return (
    <div className="datatable-container">
      {/* Search and Filters Bar */}
      <div className="datatable-controls">
        {showSearch && (
          <div className="search-box">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        )}
        {customFilters && <div className="custom-filters">{customFilters}</div>}
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  className={col.sortable !== false ? "sortable" : ""}
                  style={{ width: col.width || "auto" }}
                >
                  <div className="th-content">
                    <span>{col.label}</span>
                    {col.sortable !== false && getSortIcon(col.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr key={row.id || rowIndex}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="no-data">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="datatable-footer">
        <div className="pagination-info">
          Showing {startIndex + 1} to {Math.min(endIndex, processedData.length)}{" "}
          of {processedData.length} entries
        </div>

        <div className="pagination-controls">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="items-per-page-select"
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option} per page
              </option>
            ))}
          </select>

          <div className="pagination-buttons">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              «
            </button>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ‹
            </button>

            {/* Page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`pagination-btn ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              ›
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              »
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .datatable-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .datatable-controls {
          display: flex;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          min-width: 250px;
        }

        .search-input {
          width: 100%;
          padding: 10px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .custom-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
        }

        .data-table th {
          text-align: left;
          padding: 18px 24px;
          background-color: #f8fafc;
          font-weight: 600;
          color: #64748b;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          border: 1px solid #e2e8f0; /* Added border for grid */
        }

        .data-table th.sortable {
          cursor: pointer;
          user-select: none;
        }

        .data-table th.sortable:hover {
          background-color: #f1f5f9;
        }

        .th-content {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: space-between;
        }

        .sort-icon-container {
          display: flex;
          flex-direction: column;
          gap: -2px;
          line-height: 0.6;
        }

        .sort-icon {
          font-size: 10px;
          transition: all 0.2s;
        }

        .sort-icon.neutral {
          color: #cbd5e1;
        }

        .sort-icon.active {
          color: #3b82f6;
        }

        .data-table td {
          padding: 20px 24px;
          border: 1px solid #e2e8f0; /* Changed to full border for grid */
          color: #334155;
          font-size: 14px;
        }

        .data-table tr:hover {
          background-color: #f8fafc;
        }

        .no-data {
          text-align: center;
          padding: 48px 24px !important;
          color: #94a3b8;
          font-style: italic;
        }

        .datatable-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
          gap: 16px;
        }

        .pagination-info {
          color: #64748b;
          font-size: 14px;
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .items-per-page-select {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          background-color: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .items-per-page-select:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .pagination-buttons {
          display: flex;
          gap: 4px;
        }

        .pagination-btn {
          min-width: 36px;
          height: 36px;
          padding: 0 8px;
          border: 1px solid #e2e8f0;
          background-color: white;
          color: #64748b;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .pagination-btn:hover:not(:disabled) {
          background-color: #f8fafc;
          border-color: #cbd5e1;
        }

        .pagination-btn.active {
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .datatable-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .pagination-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .pagination-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default DataTable;
