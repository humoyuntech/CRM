import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

export const DateTime = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Date"
        defaultValue={moment()}
        views={["year", "month", "day"]}
        slotProps={{ textField: { size: "small" } }}
        sx={{maxWidth: "160px"}}
      />
    </LocalizationProvider>
  );
};

export default DateTime;