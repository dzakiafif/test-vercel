import { FC } from 'react';

interface TableHeader {
  key: string;
  name: string;
}

interface TableRow {
  [key: string]: any;
}

interface TableProps {
  rows: TableRow[];
  headers: TableHeader[];
}

const Table: FC<TableProps> = ({ rows, headers }) => {
    return (
        <table className="table table-bordered" width="100%">
            <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header.key}>{header.name}</th>
                  ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row: TableRow) => (
                    <tr key={row.id}>
                      {headers.map((header) => (
                        <td key={`${row.id}_${header.key}`}>{row[header.key]}</td>
                      ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
