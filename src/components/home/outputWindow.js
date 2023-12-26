/* eslint-disable no-unused-vars */
import { CsvToHtmlTable } from "react-csv-to-table";
import { customers_csv } from "../../dummy/customers";
import { categories_csv } from "../../dummy/categories";
import { employees_csv } from "../../dummy/employees";
import { shippers_csv } from "../../dummy/shippers";
import { suppliers_csv } from "../../dummy/suppliers";
import { CSVLink } from "react-csv";
import { SiMicrosoftexcel } from "react-icons/si";

export default function OutputWindow(props) {
  let data;
  switch (props.queriedTable) {
    case "customers":
      data = customers_csv;
      break;
    case "categories":
      data = categories_csv;
      break;
    case "employees":
      data = employees_csv;
      break;
    case "shippers":
      data = shippers_csv;
      break;
    case "suppliers":
      data = suppliers_csv;
      break;
    default:
      data = "😕 No data found!";
  }
  return (
    <>
      <div className="w-11/12 mx-auto overflow-scroll">
        <div className="w-full flex flex-row justify-between">
          <h1 className="font-bold text-3xl my-5">Output</h1>
          <CSVLink
            data={data}
            filename={props.queriedTable}
           
            className="flex flex-row items-center bg-blue-500 hover:bg-opacity-90 my-4 text-white font-bold py-2 px-4 rounded-lg"
          >
            <SiMicrosoftexcel className="mx-2" />
            Export as CSV
          </CSVLink>
        </div>
        <CsvToHtmlTable
          tableClassName="w-full rounded-md"
          data={data}
          hasHeader={true}
          allowDownload={true}
          csvDelimiter=","
        />
      </div>
    </>
  );
}
